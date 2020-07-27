import { connect } from 'mongoose';
import { ENV_SETUP } from '../../bootstrap/env_vars';
import chai from 'chai';

const dbConnIT_CB = () => {
      ENV_SETUP();
      const DB_URL : any = process.env.MONGO_URL;
      const connOpts = {
            useUnifiedTopology: true,
            useNewUrlParser : true
      }

      return connect(DB_URL, connOpts)
                  .then( () => {
                        chai.expect(100).to.be.equal(100);
                  })
                  .catch( err => {
                        chai.assert.fail(err)
                  })
                  
                  
}

describe("Mongo DB Connection", () => {
      it("Should connect to DB", dbConnIT_CB)
})
