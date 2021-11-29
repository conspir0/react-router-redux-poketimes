import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState(null);
  const URL = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    axios.get(URL)
      .then(response => {
        setPosts(response.data.slice(0,10));
      })
      .catch(err => console.error(`There was a problem - ${err}`));
  }, []);

  const postList = Boolean(posts) 
    ? (posts.map((post, idx) => 
      <div key={post.id} className="post card">
        <div className="card-content">
          <span className="card-title">
            {post.title}
          </span>
          <p>
            {post.body}
          </p>
        </div>
      </div>))
    : (<div className="center">No posts yet.</div>);
    

  return (
    <div className="container">
      <h4 className="center">
        Home
      </h4>
      {postList}
  </div>
  );
};

export default Home;