const request = require('supertest');
const app = require('../index.js');

describe('GET /', () => {
    it('should return Hello World response for / route', async () => {
        const res = await request(app).get('/');
        expect(res.text).toEqual('Hello World!');
    });
});