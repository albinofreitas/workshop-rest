import Post from "../models/Post";
import User from "../models/User";
import Comment from "../models/Comment";

class CommentController {
    async store(req, res) {
        const { id } = req.params;

        const post = await Post.findByPk(id);

        if(!post) {
            return res.status(404).json({ error: 'Post não encontrado' });
        }

        const user = await User.findByPk(req.body.user_id);

        if(!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        const comment = await Comment.create({
            content: req.body.content,
            user_id: user.id,
            post_id: post.id
        });

        return res.json(comment);
    }
}

export default new CommentController();