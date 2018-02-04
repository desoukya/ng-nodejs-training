## Assignment 3


### PART (A)
#### Implement a POST endpoint for adding a new user

Note: You wil have to use the body parser package by requiring it as such:
```
const bodyParser  = require('body-parser');
app.use(bodyParser.json());
```

The client is expected to POST a new object adhering to the predefined structure:
```
{
  "firstName": String,
  "lastName": String,
  "gender": String,
  "email": String,
  "phoneNumber": String
}
```

The following line of code shows how to use the request body to retreive a field from the posted object:
`const name = req.body.name;`


### PART (B)
Create a mongo collection called `users` and populate it with the initial array of users (from the jSON) and then remove the users.json file completely. Modify the /GET endpoint to retrieve all users from MongoDB. Likewise, modify the /POST endpoint to insert the new user in the users collection.
