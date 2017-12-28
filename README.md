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


# sign_in (dump header info with -D option)

$curl -D - -H "Content-Type: application/json" -X POST http://localhost:3000/v1/auth/sign_in  -d  '{"email": "hoge@gmail.com", "password": "hogehoge"}'

## success
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
access-token: Dn-ja2dvqD94sdhn52tEMw
token-type: Bearer
client: drkvJv5bhTwdkvDjqH2CHg
expiry: 1515626800
uid: hoge@gmail.com
ETag: W/"5c41e20abe3ab2d295529498917bca4c"
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 39bc8ec7-fc1f-40de-9a60-400a714ec672
X-Runtime: 0.345807
Vary: Origin
Transfer-Encoding: chunked

{"data":{"id":6,"email":"hoge@gmail.com","provider":"email","uid":"hoge@gmail.com","name":"hoge"}}

## error
{"errors":["Invalid login credentials. Please try again."]}


# get subjects of an user

## success
$curl -X GET http://localhost:3000/subjects/index  -H'access-token: Dn-ja2dvqD94sdhn52tEMw' -H'client: drkvJv5bhTwdkvDjqH2CHg' -H'uid: hoge@gmail.com'
[{"id":1,"user_id":1,"title":"好きな映画ベスト10","created_at":"2017-12-28T00:08:39.257Z","updated_at":"2017-12-28T00:08:39.257Z"},{"id":2,"user_id":1,"title":"嫌いな野菜ベスト5","created_at":"2017-12-28T00:08:39.260Z","updated_at":"2017-12-28T00:08:39.260Z"}]

## error
$curl -X GET http://localhost:3000/subjects/index
{"errors":["You need to sign in or sign up before continuing."]}
```
