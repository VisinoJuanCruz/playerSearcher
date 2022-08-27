import axios from 'axios'
import './App.css';
import {useState, useEffect} from 'react'
import Header from "./components/Header"
import PlayerData from "./components/PlayerData"
import Maestries from "./components/Maestries"
import { Routes, Route} from 'react-router-dom';
import Champions from "./components/Champions"
import Home from "./components/Home"

import BRONZEImg from './images/ranked-emblems/Emblem_Bronze.png'
import SILVERImg from './images/ranked-emblems/Emblem_Silver.png'
import GOLDImg from './images/ranked-emblems/Emblem_Gold.png'
import PlatinumImg from './images/ranked-emblems/Emblem_Platinum.png'
import DiamondImg from './images/ranked-emblems/Emblem_Diamond.png'
import MasterImg from './images/ranked-emblems/Emblem_Master.png'
import GrandMasterImg from './images/ranked-emblems/Emblem_Grandmaster.png'
import ChallengerImg from './images/ranked-emblems/Emblem_Challenger.png'
import IronImg from './images/ranked-emblems/Emblem_Iron.png'


function App() {

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
    <div >
        <div class="bg-container"></div>
    
    <Header/>
    <div className="mt-5">
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/champions" element={ <Champions/> }  /> 
    </Routes>
    </div>

  
  </div>);
}

export default App;
