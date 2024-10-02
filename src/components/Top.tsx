"use client"

import { Layout } from "antd"
import { useState } from "react";
import Link from "next/link";

const {Header} = Layout

const Top: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <Header className="relative h-[80px] bg-white border-b-[1px] lg:px-[10px] xl:px-[30px]">
            <nav className="xs:hidden lg:flex lg:justify-between lg:items-center">
                <Link href="/">
                    <img src="/icons/logo 1.svg" alt="logo" />
                </Link>
                <div>
                    <a href="tel:+79528278833" className="text-[20px] text-[#48b03a] hover:text-[#48b03a] xl:ml-[200px]">8-(952)-827-88-33</a>
                </div>
                <ul className="flex gap-[20px]">
                    <li className="md:text-[22px] leading-5 text-[20px] font-[300]">
                    <Link href="/for-mans">Для парней</Link>
                    </li>
                    <li className="md:text-[22px] leading-5 text-[20px] font-[300]">
                    <Link href="/for-womans">Для девушек</Link>
                    </li>
                    <li className="md:text-[22px] leading-5 text-[20px] font-[300]">
                    <Link href="/no-milk">Без глютена и молока</Link>
                    </li>
                </ul>
            </nav>
            <div className="burger fixed left-0  w-full z-10 lg:hidden">
                <div onClick={() => setIsOpen(!isOpen)} className="absolute right-[20px] top-[20px] flex flex-col gap-[7px] cursor-pointer">
                    <div className=" w-[40px] h-[5px] bg-[#000]"></div>
                    <div className=" w-[40px] h-[5px] bg-[#000]"></div>
                    <div className=" w-[40px] h-[5px] bg-[#000]"></div>
                </div>
                <nav className={isOpen ? "flex flex-col bg-slate-500 " : "hidden"}>
                    <div className="bg-[#fff]">
                    <Link href="/" className=" block w-[200px] mx-auto">
                        <img className="w-[100%]" src="/icons/logo 1.svg" alt="logo" />
                    </Link>
                    </div>
                    <ul className="flex flex-col gap-[20px] xs:pl-[20px] xs:gap-[10px] xs:py-[20px]">
                    <li className="text-[#fff] text-[22px]  leading-10">
                        <Link href="/for-mans">Для парней</Link>
                    </li>
                    <li className="text-[#fff] text-[22px]  leading-10">
                        <Link href="/for-womans">Для девушек</Link>
                    </li>
                    <li className="text-[#fff] text-[22px]  leading-10">
                        <Link href="/no-milk">Без глютена и молока</Link>
                    </li>
                    </ul>
                </nav>
            </div>
      </Header>
    )
}

export default Top;