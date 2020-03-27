const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Profile', () => {

  const ONG = {
    id: "aaaaaaaa",
    name: "test name",
    email: "name@server.com",
    whatsapp: "4712345678901",
    city: "city",
    uf: "uf"
  };

  const INCIDENT = {
    title: "title test",
    description: "desription test",
    value: 99.99,
    ong_id: ONG.id
  }

  beforeAll(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();

    await connection('ongs').insert(ONG);

    await connection('incidents').insert(INCIDENT);
    await connection('incidents').insert(INCIDENT);
    await connection('incidents').insert(INCIDENT);
    await connection('incidents').insert(INCIDENT);
  });

  afterAll(async () => {
    await connection.destroy()
  });


  it('should be able to get Profile - incidents of ONG', async () => {
    const response = await request(app)
      .get('/profile')
      .set('authorization', ONG.id);
    expect(response.body).toHaveLength(4);
  })

})
