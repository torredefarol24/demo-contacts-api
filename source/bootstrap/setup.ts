import * as bodyParser from 'body-parser';
import { ENV_SETUP } from './env_vars';

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


export const bootstrapApp = (app:any) => {
      bodyParserInit(app);
      startHttpServer(app);
}