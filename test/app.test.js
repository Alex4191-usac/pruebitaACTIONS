const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)


describe('cuando se maneje los usuarios', () => {
    test('cuando llamemos al usuario mediantet GET-200', async () => {
        await api
            .get('/api/v1/user')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })
})