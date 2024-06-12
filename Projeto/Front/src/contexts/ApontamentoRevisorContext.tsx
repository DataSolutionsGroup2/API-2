import { createContext, ReactNode, useEffect, useState } from "react";
import { ApontamentoRevisor, ApontamentoRevisorType } from "../types/index.ts";
import axios from "axios";


export const ApontamentoContext = createContext<ApontamentoRevisor | undefined>(undefined);
export const ApontRevisorProvider = ({children}: {children:ReactNode}) => {
    const [data, setData] = useState<ApontamentoRevisorType[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get('http://localhost:3001/apontamentorevisor')
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            setError(error.messege);
        }); 
    }, []);
    return(
        <ApontamentoContext.Provider value={{data, error}}>
            {children}
        </ApontamentoContext.Provider>
    );
}