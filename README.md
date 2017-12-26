# README

```
$ rails s
# subject
$ curl -X GET http://localhost:3000/subjects/index
# sign_up
$ curl -H "Content-Type: application/json" -X POST http://localhost:3000/v1/auth/  -d  '{"name": "hoge", "email": "hoge@gmail.com", "password": "hogehoge"}'
# sign_in
$ curl -H "Content-Type: application/json" -X POST http://localhost:3000/v1/auth/sign_in  -d  '{"email": "hoge@gmail.com", "password": "hogehoge"}'
```
