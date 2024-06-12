import { createContext, ReactNode, useEffect, useState } from "react";
import { RevisorContextType, RevisorDataType } from "../types/index.ts";
import axios from "axios";


export const RevisorContext = createContext<RevisorContextType | undefined>(undefined);
export const RevisorProvider = ({children}: {children:ReactNode}) => {
    const [data, setData] = useState<RevisorDataType[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get('http://localhost:3001/revisor')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            setError(error.messege);
        }); 
    }, []);
    return(
        <RevisorContext.Provider value={{data, error}}>
            {children}
        </RevisorContext.Provider>
    );
}