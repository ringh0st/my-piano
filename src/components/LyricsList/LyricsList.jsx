import React from 'react';
import {connect} from 'react-redux';
import {fetchPostsAndUsers} from '../../actions';
import UserHeader from '../UserHeader/UserHeader';
class LyricsList extends React.Component{
    componentDidMount(){
        this.props.fetchPostsAndUsers(); 
    }

    renderList(){
        return this.props.lyrics.map(post=>{
            return(
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            )
        })
    }

    render(){
        // console.log(this.props);
        return(
            <>
            <h2>Lyrics:</h2>
        <div className="ui relaxed divided list">{this.renderList()}</div>
        </>
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
    {fetchPostsAndUsers}
    )(LyricsList);