import React from 'react'

const getUsers = async() => {
    let result = await fetch("https://dummyjson.com/users")
    return result.json()
 
}

export default getUsers
