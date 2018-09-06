/**
 * Actvidad 1
 * Author: Christian Aguirre
 */
const express = require('express');

const app = express();

const port = 3000;

app.get('/',(req, res) =>{
  res.send('01.  Basic Node Server');
  })
  
app.listen(port, ()=>{console.log(`Aplicación ejecutándose en el puerto: ${port}` )});