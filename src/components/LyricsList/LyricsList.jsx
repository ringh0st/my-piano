import React from 'react';
import {connect} from 'react-redux';
import {fetchLyrics} from '../../actions';

class LyricsList extends React.Component{
    componentDidMount(){
        this.props.fetchLyrics();
        console.log(this.props);
    }
    render(){
        return(
            <h2>Lyrics:</h2>
        )
    }
}

export default connect(
    null,
    {fetchLyrics}
    )(LyricsList);