const supertest = require('supertest');
const chai = require('chai');
chai.should();

const app = require('../index.js');

describe('server', () => {
  before(() => {
    this.server = supertest(app);
  });
  it('Should return Hello World!', async () => {
    await this.server.get("/")
      .expect(200)
      .then((response) => {
        response.text.should.equal('Hello World!')
      })
  })
});