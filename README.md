Url: http://localhost:8082/api/v1

**Login API**
 
 - APP Login:  url/auth/app/login
 - Site login: url/auth/login
 - Method: POST
 - Sample body of type json:
      ```
        {
          "email": "staff1@gmail.com",
          "password": "Abcd123"
        }
      ```

**Add User by Admin**

  - Url: url/admin/add-user
  - Method: POST
  - Auth Type : Bearer Token
  - Sample body of type json:
    ```
    {
      "email": "cashCollector1@gmail.com",
      "phoneNumber": "9876543210",
      "userName": "cashCollector1",
      "password": "Abcd123",
      "userRole": "cashCollector"
    }
    ```
