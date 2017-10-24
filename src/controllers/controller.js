const model = require('../models/model')
console.log('constroller route!!!!!!!');

function getAll(req, res, next) {
  const limit = req.query.limit
  const data = model.getAll(limit)
  res.json({
    data
  })
}

function getOne(req, res, next) {
  const id = req.params.id
  const result = model.getOne(id)
  console.log(id);
  if (result === 'error')
    return next({
      status: 404,
      message: `Could not find spoon with id of ${id}`
    })

  res.json({
    data: result
  })
}
//
//   const spoon = req.query.spoon
//   const data = model.getOne(spoon)
//   res.status(200).json({
//     data
//   })
// }

function create(req, res, next) {
  const result = model.create(req.body)
  if (result.errors) {
    return next({
      status: 400,
      message: `Could not create new spoon`,
      errors: result.errors
    })
  }
  res.status(201).json({
    data: result
  })
}

function update(req, res, next) {
  const result = model.update(req.params.id, req.body)
  if (result.errors) {
    return next({
      status: 400,
      message: `Could not update spoon`,
      errors: result.errors
    })
  }
  res.status(200).json({
    data: result
  })
}

function destroy(req, res, next) {
  const id = req.params.id
  const result = model.destroy(id)

  if (result.errors) {
    return next({
      status: 404,
      message: `Could not delete spoon`,
      errors: result.errors
    })
  }
  res.status(204).json()
}

//
// function create(req, res, next) {
//   const result = model.create(req.body)
//
//   if (result.errors) {
//     return next({
//       status: 400,
//       message: `Could not create new spoon`,
//       errors: result.errors
//     })
//   }
//
//   res.status(201).json({
//     data: result
//   })
// }

module.exports = {
  getAll,
  getOne,
  create,
  update,
  destroy
}
