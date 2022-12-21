const notionSearch = 'https://api.notion.com/v1/search'

async function searchInDB(){
    const response = await fetch(notionSearch, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Notion-Version': process.env.NOTION_VERSION,
            'Authorization': 'Bearer '+ process.env.NOTION_INTEGRATION_TOKEN
        }
    })

    const dbResponse = await response.json()
    return dbResponse
}

async function getMovies(){
    const dbResponse = await searchInDB()
    var movies = [];
    dbResponse.results.forEach( row => {
        if (row.object === 'page' && row.properties.Tipo.select && row.properties.Tipo.select.name === 'Pelicula'){
            const movie = row.properties
            movies.push(movie)
        }
    })
    return movies;
}

module.exports = getMovies;