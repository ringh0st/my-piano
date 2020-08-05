import React from 'react';
import {connect} from 'react-redux';
import {fetchLyrics} from '../../actions';

class LyricsList extends React.Component{
    componentDidMount(){
        this.props.fetchLyrics();

    }
    render(){
        console.log(this.props);
        return(
            <h2>Lyrics:</h2>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        lyrics:state.lyrics
    }
}
export default connect(
    mapStateToProps,
    {fetchLyrics}
    )(LyricsList);