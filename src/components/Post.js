import React from 'react';

function PostHeader({ author, date }) {
  return (
    <header>
      <img src={author.avatar} alt="user-avatar" />
      <div className="post-user-info">
        <span className="user-name">{author.name}</span>
        <span className="post-date">{date}</span>
      </div>
    </header>
  );
}

function PostComment({ comments }) {
  return (
    <footer id="comments-list">
      {comments.map(coment => (
        <div className="comment">
          <img src={coment.author.avatar} alt="user-avatar" />
          <div className="comment-msg">
            <p>
              <b>{coment.author.name}</b> {coment.content}
            </p>
          </div>
        </div>
      ))}
    </footer>
  );
}

function Post({ author, date, content, comments }) {
  return (
    <article>
      <PostHeader author={author} date={date} />
      <div className="post-msg">
        <span>{content}</span>
      </div>
      <hr />
      <PostComment comments={comments} />
    </article>
  );
}

export default Post;
