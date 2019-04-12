const request = require('supertest');
const server = require('./server.js');

describe('server.js', () => {
    describe('POST', () => {
        it('should respond with 201', async () => {
            const responde = await request(server)
                .post('/games')
                .send({ title: 'DAoC', genre: 'mmorpg', releaseYear: '1995' });

            expect(response.status).toBe(201);
        });
    });

    describe('GET', () => {
        it('should respond with 200', async () => {
            const response = await request(server).get('/');

            expect(response.status).toBe(200);
        });

        it('should return JSON', async () => {
            const response = await request(server).get('/');

            expect(response.type).toBe('application/json');
        });
    });
});