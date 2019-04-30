import React from "react";
import { getPosts } from "./appData";

export default class InifiniteList extends React.Component {
  state = { posts: [] };

  componentDidMount() {
    this.setState({ posts: getPosts() });
  }

  fetchPosts = () => {
    let posts = this.state.posts;
    posts = posts.concat(getPosts());
    this.setState({ posts });
  };

  render() {
    return (
      <div>
        {this.state.posts.map(post => (
          <Post post={post} />
        ))}
        <button onClick={this.fetchPosts}>Load more...</button>
      </div>
    );
  }
}

const Post = props => {
  const { published, author, content } = props.post;
  return (
    <div style={{ display: "flex" }}>
      <span style={{ flex: "1 1" }}>Author: {author}</span>
      <span style={{ flex: "1 1" }}>Posted on: {published}</span>
      <span style={{ flex: "1 1" }}>content: {content}</span>
    </div>
  );
};
