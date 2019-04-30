export const getPosts = function() {
  let posts = [];
  for (let i = 0; i < 10; i++) {
    posts.push(getRandomPost());
  }
  return posts;
};

function getRandomPost() {
  return {
    published: new Date(Date.now()).toLocaleDateString(),
    author: "toto",
    content: "this is a testing content"
  };
}
