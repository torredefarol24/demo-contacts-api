import { Request, Response } from 'express';
import { currentTS, collectionNames } from '../../constants';
import { Contacts } from '../../models/Contacts';
import { People } from '../../models/People';

export const searchContact = async (request : Request, response : Response) => {
      var context: any = {
		success: false,
		message: "Contact Searched Successfully",
		data: {}
      }

      const { q } : any = request.query;
      if (!q) {
            var errorMsg = `Keys Missing in Request`;
            context.message = errorMsg
		console.error(`\n----${currentTS}---- Contact::searchContact Error: ${errorMsg}`)
		return response.status(400).json(context)
      }

      const qs = decodeURIComponent(q)

      try {
            var peopleSearchOpts = {
                  name : qs
            }

            var contactSearchOpts = {
                  $or : [
                        {
                              'number' : qs
                        },
                        {
                              'email' : qs
                        }
                  ]
            }
            

            const aggregateOpts = [
                  {
				$lookup: {
					from: collectionNames.people,
					localField: 'people_id',
					foreignField: '_id',
					as: 'people'
				}
			}
            ]
            
            const foundPeople = await People.find(peopleSearchOpts);
            const foundContacts = await Contacts.aggregate(aggregateOpts).match(contactSearchOpts);
            const peopleFromContacts = foundContacts.map( (item : any) => {
                  return item.people[0]
            })
            const results = [...foundPeople, ...peopleFromContacts]
            
            context.success = true;
            context.data = results
            return response.status(200).json(context);
      } catch (error) {
            context.message = error.message;
            console.error(`\n----${currentTS}---- Contact::searchContact Error: ${error}`);
            return response.status(500).json(context)
      }
}