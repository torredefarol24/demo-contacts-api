import { Request, Response } from 'express';
import { currentTS } from '../../constants';
import { People } from '../../models/People';
import { IPeople } from '../../interface';

export const createPeople = async (request : Request, response : Response) => {
      var context: any = {
		success: false,
		message: "People Created Successfully",
		data: {}
      }

      const { name, age, height } = request.body;
      const missingKeys = !name || !age || !height
      const invalidParams = isNaN(age) || isNaN(height) || (name.trim().length) == 0

      if (missingKeys) {
            var errorMsg = `Keys Missing in Request`;
            context.message = errorMsg
		console.error(`\n----${currentTS}---- People::createPeople Error: ${errorMsg}`)
		return response.status(400).json(context)
      }

      if (invalidParams) {
            var errorMsg = `Invalid Data`;
            context.message = errorMsg
		console.error(`\n----${currentTS}---- People::createPeople Error: ${errorMsg}`)
		return response.status(422).json(context) 
      }
      
      try {
            const people : IPeople = {
                  name, age, height
            }

            await People.create(people);

            context.success = true;
            context.data = people;
            return response.status(201).json(context);

      } catch (error) {
            context.message = error.message;
            console.error(`\n----${currentTS}---- People::createPeople Error: ${error}`);
            return response.status(500).json(context)
      }
}