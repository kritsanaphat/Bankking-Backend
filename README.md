<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).



## About Code

## Paymet Transaction 
- create Transaction. (payment transaction)
- get All Transaction. (transaction backend)
- get Transaction By Months. (transaction backend)

## UserNotifican Transaction
- check if the notification has been read or not. (Home / Homeshop)

## Payment Gateway Transaction
- check if the payment gateway has been Finish or not. 

## Otp Transaction
- create OTP Transaction (account backend)

## Activity-Transaction
## create activity transaction
- path [activity-transaction](http://localhost:3001/activity-transaction)
- method POST
- body
  ```
  {
    "accountID":"9842a4e5-f6df-4bf7-9289-e341abcb80a9",
    "IPAddress":"0.0.0.0"
  }
  ```
- response
  ```
  {
    "accountID": "9842a4e5-f6df-4bf7-9289-e341abcb80a9",
    "messege": "OK"
  }
  ```

## create otp transaction
- path [otp-transaction](http://localhost:3001/otp-transaction)
- method POST
- body
  ```
  {
    "refNumber":"b826b8e5-d582-46de-b2dd-54cc986efb65",
    "type":"login",
    "timeStart":"2022-05-23T05:17:15.929Z",
    "IPAddress":"0.9.0.0"
  }
  ```
- response
  ```
  {
    "transactionID": "566bc419-19f4-4ae2-8233-be534b921573",
    "message": "OK"
  }
  ```
## update otp transaction
- path [otp-transaction/(transactionID)](http://localhost:3001/otp-transaction//b826b8e5-d582-46de-b2dd-54cc986efb65)
- method PATCH
- body (none)
- response
  ```
  {
    "transactionID": "0cad0153-3fe6-4c9c-be42-d4fb9e3d37b8",
    "isFinishd": true,
    "message": "OK"
  }
  ```
##  create payment transaction
- path [payment-transaction](http://localhost:3001/payment-transaction)
- method POST
- body
  ```
  {
  "IPAddress": "0.0.0.0",
  "userAccountNumber": "78484584",
  "otherAccountNumber": "0123456",
  "nameOther": "est",
  "accountID":"83037447-1fe1-47ad-9b6e-e26a5c1fcad9",
  "bankNameOther": "4QU",
  "amount" :20000,
  "balance":5854,
  "fee" :20,
  "date": "2022-11-17 16:55:35.83",
  "type": "receive"
  }
  ```
- response
  ```
  {
    "transactionID": "de7c7e6b-4317-41ea-b672-633dec091241",
    "message": "OK"
  }
  ```

## create statement
- path [payment-transaction/statement](http://localhost:3001/payment-transaction/statement)
- method POST
- body (Date : Max 6 Month)
  ```
  {
    "userAccountID": "string",
    "userAccountNumber": "78484584",
    "destEmail": "string",
    "name":"accountname",
    "Date": "2022-11,2022-08"
  }
  ```
- response
  ```
  {
    "statement": [
        {
            "datetime": "2022-11-19T11:17:08.870Z",
            "description": "receive",
            "paymentAmount": 20000,
            "balance": 20000
        },
        {
            "datetime": "2022-11-21T14:37:05.081Z",
            "description": "receive",
            "paymentAmount": 20000,
            "balance": 20000
        }
    ],
    "desEmail": "string",
    "name": "accountname",
    "accountNumber": "78484584"
  }
  ```

## get transaction by month
- path [payment-transaction](http://localhost:3001/payment-transaction)
- method POST
- body (Date : Max 1 Month)


## get summary by date
- path [payment-transaction/summary-date](http://localhost:3001/payment-transaction/summary-date)
- method POST
- body 
  ```
  {
    "userAccountNumber":"0093714533",
    "date":"2022-11-1,2022-11-31"
  }
  ```
- response
  ```
  [
    {
        "date": "21/11/2022",
        "income": 205088080,
        "outcome": 0
    },
    {
        "date": "19/11/2022",
        "income": 200000,
        "outcome": 150000
    }
  ]
  ```

## get summary by month
- path [payment-transaction/summary-month](http://localhost:3001/payment-transaction/summary-month)
- method POST
- body 
  ```
  {
    "userAccountNumber":"0093714533",
    "date":"2022-11-1,2022-11-31"
  }
  ```
- response
  ```
  [
    {
        "month": "11/2022",
        "income": 205288080,
        "outcome": 200000
    }
  ]
  ```