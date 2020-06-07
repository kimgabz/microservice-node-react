import request from 'supertest';
import { app } from '../../app';

it('responds with details about the current user', async () => {
  //   const authresponse = await request(app)
  //     .post('/api/users/signup')
  //     .send({
  //       email: 'test@test.com',
  //       password: 'password',
  //     })
  //     .expect(201);

  //   const cookie = authresponse.get('Set-Cookie');
  const cookie = await global.signin();

  const response = await request(app)
    .post('/api/users/currentuser')
    .set('Cookie', cookie)
    .send({})
    .expect(200);

  //   console.log(response.get('Set-Cookie'));
  expect(response.body.currentUser.email).toEqual('test@test.com');
});

it('responds with null if not authenticated', async () => {
  const response = await request(app)
    .post('/api/users/currentuser')
    .send({})
    .expect(200);

  expect(response.body.currentUser).toEqual(null);
});
