# Recruitment Examination (Frontend)
* Develop a simple website by using following structure and requirement

# API Structure
    www                                 # Website folder
    └─── index.html                     # Website entry point
    └─── index.js                       # Website entry point sript
    └─── css                            # CSS configuration related templates and custom styles
    └─── js                             # Javascript custom configuration scripts

- - -

# Requirements
## Overall 
1. Website must developed by using above structure
2. Website must developed by using HTML, JavaScript, CSS
3. Website must developed by using existing template styles and scripts
4. Other plugins, Allowed!
5. Response of all API must be return to JSON Object type

## Webiste

### Endpoint
*for full stack developer, using `http://localhost:3000`*
   ```
   http://128.199.80.110:3000
   ```
### 1. Table for show items
   get data from API and show (name, price, quantity) data on table
   #### Method: `GET`
   #### Route: `/get_item`
   #### Request parameters 
   - None
   #### Response
   1. `status` string of status code
   2. `message` string of message
   3. `data` List of Object response data from database
   #### Example Response
   ```
   {status: 200, message: 'OK', data: [{_id: '01', name: 'Book', price: 100, quantity: 10, description: ''}]}
   ```

### 2. Modal to show spacific data when clicked on the table
   get specific data by using _id, and show all data in the modal
   #### Method: `GET`
   #### Route: `/get_item_by_id`
   #### Request parameters  
   1. `_id` string of item _id
   #### Response
   2. `status` string of status code
   3. `message` string of message
   4. `data` Object of response data from database
   #### Example Response
   ```
   {status: 200, message: 'OK', data: {_id:'01', name: 'Book', price: 100, quantity: 10, description: ''}}
   ```

### 3. Insert item data
   open create item modal to get (name, price, quantity, descpription) data and send to insert data API
   #### Method: `POST`
   #### Route: `/insert_item`
   #### Request parameters  
   1. `name` string of item name
   2. `price` number value of item price
   3. `quantity` number value of item quantity
   4. `description` string of item description
   #### Response
   5. `status` string of status code
   6. `message` string of message
   #### Example Response
   ```
   {status: 200, message: 'OK'}
   ```

### 4. Update item data by id
   open update item modal to get (name, price, quantity, descpription) data and send to update data API
   #### Method: `POST`
   #### Route: `/update_item`
   #### Request parameters  
   1. `id` string of item id
   2. `name` string of item name
   3. `price` number value of item price
   4. `quantity` number value of item quantity
   5. `description` string of item description
   #### Response
   6. `status` string of status code
   7. `message` string of message
   #### Example Response
   ```
   {status: 200, message: 'OK'}
   ```

- - -
