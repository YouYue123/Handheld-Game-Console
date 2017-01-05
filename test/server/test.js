'use strict'
const chai = require('chai')
const axios = require('../../config')
describe('Static Server',()=>{
  describe('vue-client',()=>{
    it('should send vue-client without error',(done)=>{
      axios.get('/vue')
        .then(response=>{
          chai.expect(response.data).to.equal('Hello Vue')
          done()
        })
        .catch(err=>{
          console.log(err)
          done(err)
        })
    })
  })
})
