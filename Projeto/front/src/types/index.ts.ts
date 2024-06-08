export type EditorDataType = {
    id: number;
    cidade: string;
    atribuicao: string;
    status: string;
  };
  
  export type EditorContextType = {
    data: EditorDataType[];
    error: string | null;
  };
  