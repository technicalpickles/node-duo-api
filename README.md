# node-duo
This is a node client for the duo security admin api.

# Testing
[Travis CI](https://travis-ci.org/) runs the tests against every commit.

To run the tests on your local machine, create three environment variables:
 
- `DUO_API_HOST`: duo api host url. 
- `DUO_API_IKEY`: duo api integration key.
- `DUO_API_SKEY`: duo api secret key.

then run `gulp test`.

```bash
cd node-duo/
export DUO_API_HOST=https://api-XXXXXXXX.duosecurity.com
export DUO_API_IKEY=XXXXXXXXXXXXXXXXXXXX
export DUO_API_SKEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
gulp test
```

You can have gulp run the tests on any code change by running `gulp watch` in the root of the repository.

