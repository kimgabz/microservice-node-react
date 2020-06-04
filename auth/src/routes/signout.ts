import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req, res) => {
  console.log('/api/users/signout');
  res.send('/api/users/signout');
});

export { router as signoutRouter };
