import React from 'react'
import Container from '../container/Container'
import Image from 'next/image'
import Link from 'next/link'

const TopHeader = () => {
  return (
    <div className='min-w-full h-12 bg-[#F2F2F2] flex justify-center items-center'>
        <Container>
            <div className="max-w-7xl h-full m-auto flex justify-between items-center">
                <div className="flex justify-between items-center gap-1"><Image src={"/icons/location.svg"} width={16.5} height={21} alt='location icon'/><p className='font-semibold text-sm'>Iltimos, manzilingizni kiriting</p></div>
                <ul className="flex justify-between items-center gap-10">
                    <li><Link className="font-medium text-lg" target='_blank' href={"https://www.mbgstore.uz/uz/about"}>Biz haqimizda</Link></li>
                    <li><Link className="font-medium text-lg" target='_blank' href={"https://www.mbgstore.uz/uz/stores"}>Do'konlar</Link></li>
                    <li><Link className="font-medium text-lg" target='_blank' href={"https://www.mbgstore.uz/uz/about#faq"}>FAQ</Link></li>
                </ul>
            </div>
        </Container>
    </div>
  )
}

export default TopHeader