import React from 'react'

interface Entry {
  id: number
  title: string
  content: string
}

interface IBlogProps {
  posts: Array<Entry>
}

interface IBlogState { }

class Blog extends React.Component<IBlogProps, IBlogState> {

  /*constructor(props: IBlogProps) {
    super(props)
  }*/

  render() {
    const sidebar = (
      <ul>
        {this.props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );

    const content = this.props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );

    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }

}

export default Blog