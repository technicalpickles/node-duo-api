# Duosecurity Node Client [![Build Status](https://travis-ci.org/BYU-OIT/node-duo-api.svg?branch=master)](https://travis-ci.org/BYU-OIT/node-duo-api)

- [API Reference and examples](API.md)
- [Development](#development)
  - [Testing](#testing)

---

# Development

## Testing
To run the tests on your local machine, create three environment variables:
 
- `DUO_API_HOST`: duo api host. 
- `DUO_API_IKEY`: duo api integration key.
- `DUO_API_SKEY`: duo api secret key.

Optionally, you can also set an additional environment variable, `DUO_API_USER` to a valid duo username in your account
to enable more rigorous user lookup testing.

then run `gulp test`.

```bash
cd node-duo/
export DUO_API_HOST=api-XXXXXXXX.duosecurity.com
export DUO_API_IKEY=XXXXXXXXXXXXXXXXXXXX
export DUO_API_SKEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
export DUO_API_USER=XXXXX # If you want to enable rigorous user lookup testing.
gulp test
```

You can have gulp run the tests on any code change by running `gulp watch` in the root of the repository.

