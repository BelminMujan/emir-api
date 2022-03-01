Close repository: git clone <ssh link>
create file .env - see how .env.example looks

Install node dependencies: npm i

install nodemon globally: npm i -g nodemon
run server with: nodemon server.js

server will run on localhost:5000

Routes:
Get workflows get:localhost:5000/api/workflow
Get one forkflow get:localhost:5000/api/workflow/:workflowId
Add workflow post:localhost:5000/api/workflow
Delete workflow delete:localost:5000/api/workflow/:workflowId
Update workflow patch:localhost:5000/api/workflow/:workflowId

Stages are not done yet, They have crud methodes, but are not yet linked with workflows
Get Stages get:localhost:5000/api/stage
Get one Stage get:localhost:5000/api/stage/:stageId
Add Stage post:localhost:5000/api/stage
Delete Stage delete:localost:5000/api/stage/:stageId
Update Stage patch:localhost:5000/api/stage/:stageId

Model:
Workflow
{
title:"",
description:"",
smallText:"",
type:""
}
stage
{
workflow:"", //this one dont work yet
image:"", //put image url
type:"",
status:""
}
