import React from 'react'
import { useParams } from 'react-router-dom'
import { DUMMY_ITEMS } from '../../data/items'

export default function SingleItem(props) {
    const params = useParams()
  return (
    <>
    {DUMMY_ITEMS.filter(i => i.id === params.id).map((item) => {
        return (
            <div>{item.name}</div>
        )
    })
    }

    </>
  )
}
