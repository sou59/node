const chai = require('chai')
const chaihttp = require('chai-http')
const mocha = require('mocha')

const expect = chai.expect

describe('Black box API testing', function () {
    it('Should get nothing from /v1:albums.json', function (done) {
        chai.request('http://localhost:8080')
            .get('/v1/albums.json')
            .end(function (err, res) {
                expect(res).to.have.status(200)
                expect(res).to.be.json
                expect(res.body.error).to.be.null
                expect(res.body.data.albums).to.be.a('array')
                expect(res.body.data.albums).to.be.empty
                done()
            })
    })

    it('Should fail to add an album using .v1/albums.json', function (done) {
        chai.request('http://localhost:8080')
            .put('/v1/albums.json')
            .send({
                name: 'testing2015',
                date: '2015-01-01',
                title: 'Testing Album',
                description: '#winning'
            })
            .end(function (err, res) {
                expect(res).to.have.status(403)
            })
    })
})