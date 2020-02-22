# TheSimpsonsQuoteAPI-SDK-NODE
A NodeJs SDK for [The Fortune Cookie API](http://fortunecookieapi.herokuapp.com/) to allow users to get a random fortune cookie, without the hastle of writing out large arrays!

# Usage

> `npm install fortune-cookies`

```js
randCookie = require('fortune-cookies')
async function gimmieCookie() {
console.log(await randCookie.fetchCookie())
}
gimmieCookie()

```
