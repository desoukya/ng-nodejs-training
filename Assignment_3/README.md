## Assignment 3


### PART (A)
#### Implement the POST endpoint for adding a new user

Note: You wil have to use the body parser package v1.18.2

The client is expected to POST a new object adhering to the predefined structure:
```
{
  "name": String,
  "password": String,
  "profession": String
}
```

Note, the `id` field should be blank. Once the client posts the object, you are expected to determine the highest id value from the users array in order to increment it by one and assign it to the newly posted object. The complete object should be pushed to the array and persisted within the in-memory users object.

The following line of code shows how to use the request body to retreive a field from the posted object:
`const name = req.body.name;`


### PART (B)
Create a mongo collection called `users` and populate it with the initial array of users (from the jSON) and then remove the users.json file completely. Modify the /GET endpoint to retrieve all users from MongoDB. Likewise, modify the /POST endpoint to insert the new user in the users collection.