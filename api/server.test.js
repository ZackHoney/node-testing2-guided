const db = require('../data/dbConfig')
const request = require('supertest')
const server = require('./server')

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async () => {
    await db.seed.run()
})

describe('[GET] /hobbits', () => {
    test('responds with 200 OK', async () => {
        const res = await request(server).get('/hobbits')
        expect(res.status).toBe(200)
    })
    test('responds with all the hobbits', async () => {
        const res = await request(server).get('/hobbits')
        expect(res.body).toHaveLength(4)
    })
})

describe('[POST] /hobbits', () => {
    const bilbo = { name: 'bilbo'}
    test('adds a hobbit to the database', async () => {
        const res = await request(server).post
    })
    test('responds with the new hobbit', async () => {

    })
})