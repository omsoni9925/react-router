import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
    console.log(data);
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('http://api.github.com/users/omsoni9925')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data)
    //         })
    //         .then({

    //         })
    // }, [])
    return (
        <div className="bg-gray-700 text-2xl p-4 font-bold text-white text-center">
            <div style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'center',
            }}>
                <img src={data.avatar_url} alt="git_picture" className="w-300" />
                <div style={{ marginLeft: '20px' }}>
                    <div>Github Followers: {data.followers}</div>
                </div>
            </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('http://api.github.com/users/omsoni9925')
    return response.json();
}