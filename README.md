# node-duo
This is a node client for the duo security admin api.

# Testing
To run the tests, create a json file with `url` set to your duo api url, `ikey` set to your integration key, and `skey` set to your secret key.
Then set the environment variable `DUO_CONN_INFO` to the path of the file & run `gulp test`.


```json
{
    "url": "DUO_API_URL",
    "ikey": "INTEGRATION_KEY",
    "skey": "SECRET_KEY
}
```

`export DUO_CONN_INFO=PATH_TO_JSON_FILE`

`gulp test`

