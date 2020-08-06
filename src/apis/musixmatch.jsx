import axios from 'axios';

export default axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})

// https://api.musixmatch.com/ws/1.1/artist.search?format=jsonp&callback=callback&q_artist=alis
// // https://api.musixmatch.com/ws/1.1/artist.search?format=jsonp&apikey=7b7fa6b71bfa99c46f3e3b2be26edc6f&callback=callback&q_artist=