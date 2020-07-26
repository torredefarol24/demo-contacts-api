import * as bodyParser from 'body-parser';
import { ENV_SETUP } from './env_vars';
import { DBConnection } from './db';
import { Routes} from '../routes/';

const bodyParserInit = (app:any) => {
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({ extended : true}));
}

const startHttpServer = (app:any) => {
      ENV_SETUP()
      const apiPORT = process.env.PORT;
      const listenCB = () => {
            console.log(`====================================`)
		console.log(`DemoContactsAPI started on: \n${new Date()}`)
		console.log(`====================================`)
      }
      app.listen(apiPORT, listenCB);
}

const routeSetup = (app:any) => {
      app.use("/api/v1/people", Routes.people);
      app.use("/api/v1/contacts", Routes.contacts);
}


export const bootstrapApp = (app:any) => {
      const mongoConn = new DBConnection().connectToDB();
      bodyParserInit(app);
      routeSetup(app);
      startHttpServer(app);
}