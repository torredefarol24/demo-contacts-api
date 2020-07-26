import { model, Document } from 'mongoose';
import { ContactsSchema } from '../schema/contacts';
import { ModelNames } from '../constants/';

interface IFC_Contacts extends Document { }

export const Contacts = model<IFC_Contacts>(ModelNames.Contacts, ContactsSchema);