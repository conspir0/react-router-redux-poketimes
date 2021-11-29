import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../store/actions/postActions';

const Post = ({deletePost, posts}) => {
  const [post, setPost] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const id = Number(params.post_id);

    setPost(Boolean(posts) ? posts.find(post => post.id === id) : null);
  }, [posts]);

  const handleClick = () => {
    deletePost(post.id);
    navigate("/");
  };

  const postItem = Boolean(post) 
    ? (
      <div className="post">
        <h4 className="center">{post.title}</h4>
        <p>{post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={handleClick}>
            Delete post
            </button>
        </div>
      </div>
    )
    : (
    <div className="center">Loading post...</div>
    ); 

  return (
    <div className="container">
      {postItem}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    deletePost: actions.deletePost,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);