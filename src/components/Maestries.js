import axios from 'axios'
import "./Maestries.css"

function Maestries(props){

    console.log("MAESTRIES PLAYER DATA")
    console.log(props.playerMaestriesData)
    console.log("CHAMPS JSON")
    console.log(props.championsJson)


    return (
        <>
            <div className="container container-maestries lineUp">
                <div className="row">
                {
                props.playerMaestriesData.map((oneChamp,index) => {

                var champData = (props.championsJson.find(champ => champ[1].key == oneChamp.championId))[1]
                
                return(
                    <div className="col-sm-4">
                        <div className="champ-maestrie-card" >
                            <div className="row">
                                <div className="col-12 champ-maestrie-info">
                                    <p className="champ-maestrie-name">{champData.name } </p>
                                </div>
                                <div className="col-sm-4 ">
                                    <img width="100" height="100" className="champ-maestrie-img" src={`http://ddragon.leagueoflegends.com/cdn/12.12.1/img/champion/${champData.id}.png`}></img>
                                </div>
                                <div className="col-8 champ-maestrie-data">
                                {/* <p>Champ id:</p>{oneChamp.championId} */}
                                    <p className="champ-maestrie-level">
                                    Maestria: 
                                    {   oneChamp.championLevel == 7 ? 
                                        <strong className="text-danger"> {oneChamp.championLevel}</strong>
                                    :
                                        oneChamp.championLevel == 6 ? 
                                        <strong className="text-white"> {oneChamp.championLevel}</strong>
                                    :
                                        <strong>{oneChamp.championLevel}</strong>
                                }
                                    </p>
                                <p className="champ-maestrie-points">Puntos de Maestria: {oneChamp.championPoints}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                    })
                }
                </div>
            </div>
        </>
    )
}
export default Maestries