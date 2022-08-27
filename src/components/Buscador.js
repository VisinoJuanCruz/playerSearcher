import { useNavigate } from 'react-router-dom'

function Buscador(){

    const history = useNavigate();
    
    const submitHandler = e => {
    
        e.preventDefault();
        const keyword = e.currentTarget.keyword.value.trim();
       
        e.currentTarget.summoner.value = '';
        history(`/results?summoner=${keyword}`)
            
        
    }

    return(
        <>
            <form className="d-flex align-items-center" onSubmit={submitHandler}>   {/*Cuando se envía el formulario se ejecuta la funcion submitHandler. */}
                <label className="form-label mb-0">
                    <input className="form-control" type="text" name="summoner" placeholder="Buscar"/>
                </label>
                <button className="btn btn-dark mx-2" type="submit" > Buscar </button>
            </form>
           
        </>
    );
}

export default Buscador;