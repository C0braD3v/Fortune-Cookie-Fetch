# Fortune Cookie Fetch
A NodeJs SDK for [The Fortune Cookie API](http://fortunecookieapi.herokuapp.com/) to allow users to get a random fortune cookie, without the hastle of writing out large arrays!

# Usage

`npm install fortune-cookies`

```js
const randCookie = require('fortune-cookies')

gimmieCookie()

async function gimmieCookie() {

    console.log(await randCookie.fetchCookie())
}

```

# Methods
`.fetchCookie() - Returns promise<FortuneCookieString>`
