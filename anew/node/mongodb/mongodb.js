const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const mongoClient = require('mongodb').MongoClient
const app = express()
app.set('port', process.env.Port || 3000)
app.use(morgan('dev'))

var db;
var databaseUrl="mongodb://192.168.0.63:27017"

app.get('/', (req,res) => {
  res.send("Web Server Started~!!")
})

app.get('/things', (req, res) => {
  mongoClient.connect(databaseUrl, function(err, database) {
    if (err != null) {
      res.json({'count':0})
    } else {
      db = database.db('test')
      db.collection('things').find({}).toArray(function(err,result) {
        if (err) throw err;
        console.log('result : ')
        console.log(result)
        res.json(JSON.strigify(result))
      })
    }
  })
});

app.get('/bios', (req, res) => {
  mongoClient.connect(databaseUrl, function(err, database) {
    if (err != null) {
      res.json({'count':0})
    } else {
      db = database.db('test')
      db.collection('bios').find({}).toArray(function(err,result) {
        if (err) throw err;
        console.log('result : ')
        console.log(result)
        res.json(JSON.strigify(result))
      })
    }
  })
});

app.get('/traffic', (req, res) => {
  mongoClient.connect(databaseUrl, function(err, database) {
    if (err != null) {
      res.json({'count':0})
    } else {
      db = database.db('test')
      db.collection('traffic').find({}).toArray(function(err,result) {
        if (err) throw err;
        console.log('result : ')
        console.log(result)
        res.json(JSON.strigify(result))
      })
    }
  })
});

app.get('/seoul', (req, res) => {
  mongoClient.connect(databaseUrl, function(err, database) {
    if (err != null) {
      res.json({'count':0})
    } else {
      db = database.db('test')
      db.collection('seoul').find({}).toArray(function(err,result) {
        if (err) throw err;
        console.log('result : ')
        console.log(result)
        res.json(JSON.strigify(result))
      })
    }
  })
});

app.listen(app.get('port'), () => {
  console.log('3000 Port : Server Started~!!')
})
