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
        const sut = await getData()
        const data = JSON.parse(sut.text)

        expect(data).toBeInstanceOf(Array)
        expect(data.length).toEqual(0)
    })

    test('/POST - should return an item and return ok', async ()=> {
        const sut = await insertData()
        const expected = JSON.stringify({ok: 1})

        expect(sut.text).toStrictEqual(expected)
    })

    test('/DELETE - Should delete database', async () => {
        await insertData()
        await superTest(server).delete('/')
        const getedData = await getData()
        const data = JSON.parse(getedData.text)

        expect(data).toBeInstanceOf(Array)
        expect(data.length).toEqual(0)
    })
})