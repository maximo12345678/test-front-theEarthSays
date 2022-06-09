import React, {useState, useEffect} from 'react'
import { PersonTable } from '../models/Person';
import { PutTablePerson } from '../data/dataPerson';
import { ResponseApi } from '../models/Response';
import { ResponseData } from '../models/GetTable';

type Props = {
    datePerson: PersonTable
}


const Form = (props : Props) =>{

    const [person, setPerson] = useState<PersonTable>({ /* declaracion del state persona, tomando los datos que vienen por las Props del componente padre (Home) */
        id:         props.datePerson.id,
        name:       props.datePerson.name,
        lastname:   props.datePerson.lastname,
        age:        props.datePerson.age
    })


    const handleChange = (e: any) => { /* funcion para guardar cada campo en el state */
        const { name, value } = e.target;
        setPerson({ ...person, [name]: value })
    }

    const Validation = () => { /* funcion para validar cada campo, si estan vacios. (el error se puede mostrar mejor en una modal) */
        
        if (person.name.trim() === ""){
            alert("El nombre es obligatorio")
            return false;
        }
        else if (person.lastname.trim() === ""){
            alert("El apellido es obligatorio")
            return false;
        }
        else if (person.age <= 0){
            alert("La edad es obligatoria")
            return false;
        }

        return true;
    }


    const SaveData = async (e: React.FormEvent<HTMLFormElement>) =>{ /* recibe el evento del onSubmit del formulario. si pasa la validacion, se llama la funcion que hace el PUT a la base */
        e.preventDefault();

        const validation = Validation();

        if (validation === true){
            let response : ResponseApi;
            response = await PutTablePerson(person); /* (si se guarda correctamente, se puede mostrar mensaje de exito en una modal) */
        }
    }





    return(
        <form className='form' onSubmit={SaveData}>

            <div className='form-section'>
                <label htmlFor='name'>Nombre</label>
                <p><input onChange={handleChange} name="name" value={person.name} type="text" placeholder="Ingrese su nombre"></input></p>
            </div>

            <div className='form-section'>
                <label htmlFor='lastname'>Apellido</label>
                <p><input onChange={handleChange} name="lastname" value={person.lastname} type="text" placeholder="Ingrese su apellido"></input></p>
            </div>

            <div className='form-section'>
                <label htmlFor='age'>Edad</label>
                <p><input onChange={handleChange} name="age" value={person.age} type="number" placeholder="Ingrese su edad"></input></p>
            </div>
            
            <div className='form-section'>
               <button type='submit'>Guardar</button>
            </div>
        </form>
    )
}


export default Form;