import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';

const Post = ({posts}) => {
  const [post, setPost] = useState(null);
  const params = useParams();

  useEffect(() => {
    const id = params.post_id;
    
    setPost(Boolean(posts) ? posts[id] : null);
  }, []);

  const postItem = Boolean(post) 
    ? (
      <div className="post">
        <h4 className="center">{post.title}</h4>
        <p>{post.body}</p>
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
  }
};

export default connect(mapStateToProps)(Post);