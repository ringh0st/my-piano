import musixmatch from '../apis/musixmatch';
import _ from 'lodash';
export const selectSong = (song)=>{
    return{
        type:'SONG_SELECTED',
        payload:song
    };
};


export const fetchPostsAndUsers =()=>async (dispatch, getState) =>{
    await dispatch(fetchLyrics())
    // console.log(getState().lyrics);
    const userIds =_.uniq(_.map(getState().lyrics, 'userId'))
    userIds.forEach(id=>dispatch(fetchUser(id)))
    console.log(userIds);
}

export const fetchLyrics = ()=> async dispatch =>{
    const response = await musixmatch.get('/posts');
    dispatch({type:'FETCH_LYRICS',payload:response.data})               
}

export const fetchUser = id => async dispatch => {
    const response = await musixmatch.get(`/users/${id}`);
    dispatch({type:'FETCH_USER',payload:response.data})               
};

// downside=> we can call this fetch only once with every id in our app
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async(id,dispatch)=>{
//     const response = await musixmatch.get(`/users/${id}`);
//     dispatch({type:'FETCH_USER',payload:response.data})               
// })





