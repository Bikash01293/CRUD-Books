===============================================================================================
Steps to run the project

1. npm i

2. npm start

===============================================================================================

Api's for curd operation

1. Create a Book:

Request : 

        url: http://localhost:3000/books
        Method: POST
        Body: Select json

        {
            "title": "Title of the Book",
            "author": "Author of the Book",
            "summary": "Brief summary upon the book"
        }

Response: 

        {
            "title": "Title of the Book",
            "author": "Author of the Book",
            "summary": "Brief summary upon the book",
            "_id": "654cdf2bd6b2c4529e5ac508",
            "__v": 0
        }

2. Read all the books:

Request: 

    url: http://localhost:3000/books
    Method: GET

Response: 

    [
        {
            "_id": "654cde10d6b2c4529e5ac500",
            "title": "First Book",
            "author": "T.Henry",
            "summary": "This is a first book for testing",
            "__v": 0
        },
        {
            "_id": "654cde81d6b2c4529e5ac502",
            "title": "Second Book",
            "author": "Marky Parker",
            "summary": "This is a second book for testing",
            "__v": 0
        }
    ]

3. Read a single book by its ID:

Request:

    url: http://localhost:3000/books/654cde10d6b2c4529e5ac500
    Method: GET

Note: Please change the id before you proceed.

Response:

    {
        "_id": "654cde10d6b2c4529e5ac500",
        "title": "First Book",
        "author": "T.Henry",
        "summary": "This is a first book for testing",
        "__v": 0
    }

4. Update a book by its ID:

Request:

    url: http://localhost:3000/books/654cde81d6b2c4529e5ac502
    Method: PATCH

Note: Please change the id before you proceed.

Response:

    {
        "_id": "654cde81d6b2c4529e5ac502",
        "title": "Second Book",
        "author": "Marky Parker",
        "summary": "This is a second book for testing",
        "__v": 0
    }

5. Delete a book by its ID:

Request:

    url: http://localhost:3000/books/654cde81d6b2c4529e5ac502
    Method: DELETE

Response: 

    {
        "_id": "654cde81d6b2c4529e5ac502",
        "title": "Second Book",
        "author": "Marky Parker",
        "summary": "This is a second book for testing",
        "__v": 0
    }

Note: Please change the id before you proceed.

===============================================================================================

Also sharing the postman collection link below for reference: 

https://documenter.getpostman.com/view/29208251/2s9YXiZgp8

======================================    Thank You    ========================================