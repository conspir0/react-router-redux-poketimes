import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Pokeball from '../pokeball.png';

const Home = ({posts}) => {
  // const [posts, setPosts] = useState(null);
  // const URL = 'https://jsonplaceholder.typicode.com/posts';

  // useEffect(() => {
  //   axios.get(URL)
  //     .then(response => {
  //       setPosts(response.data.slice(0,10));
  //     })
  //     .catch(err => console.error(`There was a problem - ${err}`));
  // }, []);

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

export default connect(mapStateToProps)(Home);