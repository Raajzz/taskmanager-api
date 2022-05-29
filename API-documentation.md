# API DOCUMENTATION 

## ROUTES

### GET

GET /api/v1/ => GET all the tasks
GET /api/v1/:id => GET individual task

### POST

POST /api/v1/ => POST task

### PATCH

PATCH /api/v1/:id => UPDATE task
PATCH /api/v1/:id/check => 
  UPDATE task by inverting the check field (Checked Vs. Unchecked segregation will be done in the frontend) 

### DELETE

DELETE /api/v1/:id => DELETE task
