import express from "express";
import { bootstrapApp } from '../bootstrap/setup';

export class DemoContactsAPI {

      private app: express.Application

      constructor(){
            this.app = express()
            this.initApp(this.app);
      }

      private initApp(app:any) {
            bootstrapApp(app);
      }
}

export class DemoContactsAPITest {

      public app: express.Application

      constructor(){
            this.app = express()
            this.initApp(this.app);
      }

      private initApp(app:any) {
            bootstrapApp(app);
      }
}