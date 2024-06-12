export interface InsertData {
  id: string;
  cidade: string;
  atribuicao: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

export interface UserInterface {
  name: string;
  password: string;
}

export interface StatisticCityProps {
  cidade: string;
  area_km2: number;
}

export interface GraficEditorProps {
  cidade: string;
  atribuicao?: string;
  andamento: number;
  finalizado: number;
  sem_atribuicao: number;
}

export interface GraficRevisorProps {
  cidade: string;
  analista?: string;
  andamento: number;
  finalizado: number;
}

export interface GraphicNumberPolProps {
  cidade: string;
  total: number;
}

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

export type RevisorDataType = {
cidade: string;
atribuicao: string;
status: string;
count: string;
sum: number;
}

export type RevisorContextType = {
data: RevisorDataType[];
error: string| null;
}

export type ApontamentoRevisorType = {
atribuicao: string;
cidade: string;
correcao: string;
}
export type ApontamentoRevisor = {
data: ApontamentoRevisorType[];
error: string | null;
}
