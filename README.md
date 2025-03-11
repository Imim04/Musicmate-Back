# Get start with POSWeb Backend
As you've clone this project, don't forget to run this command in this project
## npm i
![npm_i](https://github.com/user-attachments/assets/711ca280-4678-46b0-a3e3-7d56bacfb06e)

## Make sure your database is running !!

# Now you should ready to run this project now!

## First of all, you have to make sure to check this config file
You should to config it to match to your Database

![CheckOnConfig](https://github.com/user-attachments/assets/b6d435e6-757e-40c0-a94c-d99df3a7de40)

# Let's see each part of this code, what it's doing ?
First, server.js, it's endpoint of this project.
And it's the main part to start the server by this command.
## node server.js or npm start

![Start Server](https://github.com/user-attachments/assets/05460eec-431c-429f-8d8f-0b5a3b2ae17a)

## This project has 4 main part to run, in app folder
### -config
### -controllers
### -models
### -routes

![Backend File](https://github.com/user-attachments/assets/869ba12f-a925-43e5-b569-c5e60c8524f7)

# config
This file contains every config you need to run this project.
For now, it contains Database configuration

![database configuration](https://github.com/user-attachments/assets/6b8ab26e-d2e5-4303-8f56-bcb3fd14572d)

# controllers
This file contains every action of APIs to do CRUD.
Create
Read
Update
Delete

## This function have for Read

![FindAll](https://github.com/user-attachments/assets/27e46683-e0fb-4be5-9f51-17798183c6b3)

## This function have for Create

![Create](https://github.com/user-attachments/assets/71e72174-c6b6-4c46-9791-1e32bd069261)

## This function have for Read, but specific with id

![FindByID](https://github.com/user-attachments/assets/86390f32-9919-4d90-8192-83253f156990)

## This funtion have for Update by id

![Update_Backend](https://github.com/user-attachments/assets/0e0f2c1e-d93b-4ea7-a50b-deb2a886d231)

## This function have for Delete by id

![DeleteByID](https://github.com/user-attachments/assets/e65f8119-c1b7-45cf-a91f-5a72eead8c40)

# models
This file contains model of the table we'll create and plug to database

## index.js
it contains sequelize and use config to plug with database.
And then export to use in other file

![indexOfModel](https://github.com/user-attachments/assets/6255078a-bfbd-400e-a6af-ed74b77bf4ec)

## product.model
it contains model to create table in database and match to table.

![ModelOfTable](https://github.com/user-attachments/assets/e432cf2c-461a-480a-b1e6-159aac219348)

# routes
This file contains routes of APIs to lead every requests to controllers.

## user.routes
it contains every routes to go to controllers.

![routes](https://github.com/user-attachments/assets/11c6469b-6308-47c9-9c9d-a83b55b452b7)

# server.js
This file is an endpoint for every requests to go to other routes.

It has allowed cors for Frontend project to pass through.

Use sequelize from model to connect to database.

And the last, it will listen to any request that come in on port 5000 which contained by .env config file

![server js](https://github.com/user-attachments/assets/e72bd988-2958-4886-b7ad-6afa0496fb6a)















