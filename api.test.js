const fetch = require('node-fetch');

const app = require('./api').app;

const url = 'http://localhost:8000';



beforeAll(function () {
  server = require('./api.js');
});

afterAll(function () {
  server.close();
});



test('works with GET /', () => {
	expect.assertions(1);
    return fetch(url)
        .then(r => expect(r.status).toEqual(200))
});

test('works with GET /k_invert', () => {
	expect.assertions(1);
    return fetch(url+"/k_invert?k=2")
        .then(r => expect(r.status).toEqual(200))
});

test('GET /k_invert?k=2 should return 200 and result property in body', () => {
  return fetch(url + '/k_invert?k=2')
    .then(response => {
      expect(response.status).toBe(200);
      return response.json();
    })
    .then(rjson => {
      expect(rjson.result).toBeDefined();
    });
});