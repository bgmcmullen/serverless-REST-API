# serverless-REST-API

**Author**: Brendan McMullen
**Version**: 1.0.0


## Overview
This REST API system allows users to get, create, update, and delete objects representing people including their name and phone number.

## Getting Started
The server can be accessed at https://5g0afajlj7.execute-api.us-east-1.amazonaws.com/dev/people/ 
include an id paramater for update, delete and optionally for get
objects should be posted in the following format:
{
  "id": "1"
  "name":"person's name",
  "phone":"000-000-0000"
}

## Architecture
AWS Lambda
AWS API Gateway
AWS DynamoDB
AWS Dynamoose

## Credit and Collaborations
chatgpt was used as a resource

## UML Diagram
[Diagram](UML_Diagram.pdf)