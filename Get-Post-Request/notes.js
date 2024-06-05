/*
HTTP Request / Response
Communication between clients and servers is done by
 requests and responses: A client (a browser) sends an HTTP 
 request to the web. A web server receives the request. 
 The server runs an application to process the request.
  The server returns an HTTP response (output) to the browser.
  
  Url are limited it's are 2048 characters.

  types of http request:
  1.GET
  2.POST
  3.PUT
  4.PATCH
  5.DELETE


  GET:
-> used to retrieve information.
-> Data is sent via query string 
-> Information is plainly visible in the URL
-> Limited amount of data can be sent



POST:
-> Used to post data to the server
-> Used to write/create/update
-> Data is sent via request body, not a query string!
-> Can send any sort of data (JSON)

  
what is app.use(express.urlencoded({exptended:true}))?

The line app.use(express.urlencoded({ extended: true })) is used in an Express.js application to parse incoming requests with URL-encoded payloads. Here’s a breakdown of what it does and the meaning of the extended option:

What it Does
app.use(): This method mounts middleware functions to the Express application. Middleware functions are executed sequentially when a request is received.
express.urlencoded(): This middleware function parses incoming requests with URL-encoded payloads, which are typically sent by HTML forms using the application/x-www-form-urlencoded content type.
The extended Option
extended: true: This option allows the parsing of nested objects, using the qs library (a more powerful query string parsing library). With extended: true, the URL-encoded data can represent richer objects and arrays.
extended: false: This option uses the querystring library to parse URL-encoded data, which does not support nested objects.
  
  
  
  */