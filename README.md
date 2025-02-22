
INFELIZMENTE NAO DEU PARA TERMINAR O PROJETO INTEIRO PORQUE CALCULEI ERRADO O PRAZO
COM O QUE EU QUERIA ENTREGAR...
MAS COMO SOLICITADO, ESTÁ AQUI ATÉ ONDE CONSEGUI AVANÇAR.

O back end esta separado pois não consegui subir o projeto inteiro em um commit.
Porém na minha máquina eu criei uma pasta do backend e um frontend para desenvolve o projeto

qualquer dúvida sigo a disposição.

banco de dados escolhido foi prisma e a biblioteca para interagir com o mesmo
é a @prisma/client

testar comunicação entre front e back:


"use client";
import { useEffect, useState } from "react";
import api from "@/services/api";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/ping")
      .then(response => setMessage(response.data))
      .catch(error => console.error("Erro ao conectar com o backend", error));
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <h1 className="text-2xl">{message || "Carregando..."}</h1>
    </main>
  );
}


Ferramenta para teste: Postman (usar aplicação de postman local)

porta que o backend está usando "http://localhost:3001"
porta que o frontend está usando "http://localhost:3000"

teste create user:
url: http://localhost:3001/user/create-user
body json para teste:

json body: {
  "name": "João da Silva",
  "email": "joao@email.com",
  "password": "123456",
  "role": "USER"
}
a ideia era o usuário registrar uma conta para registrar serviços e outra caso ele queira para agendamentos.
porém, devido ao prazo curto, não consegui aplicar essa ideia.



encryptador de senhas: npm install bcrypt


teste para login 
url: http://localhost:3001/auth/login
json body: {
  "email": "joao@email.com",
  "password": "123456"
}



