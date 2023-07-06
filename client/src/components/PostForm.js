import React, { useState } from 'react';

const PostForm = ({ onPostCreate, onPostUpdate, postId, initialValues }) => {
  const [content, setContent] = useState(initialValues || '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (postId) {
      // If postId is provided, call onPostUpdate with the updated content and postId
      onPostUpdate(content, postId);
    } else {
      // Otherwise, call onPostCreate with the new content
      onPostCreate(content);
    }

    // Clear the form input
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Enter post content"
        required
      ></textarea>
      <button type="submit">{postId ? 'Update Post' : 'Create Post'}</button>
    </form>
  );
};

export default PostForm;
