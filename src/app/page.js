"use client"
import React, { useState } from 'react'

const page = () => {
  const [color, setcolor] = useState("gray")
  return (
  <>
 <div className='w-full h-screen duration-2'style={{backgroundColor: color}}>
 <h1 className='text-2xl text-center text-white pt-3 bg-orange-600 ' >Hi Welcome please click the button</h1>
  <div className='fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-2'>
   
    <div className='flex flex-wrap justify-center gap-4 bg-slate-200 shadow-lg px-3 py-2 rounded-xl'>
    <button onClick={ () => setcolor("red")} className='outline-none px-5 py-1 bg-slate-200 rounded-xl text-white'
    style={{backgroundColor: "red"}}>red</button>

     <button onClick={() => setcolor("green")} className='outline-none px-5 py-1 bg-slate-200 rounded-xl text-white'
    style={{backgroundColor: "green"}}>green</button>

     <button onClick={() => setcolor("blue")} className='outline-none px-5 py-1 bg-slate-200 rounded-xl text-white'
    style={{backgroundColor: "blue"}}>blue</button>

     <button onClick={() => setcolor("skyblue")} className='outline-none px-5 py-1 bg-slate-200 rounded-xl text-white'
    style={{backgroundColor: "skyblue"}}>skyblue</button>

    <button onClick={() => setcolor("black")} className='outline-none px-5 py-1 bg-slate-200 rounded-xl text-white'
    style={{backgroundColor: "black"}}>black</button>
    </div>
  </div>
 </div>
  </>
  )
}

export default page
