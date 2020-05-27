const db = require('../models/index');

const { User } = db;
const { Group } = db;
module.exports = (router) => {
  router.get('/', (req, res) => {
    User.findAll().then((data) => {
      res.send(data);
    });
  });

  router.get('/:id', (req, res) => {
    User.findByPk(req.params.id).then((data) => {
      res.send(data);
    }).catch((err) => {
      console.log(err);
      res.send(err);
    });
  });

  router.post('/', (req, res) => {
    User.create(req.body, {
      include: [{
        model: Group,
        as: 'groups',
      }],
    })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  });
};
