import React from 'react'


const userName=async()=>{
    let data = await fetch("https://dummyjson.com/products")
    data = await data.json();
    // console.log(data)
    return data.products

}
const page =async () => {
    let user = await userName();
    console.log(user)
  return (
    <div>
     <h1> user name list</h1>

      {
        user.map((item)=>(
            <div> {item.title}</div>
        ))
      }
    </div>
  )
}

export default page
