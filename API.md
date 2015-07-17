# API Reference

- [`new Client(config)`](#new-clientconfig)
- [`.request(method, path, cb)`](#requestmethod-path-cb)

---

##### `new Client(config)`
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
