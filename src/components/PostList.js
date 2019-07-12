import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {
  /* Estado do component */
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Jurandir Silva',
          avatar: 'https://i.pravatar.cc/150?img=11'
        },
        date: '04 Jun 2019',
        content:
          'Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor, ou palavras aleatórias que não parecem nem um pouco convincentes.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Amanda Jurema',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            content:
              'Aliquam semper suscipit nibh, ut venenatis ex semper a. Ut porttitor fringilla tempor. Aenean fringilla, metus et maximus posuere, lorem erat facilisis lorem, quis consequat augue ligula quis metus. Suspendisse hendrerit felis at libero tempus mollis.'
          },
          {
            id: 2,
            author: {
              name: 'Zico Roberto',
              avatar: 'https://i.pravatar.cc/150?img=8'
            },
            content:
              'Aliquam semper suscipit nibh, ut venenatis ex semper a. Ut porttitor fringilla tempor. Aenean fringilla, metus et maximus posuere, lorem erat facilisis lorem, quis consequat augue ligula quis metus. Suspendisse hendrerit felis at libero tempus mollis.'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Juca Bala',
          avatar: 'https://i.pravatar.cc/150?img=11'
        },
        date: '22 Jul 2019',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis, risus imperdiet ullamcorper gravida?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Adalberto Pimenta',
              avatar: 'https://i.pravatar.cc/150?img=51'
            },
            content:
              'Aliquam semper suscipit nibh, ut venenatis ex semper a. Ut porttitor fringilla tempor. Aenean fringilla, metus et maximus posuere, lorem erat facilisis lorem, quis consequat augue ligula quis metus. Suspendisse hendrerit felis at libero tempus mollis.'
          }
        ]
      }
    ]
  };

  render() {
    return (
      <section id="post-list" className="container">
        {this.state.posts.map(post => (
          <Post
            author={post.author}
            date={post.date}
            content={post.content}
            comments={post.comments}
          />
        ))}
      </section>
    );
  }
}

export default PostList;
