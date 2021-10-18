import Post from '../app/schemas/Post';

class PostRepository {
  getAll() {
    return Post.find({});
  }

  // getPostId(post) {
  //   return Post.findOne({ post });
  // }

  getPost(id) {
    return Post.findById({ _id: id });
  }

  create(payload) {
    return Post.create(payload);
  }

  update(id, payload) {
    return Post.findByIdAndUpdate(id, payload, { new: true });
  }

  delete(id) {
    return Post.findByIdAndDelete(id);
  }
}

export default new PostRepository();
