import musixmatch from '../apis/musixmatch';

export const selectSong = (song)=>{
    return{
        type:'SONG_SELECTED',
        payload:song
    };
};
export const fetchLyrics = ()=> async dispatch =>{
        const promise = musixmatch.get('');
        dispatch({type:'FETCH_LYRICS',payload:promise})               
    }


