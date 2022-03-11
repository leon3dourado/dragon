import { format, parseISO } from "date-fns";


export function formatDate(date: string){
    return format(parseISO(date), "dd/MM/yyyy")
}


export function currentDate(){
    return new Date(
        new Date().getTime() - new Date().getTimezoneOffset() * 60000
      ).toISOString()
}