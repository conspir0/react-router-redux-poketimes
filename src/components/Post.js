import React, {useEffect, useState} from 'react';
import { useLocation, useMatch, useParams } from 'react-router';
import axios from 'axios';

const Post = () => {
  const [id, setId] = useState(null);
  const [post, setPost] = useState(null);
  const params = useParams();
  const location = useLocation();
  const match = useMatch(":post_id");
  const URL = 'https://jsonplaceholder.typicode.com/posts/';

  useEffect(() => {
    const id = params.post_id;
    
    axios.get(URL + id)
      .then(response => {
        setPost(response.data);
      })
      .catch(err => console.error(`There was a problem - ${err}`));
    setId(id);
  }, []);

  console.log("params: ", params)
  console.log("match: ", match);
  console.log("location: ", location)
  console.log("id: ", id);
  console.log(post);

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

export default Post;