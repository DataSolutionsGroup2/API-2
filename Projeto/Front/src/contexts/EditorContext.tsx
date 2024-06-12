import axios from "axios";
import { ReactNode, createContext, useEffect, useState } from "react";
import { EditorContextType, EditorDataType } from "../types/index.ts";


export const EditorContext = createContext<EditorContextType | undefined>(undefined);
export const EditorProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<EditorDataType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://localhost:3001/editor')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <EditorContext.Provider value={{ data, error }}>
      {children}
    </EditorContext.Provider>
  );
};
