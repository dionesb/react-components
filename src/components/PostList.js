import React, { Component } from 'react';

class PostList extends Component {
  /* Estado do component */
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Diones Breda',
          avatar: './assets/profile.jpg'
        },
        date: '04 Jun 2019',
        content:
          'Existem muitas variações disponíveis de passagens de Lorem Ipsum, mas a maioria sofreu algum tipo de alteração, seja por inserção de passagens com humor, ou palavras aleatórias que não parecem nem um pouco convincentes.',
        comments: [
          {
            id: 1,
            author: {
              name: 'Amanda Jurema',
              avatar: './assets/avatar-user-1.jpeg'
            },
            content:
              'Aliquam semper suscipit nibh, ut venenatis ex semper a. Ut porttitor fringilla tempor. Aenean fringilla, metus et maximus posuere, lorem erat facilisis lorem, quis consequat augue ligula quis metus. Suspendisse hendrerit felis at libero tempus mollis.'
          },
          {
            id: 2,
            author: {
              name: 'Zico Roberto',
              avatar: './assets/avatar-user-3.jpeg'
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
          avatar: './assets/profile.jpg'
        },
        date: '22 Jul 2019',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis, risus imperdiet ullamcorper gravida?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Adalberto Pimenta',
              avatar: './assets/avatar-user-5.jpeg'
            },
            content:
              'Aliquam semper suscipit nibh, ut venenatis ex semper a. Ut porttitor fringilla tempor. Aenean fringilla, metus et maximus posuere, lorem erat facilisis lorem, quis consequat augue ligula quis metus. Suspendisse hendrerit felis at libero tempus mollis.'
          }
        ]
      }
    ]
  };

  render() {
    return 1;
  }
}

export default PostList;
