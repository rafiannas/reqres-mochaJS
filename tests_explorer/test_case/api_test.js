import request from 'supertest';
import { expect } from 'chai';
import { Endpoints } from '../object_repository/endpoints.js';
import { baseConfig, createHeaders } from '../utils/helper.js';

import https from "https";
import dns from "dns";

const ipv4Agent = new https.Agent({
  family: 4,
  lookup: (hostname, opts, cb) => {
    dns.lookup(hostname, { family: 4 }, cb);
  }
});

describe('🧪 API Testing Demo', () => {
  it('GET All Users', async () => {
    const res = await request(baseConfig.baseURL)
      .get(Endpoints.getAllUsers)
      .agent(ipv4Agent)
     // .set(createHeaders());

    console.log("STATUS:", res.status);
    console.log("BODY:", res.body);

    expect(res.status).to.equal(200);
    expect(res.body.total).to.be.equal(12);
  });

  it('GET 1 User', async () => {
    const res = await request(baseConfig.baseURL)
      .get(Endpoints.getUsers)
      .agent(ipv4Agent)
     // .set(createHeaders());

    expect(res.status).to.equal(200);
    expect(res.body.data.id).to.be.equal(2);
  });
});
