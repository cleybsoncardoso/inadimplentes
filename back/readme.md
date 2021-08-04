# rodar o projeto
para buidar o projeto:
`docker build -t nodejs .`

para rodar o container no mesmo network do banco:

`docker run -p 3000:3000 -d --network mongo_default nodejs`



# criar dados para teste:
rode o comando
`node generateData.js`