import request from 'supertest';
import { app } from '../../app';

it('it returns a 201 on successful signup', async () => {
  return await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: 'password' })
    .expect(201);
});

it('it returns a 400 on empty body', async () => {
  return await request(app).post('/api/users/signup').send({}).expect(400);
});

it('it returns a 400 on invalid email', async () => {
  return await request(app)
    .post('/api/users/signup')
    .send({ email: 'qerupwoeiruqioweru', password: 'password' })
    .expect(400);
});

it('it returns a 400 on invalid password', async () => {
  return await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: 'p' })
    .expect(400);
});

it('it returns a 400 with mising email and  password', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com' })
    .expect(400);

  return await request(app)
    .post('/api/users/signup')
    .send({ password: 'password' })
    .expect(400);
});

it('duplicate email not allowed', async () => {
  await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: 'password' })
    .expect(201);

  return await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: 'password' })
    .expect(400);
});

it('sets a cookie after successful signup', async () => {
  const response = await request(app)
    .post('/api/users/signup')
    .send({ email: 'test@test.com', password: 'password' })
    .expect(201);

  expect(response.get('Set-Cookie')).toBeDefined();
});
