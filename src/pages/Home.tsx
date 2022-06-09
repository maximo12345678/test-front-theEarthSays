import Formu from '../components/Form';
import { GetTablePerson } from '../data/dataPerson';
import { ResponseData } from '../models/GetTable'

const Home = () =>{

    const table : ResponseData = GetTablePerson(1); /* en una variable TABLE guardamos lo que retorna la funcion que hace el GET a la base */

    return (
        <section className='home'>
            {
                table.message === "Okey" ? 
                (
                    <Formu datePerson={table.data[0]}></Formu> /* le pasamos por props los valores que tiene la persona en la base */
                )
                :
                (
                   <span className='loading'>Cargando...</span> 
                )
            }
            
        </section>
    )
}


export default Home;