import React, { createContext, useContext, useEffect, useState } from "react";
import { GradeProps } from "../types";
import axios from "axios";

// Definindo o formato do contexto sem a propriedade 'children'
export interface GradeContextProps {
  grades: GradeProps[];
  loading: boolean;
  error: string | null;
}

// Criando o contexto
const GradeContext = createContext<Partial<GradeContextProps>>({});

// Componente provedor do contexto
export const GradeProvider: React.FC = () => {
  const [grades, setGrades] = useState<GradeProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3100/Gradeatuacao");
        setGrades(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError("Erro ao buscar dados de atuação");
      }
    };

    fetchGrades();
  }, []);

  return (
    <GradeContext.Provider value={{ grades, loading, error }}>
      (children)
    </GradeContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const useGrade = () => {
  return useContext(GradeContext) as GradeContextProps;
};
