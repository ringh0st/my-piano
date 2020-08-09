import {combineReducers} from 'redux';
import lyricsReducer from './lyricsReducer';
import userReducer from './userReducer';

const songsReducer =()=>{
    return[
        {title:'No Scrubs',artist:'TLC',duration:'3:34'},
        {title:'Underdog',artist:'Alicia Keys',duration:'3:28'},
        {title:'All Star',artist:'Smash Mouth',duration:'3:20'},
        {title:'I Want It That Way',artist:'Backstreet Boys',duration:'3:33'},
    ]
};

const selectedSongReducer =(selectedSong=null, action)=>{
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong
};

export default combineReducers({
    //you can put a dummy function untill you write your reducers in the beginning of the app
    songs:songsReducer,
    selectedSong:selectedSongReducer,
    lyrics:lyricsReducer,
    users:userReducer
})