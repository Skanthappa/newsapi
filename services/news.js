var config = require('../config/apiConfig')
const axios = require('axios');

async function getNewsHeadlines(offset, page, searchValue) {
    try {
        var url = `${config.APIURL}/${config.VERSION}/${config.NEWS_HEADLINES}`;
        let articles = []
        const params = {
            country: 'gb',
            apiKey: config.DEMOKEY
        }
        console.log(url, params)
        let response = await axios.get(url,
            {
                params
            }
        )
        var data = response.data || {}
        if (data.status && data.status === 'ok') {
            articles = data.articles || [];
        }
        return articles;
    }
    catch (error) {
        throw error
    }
}
module.exports = {
    getNewsHeadlines
}