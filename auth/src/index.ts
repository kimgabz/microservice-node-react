import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());

app.get('/api/users/welcome', (req, res) => {
  console.log('Welcome to summonors Rift');
  res.send('Welcome to summonors Rift');
});

app.get('/api/users/currentuser', (req, res) => {
  res.send('Hi there!!!!!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000!!!!!!!!!!!!!!!!!!!!!!!');
});
