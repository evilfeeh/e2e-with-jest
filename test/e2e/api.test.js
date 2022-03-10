import { jest, describe, expect, test } from "@jest/globals"
import superTest from 'supertest'
import server from '../../src/server.js'

const insertData = async () => {
    return await superTest(server)
        .post('/')
        .send({
            nome: 'teste testing',
            age: 30
        })
}

const getData = async () => {
    return await superTest(server).get('/')
}

describe('API TEST E2E', () => {
    test('/GET - Should return an array', async () => {
        const response = await superTest(server).get('/')
        const data = JSON.parse(response.text)
        expect(data).toBeInstanceOf(Array)
        expect(data.length).toEqual(0)
    })
    test('/POST - should return an item and return ok', async ()=> {
        const response = await superTest(server)
        .post('/')
        .send({
            nome: 'teste testing',
            age: 30
        })
        const expected = JSON.stringify({ok: 1})
        expect(response.text).toStrictEqual(expected)
    })
    test.todo('/delete - test delete router')
})