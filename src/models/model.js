const uuid = require('uuid/v4')
console.log('model route!!!!!!!');

const spoons = [{
  id: "7e0f757e-6f15-4aee-9246-5c1bdf9bab33",
  name: 'tea spoon',
  material: 'stainless',
  size: 'medium',
  style: 'modern'
}, {
  id: "ad6199ce-922f-44b5-ac10-e5ec4e6d6b27",
  name: 'table spoon',
  material: 'stainless',
  size: 'large',
  style: 'modern'
}, {
  id: "74cd4906-b614-4266-b09c-7945a68082c9",
  name: 'dessert spoon',
  material: 'stainless',
  size: 'small',
  style: 'modern'
}, {
  id: "b23c67f6-1e25-45fd-8e1c-f7f905a109a0",
  name: 'soup spoon',
  material: 'stainless',
  size: 'large',
  style: 'modern'
}]

function getAll(limit) {
  return limit ? spoons.slice(0, limit) : spoons
}

function getOne(id) {
  const spoon = spoons.find(function(spoon) {
    return spoon.id === id
  })

  // spoon => spoon.id === id)

  if (!spoon) return 'error'
  return spoon
  // const index = spoons.indexOf(spoon)
  //
  // return spoons.splice(index, 1)
  // res.status(204).json()
}

function create(body) {
  const errors = []
  const {
    name,
    material,
    size,
    style
  } = body

  let response
  if (!name) {
    errors.push('name is required')
    response = {
      errors
    }
  } else if (!material) {
    errors.push('material is required')
    response = {
      errors
    }
  } else if (!size) {
    errors.push('size is required')
    response = {
      errors
    }
  } else if (!style) {
    errors.push('style is required')
    response = {
      errors
    }
  } else {
    const id = uuid()
    const spoon = {
      id,
      name,
      material,
      size,
      style
    }
    spoons.push(spoon)
    response = spoon
  }
  return response
}

function update(id, body) {
  const errors = []
  const {
    name,
    material,
    size,
    style
  } = body
  const spoon = spoons.find(spoon => spoon.id === id)
  let response
  if (!spoon) {
    errors.push(`Could not find spoon with id of ${id}`)
    response = {
      errors
    }

  } else

  if (!name) {
    errors.push('name is required')
    response = {
      errors
    }
  } else if (!material) {
    errors.push('material is required')
    response = {
      errors
    }
  } else if (!size) {
    errors.push('size is required')
    response = {
      errors
    }
  } else if (!style) {
    errors.push('style is required')
    response = {
      errors
    }


    // if (!name || !material || !size || !style) {
    //   errors.push(`Field name, material, size and style are required`) response = {
    //     errors
    // }
  } else {
    spoon.name = name
    spoon.material = material
    spoon.size = size
    spoon.style = style
  }
  return response
}

function destroy(id) {
  const errors = []
  const spoon = spoons.find(spoon => spoon.id === id)
  let response

  if (!spoon) {
    errors.push(`Could not find spoon with id of ${id}`)
    response = {
      errors
    }
  } else {
    const index = spoons.indexOf(spoon)
    spoons.splice(index, 1)
    response = ''
  }
  return response
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  destroy
}
