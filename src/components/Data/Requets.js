const API_KEY = '61e3bf9c46eb3385d279dca6bc5ae266'
const requests = {
    fetchTrending: `/trending/all/week?api_key=${ API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${ API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${ API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${ API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${ API_KEY}&with_genres=35`,
    fetchHorrorMovie:  `/discover/movie?api_key=${ API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${ API_KEY}&with_genres=1079`,
    fetchDocumentaries : `/discover/movie?api_key=${ API_KEY}&with_genres=99`
}

export default requests
//https://api.themoviedb.org/3/trending/all/week?api_key=61e3bf9c46eb3385d279dca6bc5ae266&language=en-US
//https://api.themoviedb.org/3/discover/tv?api_key=61e3bf9c46eb3385d279dca6bc5ae266&with_networks=213
