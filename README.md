# Fortune Cookie Fetch
A NodeJs API Wrapper for [The Fortune Cookie API](http://fortunecookieapi.herokuapp.com/) to allow users to get a random fortune cookie, without the hastle of writing out large arrays!

# Usage

`npm install fortune-cookies`

```js
const randCookie = require('fortune-cookies')

randCookie.fetchCookie()
    .then((c) => {console.log(c)})
    .catch((e) => {console.error('An error occured! ', e)})

```
