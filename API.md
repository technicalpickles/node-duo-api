# API Reference

- [`new Client(config)`](#new-clientconfig--client)
- [`.request(method, path, params, cb)`](#requestmethod-path-params-cb--promise)

---

##### `new Client(config)` -> `Client`
Creates a new duo api client. Takes a `config` object as its sole argument. The config object must contain 3 elements:
*Note: These values can be found by logging into your admin panel at [admin.duosecurity.com](https://admin.duosecurity.com)*
- `host`: Duo API host: `api-XXXXXXXX.duosecurity.com`
- `ikey`: Duo API Integration key: `XXXXXXXXXXXXXXXXXXXX`
- `skey`: Duo API Secret key: `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`

Example:

```js
var client = new Client({
    host: 'api-XXXXXXXX.duosecurity.com',
    ikey: 'XXXXXXXXXXXXXXXXXXXX',
    skey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
});
```

##### `.request(method, path, params, cb)` -> `Promise`
Execute an http request to a duo api. On successful request, data is returned as parsed JSON object.
- `method` (required): HTTP method to use.
- `path` (required): The API path.
- `params` (optional): Parameters to send with request.
- `cb` (optional): If supplied, callback that will be called on completion of request.

Examples:

Request basic duo account information via the admin api:
```js
// Using promise interface.
client.request('get', '/admin/v1/info/summary').then(function(info) {}).catch(function(error) {});
// Using callback.
client.request('get', '/admin/v1/info/summary', null, function(error, info) {});
```

Request information about a user:
```js
// Using promise interface.
client.request('get', '/admin/v1/users', {username: 'littlebobbytables'}).then(function(user) {}).catch(function(error) {});
// Using callback.
client.request('get', '/admin/v1/users', {username: 'littlebobbytables'}, function(error, user) {});
```
