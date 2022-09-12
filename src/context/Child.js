import React, { useContext } from 'react';
import {UserContext} from './Parent';

const Child = () => {
    const user = useContext(UserContext);
  return (
    <div>
        <p>{user}    </p>
    </div>
  )
}

export default Child