import { Request, Response } from 'express';
import { currentTS, collectionNames } from '../../constants';
import { People } from '../../models/People';
import { Contacts } from '../../models/Contacts';

export const getAllPeople = async (request : Request, response : Response) => {
      var context: any = {
		success: false,
		message: "All People Fetched Successfully",
		data: {}
      }
      
      try {
            const aggregateOpts = [
                  {
				$lookup: {
					from: collectionNames.contacts,
					localField: '_id',
					foreignField: 'people_id',
					as: 'contact'
				}
			}
            ]
            const people = await People.aggregate(aggregateOpts);
            context.success = true;
            context.data = people;
            return response.status(200).json(context);
      } catch (error) {
            context.message = error.message;
            console.error(`\n----${currentTS}---- People::getAllPeople Error: ${error}`);
            return response.status(500).json(context)
      }
}