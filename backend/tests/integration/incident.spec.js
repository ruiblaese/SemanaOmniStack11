const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Incident', () => {

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


  it('should be able to create a new Incident', async () => {
    const response = await request(app)
      .post('/incidents')
      .set('authorization', ONG.id)
      .send({
        "title": "title test",
        "description": "desription test",
        "value": 99.99
      });
    expect(response.body).toHaveProperty('id');
  })

  it('should be able to get Profile - incidents of ONG', async () => {
    const response = await request(app)
      .get('/incidents')
    expect(response.body).toHaveLength(1);
  })

})
