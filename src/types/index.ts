export type SignInData = {
  email: string
  password: string
};

export type Client = {
  id: string
  nome: string
  dataAtualizacao: string
  create_Client: string
}

export type RegisterClient = {
  nome: string
}

export type RegisterData = {
  nome: string
  email: string
  senha: string
  confirmeSenha: string
}