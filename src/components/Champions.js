import { useState, useEffect} from 'react'
import axios from 'axios'
import "./Champions.css"

function Champions() {

    const [championsJson, setChampionJson] = useState([])

    
     
      

      useEffect(()=> {
        axios.get("http://ddragon.leagueoflegends.com/cdn/12.12.1/data/en_US/champion.json").then(function (response){
        setChampionJson(Object.entries(response.data.data))
        //const championsData = Object.entries(championsJson.data)
       
      })        
    
    },[])
    console.log(championsJson)
  



    return(
        <div className="container champ-container">
            <div className="row">
                {
                    championsJson.map((oneChamp) => {
                        return(
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                


                            
                            <div className="champ-card card-body my-3">
                            <h5 className="card-title h3 text-center">{oneChamp[1].id}</h5> 
                            <img className="champ-img m-auto" height="100%" width="100%" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${oneChamp[1].id}_0.jpg`}></img>

                                <h5 className="mt-3 champ-name">{oneChamp[1].title}</h5>
                                <p className="card-text">{oneChamp[1].blurb}</p>
                                <ul className="d-flex list-unstyled">
                                {
                                    oneChamp[1].tags.map((oneTag)=>{
                                        return(
                                            <li className="champ-class m-auto p-1">{oneTag}</li>
                                        )
                                    }
                                    )
                                }
                                </ul>
                                <a href="#" class="btn champ-btn ">See More</a>
                            </div>
                            


                                
                                
                            </div>
                        )
                        
                        
                    }
                        
                    )
                }

            </div>
        </div>
    )
}

export default Champions;