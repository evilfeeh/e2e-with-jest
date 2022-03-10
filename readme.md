# e2e with JEST

This project is to understand how to introduce JEST on e2e

Based on: [ERICK WENDEL LIVE](https://www.youtube.com/watch?v=hQB139HP3GE)


## Show person
- URL 
    /
- METHOD
    `GET`
- Success response
    - Content: 
        If no data is provided the application will return an empty array
        if app has data an array of object will be returned

## Insert person
- URL 
    /
- METHOD
    `POST`
- REQUIRED
    `{name: "John Doe, age: 20}`
- Success response
    - Content: `{"ok": 1}`

## delete all data
- URL 
    /
- METHOD
    `DELETE`
- Success response
    - Content: `{"ok": 1}`
