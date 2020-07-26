import { Schema } from 'mongoose';
import { collectionNames } from '../constants';

const peopleSchemaOpts = {
      name : {
            type : String,
            required : true
      },
      age : {
            type : Number,
            required : true
      },
      height : {
            type : Number,
            required : true
      }
}

const collectionOpts = {
	collection: collectionNames.people,
	timestamps: {
		createdAt: "created_at",
		updatedAt: "updated_at"
      }
}

export const PeopleSchema = new Schema(peopleSchemaOpts, collectionOpts)
