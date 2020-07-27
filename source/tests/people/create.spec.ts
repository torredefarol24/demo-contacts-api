import chai from 'chai'
import chaiHttp from 'chai-http'
import { testingServer } from '../test_server';

chai.use(chaiHttp)

const peopleCreate_CB = async () => {
      const peopleCreateData = {
            name: "Jason",
            age: 29,
            height: 155
      }

      try {
            let serverResponse = await chai.request(testingServer).post("/api/v1/people").send(peopleCreateData)
            chai.expect(serverResponse.status).to.eql(201)
      } catch (err) {
            chai.assert.fail(err)
      }
}

const validateReqParmas_CB = async () => {
      const peopleCreateData = {
            name: "Jason",
            age : "25s",
            height: 155
      }

      try {
            let serverResponse = await chai.request(testingServer).post("/api/v1/people").send(peopleCreateData)
            chai.expect(serverResponse.status).to.eql(422)
      } catch (err) {
            chai.assert.fail(err)
      }
}

const checkRequiredReqParams = async () => {
      const peopleCreateData = {
            name: "Jason",
            age : 25
      }

      try {
            let serverResponse = await chai.request(testingServer).post("/api/v1/people").send(peopleCreateData)
            chai.expect(serverResponse.status).to.eql(400)
      } catch (err) {
            chai.assert.fail(err)
      }
}


describe("Person", () => {
      it("should check for valid request params", validateReqParmas_CB)
      it("should check for required fields", checkRequiredReqParams)
      it("should create person",peopleCreate_CB)
})