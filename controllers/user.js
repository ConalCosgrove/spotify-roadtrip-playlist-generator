const db = require('../models/index');

const { User } = db;
const { Group } = db;
module.exports = (router) => {
  router.get('/', (req, res) => {
    const whereClause = {};
    if (req.query.spotifyId) whereClause.spotifyId = req.query.spotifyId;

    User.findOne({
      where: whereClause,
      include: [{
        model: Group,
        as: 'groups',
      }],
    }).then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send([]);
      }
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
    console.log(req.body);
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
