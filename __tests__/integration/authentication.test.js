import request from 'supertest';
import utils from '../utils';
import app from '../../src/app';

/**
 * Verifica se a rota /login retorna 200 e se estou autenticado através
 * do token JWT
 */
describe('Authentication', () => {
  it('[SUCCESS]  Should login is OK', async () => {
    const response = await request(app)
    .post('/login')
    .set('Content-Type', 'application/json')
    .send({
      email:"vanessa2@gmail.com",
      password:"123456"
    });
    expect(response.status).toBe(200);
    expect(utils.authorize()).toBe('token');
    expect(response.body).toMatchObject({ msg: 'Authention success' });
  });
  // it('[SUCCESS]  Should health is OK', async () => {

  // });
});
