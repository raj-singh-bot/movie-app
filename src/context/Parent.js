import React, { createContext } from 'react'
import Child from './Child';

const UserContext = createContext();
const Parent = () => {
     const user = {
        name: 'John',
        age: 22
     }
  return (
    <div>
        <UserContext.Provider value={user.age} >
            <Child />
        </ UserContext.Provider>
    </div>
  )
}

export default Parent;
export {UserContext};
