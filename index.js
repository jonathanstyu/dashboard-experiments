const { Client } = require('pg');
const client = new Client();
const fetch = require("node-fetch");

// API Key and secret stuff
const variables = require('./vars');

const Sequelize = require('sequelize');
// const sequelize = new Sequelize('database', 'username', 'password');

var Organization = require("./modules/organization")

async function setupClient() {
  await client.connect()

  const res = await client.query('SELECT $1::text as message', ['Hello world!'])
  console.log(res.rows[0].message) // Hello world!
  await client.end()
}

async function getDealsFromPipeDrive() {
  var url = 'https://api.pipedrive.com/v1/organizations?api_token='+ variables.pipedriveAPIKey;
  var response = await fetch(url);
  var json = await response.json()
  console.log(json);
}

getDealsFromPipeDrive()
