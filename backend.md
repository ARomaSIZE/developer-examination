# Recruitment Examination (Backend)
* Develop a simple API by using following structure and requirement

# API Structure
    api                                 # API folder
    └─── app.js                         # API entry point
         └─── configs                   # Configuration related stuff
         └─── controllers               # Controllers for all the endpoints
         └─── models                    # Object Models for connecting to database
         └─── routes                    # Routes for all the endpoints

- - -

# Requirements
## Overall 
1. API must developed by using above API structure
2. API must developed by using NodeJs
3. Required modules
   1. express
   2. mongodb
4. API must start with port `3000`
5. All of response must be JSON Object type

## API

### 1. Get items
   API to get list of data items (collection `item_data`)
   #### Method: `GET`
   #### Route: `/get_item`
   #### Parameters Received 
   - None
   #### Response
   2. `status` string of status code
   3. `message` string of message
   4. `data` List of Object response data from database

### 2. Get item data by id
   API to get specific data by using _id (collection `item_data`)
   #### Method: `GET`
   #### Route: `/get_item_by_id`
   #### Parameters Received 
   1. `_id` string of item _id
   #### Response
   1. `status` string of status code
   2. `message` string of message
   3. `data` Object of response data from database

### 3. Insert item data
   API to insert data to database (collection `item_data`)
   #### Method: `POST`
   #### Route: `/insert_item`
   #### Parameters Received 
   1. `name` string of item name
   2. `price` number value of item price
   3. `quantity` number value of item quantity
   4. `description` string of item description
   #### Response
   5. `status` string of status code
   6. `message` string of message

### 4. Update item data by id
   API to update existing data to database (collection `item_data`)
   #### Method: `POST`
   #### Route: `/update_item`
   #### Parameters Received 
   1. `id` string of item id
   2. `name` string of item name
   3. `price` number value of item price
   4. `quantity` number value of item quantity
   5. `description` string of item description
   #### Response
   6. `status` string of status code
   7. `message` string of message

- - -

# Database

## Connection URL
    mongodb+srv://<username>:<password>@recruitment.mos8yva.mongodb.net/?retryWrites=true&w=majority

## Credentials
    username: api_recruit
    password: As4TapTe768DOS68
    database name: developer_exam