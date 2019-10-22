import Post from "../models/Post";
import User from "../models/User";
import Comment from "../models/Comment";

class PostController {
    async index(req, res) {
        const posts = await Post.findAll({
            include: [
                {
                    model: User,
                    as: 'writer',
                    attributes: ['id', 'name', 'email'],
                },
                {
                    model: Comment,
                    as: 'comments'
                }
            ],
        });

        return res.json(posts);
    }
}

export default new PostController();