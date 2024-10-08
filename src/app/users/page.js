

import getUsers from '../../../services/getUsers'

const page = async() => {

    const getUserList = getUsers();
    const userData = await getUserList;
    console.log(userData) 
    return (
        <div>
          user
          {
            userData.map((item)=>(
                <div>{item.name}</div>
            ))
          }
        </div>
      )
}

export default page
