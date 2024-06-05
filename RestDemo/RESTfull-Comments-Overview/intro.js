// let's actually implement our own RESTful server architecture.
// and our resources is comments:
// let's go with comments:
// And our comments will have maybe a username and a comment text.

/* username
text
// example:
us3ite -hello!

//So the thing that we are trying to make CRUD happen for , we are trying to expose CRUD functionality  for is a comment.

// So in general , we have many ways we could structure this, right to show you all comments.

GET /allcomments
GET /all
GET/showmeallcommentsnow

POST/newcomment
POST/makecomment */

// Another method to implement REST API with their path

// if we want to get the all comments the use the below code.
GET/comments -list all comments
POST/comments -Create a new comment 

// then if we want to get one comment in particular, I can do a GET request for /comments and then some id, get one comments using id.

GET /comments/:id -Get one particular comment with their id or with the help of their id .

// and for updating the information there are two HTTP verbs that have to do with updating information.
PATCH /comments/:id - Update one comment
DELETE /comments/:id -remove or Destroy one comment

// So this is our basis CRUD functionality blueprint

// An example using comments as a resource 

NAME      PATH                  VERB            PURPOSE

Index     /comments             GET             Display all comments
New       /comments/new         GET             Form to create new comment
Create    /comments             POST            Creates new comment on server
Show      /comments/:id         GET             Details for one specific comment
Edit      /comments/:id         GET             Form to edit specific comment
Update    /comments/:id/edit    PATCH           Update specific comment on server
Destroy   /comments/:id         DELETE          Deletes specific items on server
