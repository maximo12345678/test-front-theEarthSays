import { PersonTable } from "./Person"

export interface ResponseData{
    data: Array<PersonTable>,
    message: string
}