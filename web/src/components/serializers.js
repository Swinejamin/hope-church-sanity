import React from 'react'
import Figure from './Figure'

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.person.name}</span>,
    mainImage: Figure
  }
}

export default serializers
