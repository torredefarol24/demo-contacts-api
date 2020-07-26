import { model, Document } from 'mongoose';
import { PeopleSchema } from '../schema/people';
import { ModelNames } from '../constants/';

interface IFC_People extends Document { }

export const People = model<IFC_People>(ModelNames.People, PeopleSchema);