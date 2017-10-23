const uuid = require('uuid/v4')
const spoons = []

function getAll(limit) {
  return limit ? spoons.slice(0, limit) : spoons
}

function create(body) {
  const errors = []
  const name = body.name

  let response
  if (!name) {
    errors.push('name is required')
    response = {
      errors
    }
  } else {
    const spoon = {
      id: uuid(),
      name
    }
    spoons.push(spoon)
    response = spoon
  }

  return response
}

module.exports = {
  getAll,
  create
}
