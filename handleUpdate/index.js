const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
  "id": String,
  "name": String,
  "phone": String
});

const peopleModel = dynamoose.model('people', schema);

exports.handler = async (event) => {
  
  let response = null;
  
  const updatedPerson = JSON.parse(event.body)
  
  try {
    if(event.pathParameters)
    {
      await peopleModel.update(event.pathParameters, updatedPerson);
      
    } else {
    response = {
    statusCode: 400,
    body: "id required"
  };
    }

    response = {
    statusCode: 200,
    body: "update successful"
  };
    
  } catch (e){
    response = {
    statusCode: 500,
    body: JSON.stringify({message: 'Error retrieving people: ' + e.message}),
    }
  }



  return response;
}