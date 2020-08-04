import musixmatch from '../apis/musixmatch';

export const selectSong = (song)=>{
    return{
        type:'SONG_SELECTED',
        payload:song
    };
};
export const fetchLyrics = ()=>{
    return function(dispatch, getState){
        const promise = musixmatch.get('');
        return{
            type:'FETCH_LYRICS',
            payload:promise
        };
    }

};
