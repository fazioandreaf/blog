import React from 'react';
import {connect } from 'react-redux';
import { fetchPost } from '../actions'
import UserHeader from './UserHeader';

class PostList extends React.Component {
    componentDidMount() {
        this.props.fetchPost();
    }

    renderList() {
        return this.props.posts.map(({id, title, body, userId}) => {
            return (
                <div className='item' key={id}>
                    <i className='large middle aligne icon user' />
                    <div className="content">
                        <h2>{title}</h2>
                        <p>{body}</p>
                    </div>
                    <UserHeader userId={userId} />
                </div>
            )
        })
    };

    render() {
        return (
            <div className='ui relaxed divided list'>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts}
}

export default connect(mapStateToProps, {fetchPost})(PostList)