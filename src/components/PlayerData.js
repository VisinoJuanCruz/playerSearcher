import Maestries from "./Maestries"
import GOLDImg from '../images/ranked-emblems/Emblem_Gold.png'
import "./PlayerData.css"


function DataPlayer(props){

    

    return(
        <>

        <div className="container container-account-data lineUp">
          
            <div className="row ">
              <div className="col-sm-4 account-data">
                <div className="summoner-data">
                  <p>{props.playerData.name}</p>
                    <img width="100" height="100" src={"http://ddragon.leagueoflegends.com/cdn/12.12.1/img/profileicon/" + props.playerData.profileIconId + ".png"} ></img>
                  <p>Level: {props.playerData.summonerLevel}</p>
                </div>
              </div>


            
           <div className="col-sm-8">
              
                <div className="row d-flex justify-content-around ">
                {
                  props.playerRankedData.map((oneRank,index) => {
                    return (
                      <div className="ranked-card col-sm-4 h5">
                        <p>{oneRank.queueType.split("_")[1]}</p>
                        <p>{oneRank.tier} {oneRank.rank}:{oneRank.leaguePoints}LP</p>
                       
                        <img width="100" height="100" src={GOLDImg}></img>

                        {
                          oneRank.hasOwnProperty("miniSeries") ?
                          <p>{oneRank.miniSeries.progress}</p>
                          :
                          <p>No promo</p>
                        }

                        <div className="container">
                          <div className="row">
                            <div className="col-12">
                              <p>Wins: {oneRank.wins}</p>
                            </div>
                            <div className="col-12">
                              <p>Losses: {oneRank.losses}</p>
                            </div>
                          </div>
                        </div>
                      </div> 
                    )
                  })
                }
                </div>
              
            
            </div>
            </div>
            </div>
           <Maestries playerMaestriesData={props.playerMaestriesData} championsJson={props.championsJson}/>
        </>
    )
}
export default DataPlayer;