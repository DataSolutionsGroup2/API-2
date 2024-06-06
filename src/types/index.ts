export interface GraphicEditorProps {
  cidade: string;
  atribuicao?: string;
  andamento: number;
  finalizado: number;
  sem_atribuicao: number;
}

export interface CityStatisticstbaoiProps {
  cidade: string;
  area_km2: number;
}

export interface GraphicRevisorProps {
  cidade: string;
  analista?: string;
  andamento: number;
  finalizado: number;
}

export interface GraphicQuantityofGraphsProps {
  cidade: string;
  quantidade: number;
}

export interface Button {
  name: string;
  onClick: () => void;
}
