## Assignment 2


### PART (A)
#### Create a folder with your last name and a user.json file. Inside the file, define a JSON structure with the following structure:

 - firstName
 - lastName
 - gender
 - email
 - phoneNumber

You can use random values or your own information.

Raise a PR: https://github.com/desoukya/ng-nodejs-training/pulls

### PART (B)
A cloud database instance of MongoDB has been created for you. Your task is to establish a connection with this database using your shell/terminal. Once you have gained access, your task is to insert the document created from PART (A) into the `users` collection. 

The command used to access the database from your shell is:
`mongo ds123728.mlab.com:23728/ng -u ng -p ng`

To validate your insertion is working properly, you can:
 1) exec `db.users.find()` 
 2) visit http://34.203.34.98


Helpful Tip: Eventually, you will need to create a Node.js app that talks to this database. To do so, you will need:
 1) mongodb npm package
 2) connection string: mongodb://ng:ng@ds123728.mlab.com:23728/ng
