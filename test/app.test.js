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
   /* //aqui falla el action ya que el test no es correcto deberia retornar 200
   
    descomentar para ver el funcionamiento del fallo
    test('cuando llamemos al usuario mediantet un id retorna 400', async () => {
        await api
            .get('/api/v1/user/50')
            .expect(400)
            .expect('Content-Type', /application\/json/)
    })*/

    test('cuando llamemos al usuario mediante un id retorna un codigo 200', async () => {
        await api
            .get('/api/v1/user/1')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })
    test('cuando llamemos al usuario mediante un nombre retorna un codigo 200', async () => {
        await api
            .get('/api/v1/user/Brandon')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('cuando llamemos al usuario mediante un id retorna un codigo 200', async () => {
        await api
            .get('/api/v1/user/')
            .expect(400)
            .expect('Content-Type', /application\/json/)
    })
})
