import { Request, Response } from 'express';
import { currentTS } from '../../constants';
import { Contacts } from '../../models/Contacts';
import { People } from '../../models/People';
import { IContact } from '../../interface';

export const createContact = async (request : Request, response : Response) => {
      var context: any = {
		success: false,
		message: "Contact Created Successfully",
		data: {}
      }
      const { email, number } = request.body;
      const { id } = request.params;
      
      const missingKeys = !email || !number ||!id
      if (missingKeys) {
            var errorMsg = `Keys Missing in Request`;
            context.message = errorMsg
		console.error(`\n----${currentTS}---- Contact::createContact Error: ${errorMsg}`)
		return response.status(400).json(context)
      }
      
      const invalidParams = (email.trim().length) == 0 || (number.trim().length) == 0
      if (invalidParams) {
            var errorMsg = `Invalid Data`;
            context.message = errorMsg
		console.error(`\n----${currentTS}---- Contact::createContact Error: ${errorMsg}`)
		return response.status(422).json(context) 
      }

      try {
            const contact : IContact = {
                  email, number
            }

            const foundPeople : any = await People.findById({ _id : id});
            if (!foundPeople){
                  var errorMsg = `People Not Found`;
                  context.message = errorMsg
		      console.error(`\n----${currentTS}---- Contact::createContact Error: ${errorMsg}`)
		      return response.status(404).json(context)
            }
            
            contact.people_id = foundPeople._id;
            await Contacts.create(contact);

            context.success = true;
            context.data = contact;
            return response.status(201).json(context);
      } catch (error) {
            context.message = error.message;
            console.error(`\n----${currentTS}---- Contact::createContact Error: ${error}`);
            return response.status(500).json(context)
      }
}