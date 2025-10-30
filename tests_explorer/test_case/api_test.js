const request = require('supertest');
const { expect } = require('chai');
const { Endpoints } = require('../object_repository/endpoints');
const { baseConfig, createHeaders } = require('../utils/helper');


describe('🧪 API Testing Demo', () => {
  it('GET All Users', async () => {
    const res = await request(baseConfig.baseURL)
      .get(Endpoints.getAllUsers)
      .set(createHeaders());

    expect(res.status).to.equal(200);
    expect(res.body.total).to.be.equal(12);
  });

  it('GET 1 User', async () => {
    const res = await request(baseConfig.baseURL)
      .get(Endpoints.getUsers)
      .set(createHeaders());

    expect(res.status).to.equal(200);
    expect(res.body.data.id).to.be.equal(2);
  });
});
