# Desafio Backend Node.js

O objetivo do exercício é verificar sua familiaridade com Nodejs, lógica e organização do código

Boa sorte e obrigado por participar!

## Sobre o desafio

Nesse desafio, queremos uma API (GET) que nos forneça os horários disponíveis de 30 em 30 minutos na agenda da loja <br>
_obs: não é o horário por profissional, são os horários disponíveis da loja_

Para isso criamos uma API:

- Consulta de profissional: https://api-homolog.geracaopet.com.br/api/challenges/challenge1/employees <br>
Retorna os profissionais e horário de trabalho.

- Consulta de agendamentos: https://api-homolog.geracaopet.com.br/api/challenges/challenge1/employee/{id-do-profissional}/appointments. <br>
Retorna os agendamentos que cada profissional já tem no dia.


O retorno esperado são os horários livres ainda na loja, deve ser algo como:

```
availableTimes: ["08:00", "08:30", "09:00, "10:00", ...]
```


## Executando Projeto
<br>

- Apos clonar projeto dar o comandos para atualizar as dependências:
``` bash
yarn
``` 
- E comando para executar o projeto:
``` bash
yarn dev
``` 
<br>

- Acessar link http://localhost:3333/v1/docs/ para acessar o swagger do projeto

