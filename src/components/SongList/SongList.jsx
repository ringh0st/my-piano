import React, {Component} from 'react';
import {connect} from 'react-redux';

class SongList extends Component {
    renderList(){
        return (this.props.songs.map(song=>{
            return(
            <div className="item" key={song.title}>
                <div className="right floated content">
                    <button className="ui primary button">Select</button>
                </div>
            <div className="content">{song.title}</div>
            </div>
            )
        }))
    }
    render(){
        console.log(this.props);
        return(
            <div className="ui devided list">{this.renderList()}</div>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log(state.songs);
    return {songs:state.songs};
}
export default connect(mapStateToProps)(SongList)
//first parentesis calls the connect ffunction and the second envoke the return function