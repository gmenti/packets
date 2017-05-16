# packets

> Simple packets implementation to economize memory and network band.

## Getting start

```js
const Packets = require('packets');
 
const myAppPackets = new Packets([
  'ping',
  'pong',
]);
 
// Get identifier to ping packet
myAppPackets.get('ping');
 
// Get all keys
myAppPackets.keys();

```

## Build Setup

``` bash
# install dependencies
npm install

# build for production with minification
npm run build

# start compiled version.
npm run start

# run lint in code
npm run lint
```
