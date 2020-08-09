import musixmatch from '../apis/musixmatch';
import _ from 'lodash';
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
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async(id,dispatch)=>{
    const response = await musixmatch.get(`/users/${id}`);
    dispatch({type:'FETCH_USER',payload:response.data})               
})





