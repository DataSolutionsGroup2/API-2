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
