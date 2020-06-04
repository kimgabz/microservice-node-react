import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (req, res) => {
  console.log('/api/users/signin');
  res.send('/api/users/signin');
});

export { router as signinRouter };
