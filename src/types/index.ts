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
