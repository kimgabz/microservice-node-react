import express from 'express';

const router = express.Router();

router.get('/api/users/currentuser', (req, res) => {
  console.log('Welcome to summonors Rift');
  res.send('Welcome to summonors Rift');
});

export { router as currentUserRouter };
