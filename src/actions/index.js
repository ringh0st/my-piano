import musixmatch from '../apis/musixmatch';

export const selectSong = (song)=>{
    return{
        type:'SONG_SELECTED',
        payload:song
    };
};
export const fetchLyrics = ()=> async dispatch =>{
    const response = await musixmatch.get('/posts');
    dispatch({type:'FETCH_LYRICS',payload:response.data})               
}
export const fetchUser = (id)=> async dispatch =>{
    const response = await musixmatch.get(`/users/${id}`);
    dispatch({type:'FETCH_USER',payload:response.data})               
}


