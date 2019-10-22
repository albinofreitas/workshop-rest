import User from "../models/User";

class UserController {
    async store(req, res) {
        const { name, email, password, password_confirmation } = req.body;

        const userExists = await User.findOne({ where: { email } });

        if (userExists) {
            return res.status(400).json({ error: 'Email já cadastrado.' });
        }

        if(password !== password_confirmation) {
            return res.status(400).json({ error: 'Confirmação de senha incorreta.'});
        }

        const user = await User.create({name, email, password});

        return res.status(201).json(user.resource());
    }

    async show(req, res) {
        const { id } = req.params;

        const user = await User.findByPk(id);

        if(!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        return res.json(user.resource());
    }

    async delete(req, res) {
        const { id } = req.params;

        const user = await User.findByPk(id);

        if(!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        await user.destroy();

        return res.status(204).json({});
    }

    async update(req, res) {
        const { password, password_confirmation, old_password, email } = req.body;

        const user = await User.findByPk(req.params.id);

        if(!user) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        if (email && email !== user.email) {
            const userExists = await User.findOne({ where: { email } });

            if (userExists) {
                return res.status(400).json({ error: 'Email já cadastrado.' });
            }
        }

        if(password) {
            if(password !== password_confirmation) {
                return res.status(400).json({ error: 'Confirmação de senha incorreta'})
            }

            if (!old_password || !(await user.checkPassword(old_password))) {
                return res.status(401).json({ error: 'Senha antiga não bate' });
            }
        }

        const userUpdated = await user.update(req.body);

        return res.json(userUpdated.resource());
    }
}

export default new UserController();