import {combineReducers} from 'redux';
const songsReducer =()=>{
    return[
        {title:'No Scrubs',duration:'4:05'},
        {title:'Underdog',duration:'3:50'},
        {title:'All Star',duration:'3:10'},
        {title:'I Want It That Way',duration:'3:15'},

    ]
};

const selectedSongReducer =(selectedSong=null, action)=>{
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong
};

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})