/** @format */

const postFunc = async db => {
  let posts = await db.get_all_posts();
  return posts;
};

module.exports = {
  getAllPosts: async (req, res) => {
    const db = req.app.get('db');

    const posts = await postFunc(db);

    res.status(200).send(posts);
  },
  addPost: async (req, res) => {
    const db = req.app.get('db');

    const { id } = req.session.user;

    const { img, content, title } = req.body;

    await db.add_post([id, content, title, img]);

    const posts = await postFunc(db);

    res.status(200).send(posts);
  },
};
