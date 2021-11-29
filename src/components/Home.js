import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Pokeball from '../pokeball.png';
import { bindActionCreators } from 'redux';
import { actions } from '../store/actions/postActions';

const Home = ({loadPosts, posts}) => {
  useEffect(() => {
    loadPosts();
  }, []);

  const postList = Boolean(posts) && posts.length 
    ? (posts.map((post, idx) => 
      <div key={post.id} className="post card">
        <img src={Pokeball} alt="pokeball" />
        <div className="card-content">
          <Link to={`/${post.id}`}>
          <span className="card-title red-text">
            {post.title}
          </span>
          </Link>
          <p>
            {post.body}
          </p>
        </div>
      </div>))
    : (<div className="center">No posts yet.</div>);
    

  return (
    <div className="container home">
      <h4 className="center">
        Home
      </h4>
      {postList}
  </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loadPosts: actions.loadPosts,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);