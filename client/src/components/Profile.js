import React, { useState } from 'react';
import PostForm from './PostForm';

const Profile = () => {
  const [posts, setPosts] = useState([]);

  const handlePostCreate = (content) => {
    // Create a new post object
    const newPost = {
      id: Date.now(),
      content: content,
    };

    // Update the posts state by adding the new post
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  const handlePostUpdate = (content, postId) => {
    // Update the posts state by finding the post by postId and updating its content
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, content: content } : post
      )
    );
  };

  const handlePostDelete = (postId) => {
    // Update the posts state by filtering out the post with the matching postId
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
  };

  return (
    <div>
      <h2>Profile</h2>

      {/* Render the form for creating posts */}
      <PostForm onPostCreate={handlePostCreate} />

      {/* Display the existing posts */}
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <p>{post.content}</p>
            <button onClick={() => handlePostDelete(post.id)}>Delete</button>
            <PostForm
              onPostUpdate={handlePostUpdate}
              postId={post.id}
              initialValues={post.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
