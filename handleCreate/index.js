const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
  "id": String,
  "name": String,
  "phone": String
});

const peopleModel = dynamoose.model('people', schema);

exports.handler = async (event) => {

  let response = null;
  
  const newPerson = JSON.parse(event.body)
  
  try {

    await peopleModel.create(newPerson);
    response = {
    statusCode: 200,
    body: "New person created!"
  };
    
  } catch (e){
    response = {
    statusCode: 500,
    body: JSON.stringify({message: 'Error retrieving people: ' + e.message}),
    }
  }



  return response;
}