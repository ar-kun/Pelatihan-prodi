import { React, useState } from 'react';

function HelloWorld({ name }) {
 const [stateName, setName] = useState('');

 return (
  <div>
   Hello, {stateName} <button onClick={() => setName(name)}>Set</button>{' '}
  </div>
 );
}

export default HelloWorld;
