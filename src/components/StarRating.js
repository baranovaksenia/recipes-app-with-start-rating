import React from 'react'
import { createArray } from './lib'
import Star from './Star'

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = React.useState(0)

  return (
    <div className='rating'>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  )
}
