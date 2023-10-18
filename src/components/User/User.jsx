import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const { id } = useParams()
    return (
        <div className='bg-gray-700 text-2xl p-4 font-bold text-white text-center'>Welcome: {id}</div>

    )
}

export default User