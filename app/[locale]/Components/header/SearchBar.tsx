"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Button from '@mui/material/Button';

const SearchBar = () => {
    const [isFocused, setIsFocused] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault()
        if(isFocused === true) {}
    }
  return (
    <div className="flex gap-3 justify-between items-center h-full">
        <div className={`bg-[#39B969] gap-2 w-[136px] h-[50px] rounded-2xl flex items-center justify-center`}>
            <Image src={"/icons/book.svg"} alt='category opener' width={24} height={24}/>
            <p className='text-white text-lg font-semibold'>Katalog</p>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className={`${isFocused ? "border-[#E9E9E9]": "border-[#E9E9E9]"} h-12 w-[574px] border-l-2 border-y-2 rounded-l-2xl flex justify-between items-center`} action="#">
            <input onClick={()=> {
                setIsFocused(!isFocused)
            }} className="focus:outline-none pl-5 w-[500px]" placeholder='Поиск товаров' type='text'/>
            <button className='bg-[#39b969] active:bg-[#52cf82] transition-colors relative left-[9px] w-[50px] h-[50px] rounded-2xl'>
                <Image src={"/icons/search.svg"} alt='search icon' className='m-auto' width={24} height={24} />
            </button>
        </form>
    </div>
  )
}

export default SearchBar