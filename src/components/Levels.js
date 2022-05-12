import React from 'react'

const Levels = ({nameofcity, currentCity}) => {
  return (
    <div className='md:flex p-3 m-4 bg-slate-300/20 rounded-md '>
<div className=' flex-grow'>
    <h1 className='text-zinc-200/70 font-thin ' >Find The city</h1>  
<h1 > {nameofcity}</h1>
</div>
<button className=' flex-auto text-gray-700 bg-cyan-200 m-1 hover:bg-slate-300 p-3 rounded-full' onClick={currentCity}>
Play
</button>
    </div>
  )
}

export default Levels