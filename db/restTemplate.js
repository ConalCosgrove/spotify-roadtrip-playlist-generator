// This component serves as a consistent interface with the database via rest.
// All that needs to be supplied is the DB model and express router.

const template = (model, relatedModel) => {
  return {
    get:(req, res) => {
      console.log(req.params)
      model.findAll().then((data) => {
        res.send(data);
      })
    },
    getById: (req, res) => {
      model.findByPk(req.params.id, {
        include: [
          {
            model: relatedModel,
            as: 'groups',
            attributes: ['id', 'name']
          }
        ]
      }).then((data) => {
        res.send(data);
      }).catch((err) => {
        console.log(err)
        res.send(err);
      })
    },
    post:(req, res) => {
      req.body.users = [req.body.creatorId];
      model.create(req.body, {
        include: [{
          model: relatedModel,
          as: 'groups'
        }]
      }).then((data) => {
        res.send(data);
      }).catch((err) => {
        res.send(err);
      })
    },
    patch:(req, res) => {

    },
    del: (req, res) => {

    }
  }
}

const bind = (model, relatedModel, router) => {
  const methods = template(model,relatedModel);
  router.get('/', methods.get);
  router.get('/:id', methods.getById);
  router.post('/', methods.post);
  router.patch('/:id', methods.patch);
  router.delete('/:id', methods.del);
  return router;
}

module.exports = bind;