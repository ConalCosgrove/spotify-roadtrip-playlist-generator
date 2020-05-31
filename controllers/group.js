const { Group } = require('../models');
const { User } = require('../models');


module.exports = (router) => {
  router.get('/', (req, res) => {
    Group.findAll().then((data) => {
      res.send(data);
    });
  });

  router.get('/:id', (req, res) => {
    Group.findByPk(req.params.id, {
      include: [
        {
          model: User,
          as: 'users',
          attributes: ['id', 'firstName'],
        },
      ],
    }).then((data) => {
      res.send(data);
    }).catch((err) => {
      res.send(err);
    });
  });

  router.post('/:id', (req, res) => {
    if (!req.body.userId) res.status(400).send({ error: 'No userId in request body' });
    Group.findByPk(req.params.id).then((group) => {
      User.findByPk(req.body.userId).then((user) => {
        group.addUser(user).then((updatedUser) => {
          res.send(updatedUser);
        });
      });
    });
  });

  router.post('/', (req, res) => {
    Group.create(req.body).then((group) => {
      User.findByPk(req.body.creatorId).then((user) => {
        group.addUser(user);
        res.send(group);
      });
    });
  });
};
