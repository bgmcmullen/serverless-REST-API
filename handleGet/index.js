const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
  "id": String,
  "name": String,
  "phone": String
});

const peopleModel = dynamoose.model('people', schema);

exports.handler = async (event) => {
  
  let response = null;
  
  let people = null;
  
  try {
    if(event.pathParameters)
    {
      people = await peopleModel.get(event.pathParameters);
      
    } else {
      people = await peopleModel.scan().exec();
    }

    response = {
    statusCode: 200,
    body: JSON.stringify(people)
  };
    
  } catch (e){
    response = {
    statusCode: 500,
    body: JSON.stringify({message: 'Error retrieving people: ' + e.message}),
    }
  }



  return response;
}