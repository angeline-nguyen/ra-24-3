const request = require('supertest');
const imports = require('../index.js');

describe('GET /', () => {
    it('should return Hello World response for / route', async () => {
        const res = await request(imports.app).get('/');
        expect(res.text).toEqual('Hello World!');
    });
});

afterAll(()=>{
    imports.server.close();
});