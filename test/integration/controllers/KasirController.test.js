var session = require('supertest-session');
const assert = require('assert');

var testSession = null;
var authenticatedSession = null;

beforeEach(function (done) {
  testSession = session(sails.hooks.http.app);
  testSession.post('/login')
  .send({ username: 'kasir', password: 'kasir' })
  .expect(200)
  .end(done);
});

describe('KasirController', function() {
  describe('#pembelian', () => {
    it('should successfully jual suatu atau beberapa barang', (done) => {
      testSession
        .post('/pembelian') 
        .send({
          data: [
            [
              '5a000adf2e66825d5183d324',
              'test',
              '3',
              '300000'
            ]
          ]
        })
        .expect(200)
        .end(done)
    })
  })
});