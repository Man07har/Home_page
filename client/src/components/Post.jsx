import React from 'react';

const Post = ({ markdown, preview }) => {
  return (
    <div>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div dangerouslySetInnerHTML={{ __html: preview }} />
    </div>
  );
};

export default Post;
