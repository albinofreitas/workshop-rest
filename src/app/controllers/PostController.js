import User from "../models/User";
import Post from "../models/Post";

class PostController {
    async store(req, res) {
        const { userId } = req.params;

        const user = await User.findByPk(userId);

        if(!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        const post = await Post.create({
            ...req.body,
            user_id: userId
        });

        return res.json(post);
    }

    async delete(req, res) {
        const { userId, id } = req.params;

        const post = await Post.findByPk(id);

        if(!post) {
            return res.status(404).json({ erorr: 'Post não encontrado'})
        }

        if(post.user_id !== parseInt(userId)) {
            return res.status(403).json({ error: 'Post só pode ser excluido pelo seu criador.' });
        }

        await post.destroy();

        return res.status(204).json({});
    }
}

export default new PostController();