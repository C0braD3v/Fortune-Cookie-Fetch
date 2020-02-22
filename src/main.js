exports.fetchCookie = async () => {
    const got = require('got');
    try {
        const response = await got('http://fortunecookieapi.herokuapp.com/v1/cookie');
        let json = await JSON.parse(response.body);
        return json[0].fortune.message
    } catch (error) {
        return console.error(error);
    }
}
