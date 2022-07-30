const express = require('express');
//require the middleware
const router = express.Router();


//dashboard/ => login

//localhost:8080/ => public home page

router.get("/",  ( req, res) =>{
  console.log('THIS IS PUBLIC HOME PAGE GET REQ SUCCESS')
  res.status(200).json()
});


router.get("/signup",  ( req, res) =>{
  console.log('THIS IS GET REQ SUCCESS')
  res.status(200).json()
});

router.post("/signup",  ( req, res) =>{
  console.log('THIS IS POST REQ SUCCESS')
  res.status(200).json()
});

router.get("/login",  ( req, res) =>{
  console.log('THIS IS GET REQ SUCCESS')
  res.status(200).json()
});

router.post("/login",  ( req, res) =>{
  console.log('THIS IS POST REQ SUCCESS')
  res.status(200).json()
});


module.exports = router;
