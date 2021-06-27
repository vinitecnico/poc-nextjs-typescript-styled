import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

interface IParams {
  id: number
}

const Pokemon: React.FC<IParams> = () => {
  const router = useRouter()
  const { id } = router.query
  return  (
    <div>
      <h1>
        here {id}
      </h1>
    </div>
  )
}

export default Pokemon

