const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Session', () => {

  const ONG = {
    id: "aaaaaaaa",
    name: "test name",
    email: "name@server.com",
    whatsapp: "4712345678901",
    city: "city",
    uf: "uf"
  };


  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();

    await connection('ongs').insert(ONG);
  });

  afterAll(async () => {
    await connection.destroy()
  });


  it('should be able to create a new Session', async () => {
    const response = await request(app)
      .post('/sessions')
      .send({
        id: ONG.id
      });
    expect(response.body).toHaveProperty('name');
  })

})
