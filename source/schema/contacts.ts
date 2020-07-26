import { SchemaTypes, Schema } from 'mongoose';
import { collectionNames, ModelNames} from '../constants';

const contactsSchemaOpts = {
      email : {
            type : String,
            required : true
      },
      number : {
            type : String,
            required : true
      },
      people_id : {
            type: [SchemaTypes.ObjectId],
		ref: ModelNames.People,
		required: true
      }
}

const collectionOpts = {
	collection: collectionNames.contacts,
	timestamps: {
		createdAt: "created_at",
		updatedAt: "updated_at"
      }
}

export const ContactsSchema = new Schema(contactsSchemaOpts, collectionOpts)