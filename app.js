/**
 * Actvidad 2
 * Author: Christian Aguirre
 */
const express = require('express');
const morgan = require('morgan');

// const indexFile = `${__dirname}/app.js`

const app = express();

const port = process.env.port || 3000;

app.use(morgan('dev'));


app.get('/',(req, res) =>{
  res.send('Código ejecutándose correctamente...');
  })

app.use((req, res)=>{
  const err = '404. Not Found';

  res.status(404).json(err)
});

app.use((req, res)=>{
  const err = '500. Server error';
  res.status(500).json(err);
});
  
app.listen(port, ()=>{
  console.log(`Aplicación ejecutándose en el puerto: ${port}` )
});