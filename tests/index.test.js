const request = require('supertest');
const app = require('../index.js');

beforeAll(()=>{
    server = app.listen(5000);
});

describe('GET /', () => {
    it('should return Hello World response for / route', async () => {
        const res = await request(app).get('/');
        expect(res.text).toEqual('Hello World!');
    });
});

afterAll(()=>{
    server.close();
});