import {app} from '../index'
import chai from 'chai'
const expect = chai.expect
chai.should()

describe('Initial test', ()=>{
    describe('Is server running', ()=>{
    it('App servered should be a function', ()=>{
        expect(app).to.be.a('function')
    })
    })
})
