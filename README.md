# basic-pinterest-client
[![Build Status](https://travis-ci.org/gjlaubenstein/basic-pinterest-client.svg?branch=master)](https://travis-ci.org/gjlaubenstein/basic-pinterest-client)
[![Coverage Status](https://coveralls.io/repos/gjlaubenstein/basic-pinterest-client/badge.svg?branch=master&service=github)](https://coveralls.io/github/gjlaubenstein/basic-pinterest-client?branch=master)

## Install
`npm install --save basic-instagram-client`

## Usage
```
var Pinterest = require('basic-pinterest-client');

pinterest = new Pinterest({});

pinterest.pinsByBoard(userId).then((res) => {
  console.log(res);
});

```
