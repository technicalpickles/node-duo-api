# Duosecurity Node Client [![Build Status](https://travis-ci.org/BYU-OIT/node-duo-api.svg?branch=master)](https://travis-ci.org/BYU-OIT/node-duo-api)

[![NPM](https://nodei.co/npm/duo-api.png?compact=true)](https://nodei.co/npm/duo-api/)

- [API Reference and examples](API.md)
- [Quick Start](#quick-start)
- [Development](#development)
  - [Testing](#testing)

---

# Quick Start

First:

```bash
npm install duo-api
```

Then:

```js
var Client = require('duo-api');
```

# Development

## Testing

To run the tests on your local machine, create three environment variables:
 
- `DUO_API_HOST`: Duo api host. 
- `DUO_API_IKEY`: Duo api integration key.
- `DUO_API_SKEY`: Duo api secret key.

Optionally, you can also set the following additional environment variables:

- `DUO_API_USER`: Valid duo username in your account. Setting this enables more rigorous testing of user lookup functionality.

After setting the environment variables, run `gulp test`.

```bash
cd node-duo/
export DUO_API_HOST=api-XXXXXXXX.duosecurity.com
export DUO_API_IKEY=XXXXXXXXXXXXXXXXXXXX
export DUO_API_SKEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
export DUO_API_USER=XXXXX # If you want to enable rigorous user lookup testing.
gulp test
```

You can have gulp run the tests on any code change by running `gulp watch` in the root of the repository.

