```js
import React, { useState } from 'react';
import {createPortal} from 'react-dom'
import Modal from './Modal/Modal';



const App = () => {
  const [show,setshow]=useState(false)
  return (
    <div className='container m-auto mt-3'>
       <div className='overflow-hidden'>
       <button onClick={()=>{
        setshow(true)
        document.body.classList.add('overflow-hidden')
       
       }} className='bg-[green] text-white py-2 px-3 rounded-md'>Show From</button>

        {show && createPortal(<Modal setshow={setshow}></Modal>,document.body)}
 
       </div>
    </div>
  );
};

export default App;
```
```js
import React from 'react';

const Modal = ({setshow}) => {
    return (
       <div className='fixed top-0 left-0 w-full bg-[#b2b0b0c6]'>
         <div className='h-screen w-11/12 lg:max-w-7xl m-auto justify-center flex flex-col'>
            <div className='w-full lg:max-w-sm border p-3 rounded-md m-auto'>
            <div className='space-y-2'>
            <h1><button onClick={()=>{
                setshow(false)
                 document.body.classList.remove('overflow-hidden')
            }} className='bg-[red] rounded-md p-2 px-4'>X</button></h1>
            <h1>
                <label className='mb-2'>Email</label>
                <input
                className={`focus:outline-red-700 border  py-1 px-2 rounded-md w-full`}
                type="text"
                name="email"
                id="email"
                placeholder="Enter your email"
                />
                </h1>
            <h1>
            <label className='mb-2'>Password</label>
                <input
                className={`focus:outline-red-700 border  py-1 px-2 rounded-md w-full`}
                type="text"
                name="email"
                id="email"
                placeholder="Enter your Password"
                />
                </h1>
        
        <h1><button className='bg-[#2f92d0] text-white py-2 px-3 w-full rounded-md'>Login</button></h1>

           
        </div>
        </div>
        </div>
       </div>
    );
};

export default Modal;
```