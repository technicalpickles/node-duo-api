# node-duo
This is a node client for the duo security admin api.

# Testing
[Travis CI](https://travis-ci.org/) runs the tests against every commit.

To run the tests on your local machine, create three environment variables:
 
`host` set to your duo api host url, `ikey` set to your integration key, and `skey` set to your secret key.
Then set the environment variable `DUO_CONN_INFO` to the path of the file & run `gulp test`.

You can have gulp run the tests on any code change by running `gulp watch` in the root of the repository.

`gulp test`

