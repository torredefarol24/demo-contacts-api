import chai from 'chai'
import chaiHttp from 'chai-http'
import { testingServer } from '../test_server';

chai.use(chaiHttp)


const checkRequiredReqParams = async () => {
      const contactCreateData = {
            email : "something@something.com"
      }

      try {
            let serverResponse = await chai.request(testingServer).post("/api/v1/people/22b/contacts").send(contactCreateData)
            chai.expect(serverResponse.status).to.eql(400)
      } catch (err) {
            chai.assert.fail(err)
      }
}


describe("Contact", () => {
      it("should check for required fields", checkRequiredReqParams)
})