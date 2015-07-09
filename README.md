# node-duo
This is a node client for the duo security admin api.

# Testing
To run the tests, create a json file with `url` containing your duo api url, `ikey` set to your integration key, and `skey` containing your secret key.
Then set the environment variable `DUO_CONN_INFO` to the path of the file & run `gulp test`.
