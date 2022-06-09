import axios from 'axios';
import { useState, useEffect } from 'react';
import { uriApiService } from '../config/server';

import { PersonTable } from '../models/Person';
import { ResponseApi } from '../models/Response';
import { ResponseData } from '../models/GetTable';

// lo hacemos aca, para que en los componentes no haya logica, solo jsx. 


/* funcino que hace el PUT a la base de datos, recibe como parametro el objeto ingresado en los inputs. */
export const PutTablePerson = async (object: PersonTable) => {
    const uri = uriApiService + "editData/" + object.id;

    let response: ResponseApi = { message: "", error: false }




    try {
        await axios.put(uri, object);
        response.error = false;
        response.message = "¡Se modifico satisfactoriamente!";
    }
    catch (er) {
        response.error = true;
        response.message = "¡Hubo un error!";
    }



    return response;
}



/* funcion que hace el GET a la base de datos, para traer los campos de la persona y poder ponerlos en los inputs*/
export const GetTablePerson = (idPerson: number) => {

    const uri = uriApiService + "dates/" + idPerson;

    const [table, setTable] = useState<ResponseData>({
        data: new Array<PersonTable>(),
        message: ""
    })

    useEffect(() => {
        getTable();
    }, [])


    const getTable = async () => {
        try {
            let res = await axios.get(uri)
            setTable({ data: res.data, message: "Okey" });
        }
        catch (error) {
            setTable({ data: new Array<PersonTable>(), message: "Error" })
        }
    }



    return table;
}