const mongoose = require('mongoose')
const faker = require('faker')

mongoose.connect('mongodb://localhost:27017/inadimplentes-teste', { useNewUrlParser: true, useUnifiedTopology: true });

const User = require('./src/schemas/Client');

function generateBillet(qtd) {
  const billets = [];
  while (qtd > billets.length) {
    billets.push({
      date: faker.date.past(),
      value: faker.datatype.number(),
      paid: faker.datatype.boolean()
    });
  }
  return billets;
}

async function generateUser(qtd) {
  let current = 0;
  while (current < qtd) {
    const billets = generateBillet(faker.datatype.number(10))
    User.create({
      name: faker.name.findName(),
      billets
    }).then(user => console.log("usuario criado!"));
    current++;
  }
}

generateUser(10);