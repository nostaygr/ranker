# README

```
$ rails s
# subject
$ curl -X GET http://localhost:3000/subjects/index


# sign_up
$ curl -H "Content-Type: application/json" -X POST http://localhost:3000/v1/auth/  -d  '{"name": "hoge", "email": "hoge@gmail.com", "password": "hogehoge"}'

## success
{"status":"success","data":{"id":6,"email":"hoge@gmail.com","provider":"email","uid":"hoge@gmail.com","name":"hoge","created_at":"2017-12-26T23:15:59.972Z","updated_at":"2017-12-26T23:16:00.141Z"}}

## error
{"status":"error","data":{"id":null,"provider":"email","uid":"","name""":"hoge""","email""":"hoge@gmail.com""","created_at""":null,"updated_at":null},"errors":{"email":["has already been taken","has already been taken"],"full_messages":["Email has already been taken","Email has already been taken"]}}'


# sign_in
$ curl -H "Content-Type: application/json" -X POST http://localhost:3000/v1/auth/sign_in  -d  '{"email": "hoge@gmail.com", "password": "hogehoge"}'

## success
{"data":{"id":6,"email":"hoge@gmail.com","provider":"email","uid":"hoge@gmail.com","name":"hoge"}}

## error
{"errors":["Invalid login credentials. Please try again."]}
```
