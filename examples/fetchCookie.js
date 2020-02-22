randCookie = require('fortune-cookies')
async function gimmieCookie() {
console.log(await randCookie.fetchCookie())
}

gimmieCookie()
