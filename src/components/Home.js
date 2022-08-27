import axios from 'axios'
import {useState, useEffect} from 'react'
import PlayerData from './PlayerData'
import "./Home.css"

function Home(){

    const [searchText, setSearchText] = useState("");
    const [playerData, setPlayerData] = useState({})
    const [playerRankedData, setPlayerRankedData] = useState([])
    const [playerMaestriesData, setPlayerMaestriesData] = useState ([])
    const [championsJson, setChampionJson] = useState([])
    
  
    const API_KEY = "RGAPI-a037c01c-6134-46f9-85aa-1b513019bb69"
    
  
    function searchForPlayer(event){
  
  
  
      
      //set up the correct API call
      var APICallString = "https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+searchText+"?api_key="+API_KEY;
      //handle the API call
      axios.get(APICallString).then(function(response){
        //Success
        setPlayerData(response.data)
        axios.get("https://la2.api.riotgames.com/lol/league/v4/entries/by-summoner/"+ response.data.id +"?api_key="+ API_KEY).then(function(response){
          setPlayerRankedData(response.data)
        })
        axios.get("https://la2.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/"+ response.data.id +"?api_key="+ API_KEY).then(function(response){
          setPlayerMaestriesData(response.data)
        })
        axios.get("http://ddragon.leagueoflegends.com/cdn/12.12.1/data/en_US/champion.json").then(function (response){
        setChampionJson(Object.entries(response.data.data))
        //const championsData = Object.entries(championsJson.data)
       
      })
        
      }).catch( function(error){
        // Error
        console.log(error)
      })
    }
  
      


return (
<div className="container home-container text-center ">
        <h5 className="home-title h1 p-5 lineUp"><p><u>ISOTOPOS.GG</u></p></h5>
        <div className="lineUp">
          <input type="text lineUp" onChange={e => setSearchText(e.target.value)}></input>
          </div>
        <br/>
        <button className="btn search-btn m-3  lineUp" onClick={ e => searchForPlayer(e)}>Search for player</button>
        { JSON.stringify(playerData) != '{}' ?
        <div className="container">
          <div className="container my-5">
            <div className="row">
            {/* Listado de rankeds  */}
            <PlayerData playerData={playerData} playerRankedData={playerRankedData} playerMaestriesData={playerMaestriesData} championsJson={championsJson}/>
          </div>
        </div>

       
      </div>
      :
      <>
        <p></p>
      </>
      }
      
    </div>
)
        }
        export default Home;