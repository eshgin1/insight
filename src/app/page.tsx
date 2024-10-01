"use client"

import { Layout, Flex } from "antd";
import Link from "next/link";
import Category from "@/components/Category";
import Company from "@/components/Company";
import { useState } from "react";

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Flex gap="middle" wrap>
      <Layout >
        <Header className="relative h-[80px] bg-white border-b-[1px] lg:px-[10px] xl:px-[30px]">
          <nav className="xs:hidden lg:flex lg:justify-between lg:items-center">
            <Link href="/">
              <img src="/icons/logo 1.svg" alt="logo" />
            </Link>
            <div>
              <a href="tel:+79528278833" className="text-[20px] text-[#48b03a] hover:text-[#48b03a] xl:ml-[200px]">8-(952)-827-88-33</a>
            </div>
            <ul className="flex gap-[20px]">
              <li className="md:text-[22px] leading-5">
                <Link href="/for-mans">Для парней</Link>
              </li>
              <li className="md:text-[22px] leading-5">
                <Link href="/for-womans">Для девушек</Link>
              </li>
              <li className="md:text-[22px] leading-5">
                <Link href="/no-milk">Без глютена и молока</Link>
              </li>
            </ul>
          </nav>
          <div className="burger fixed left-0  w-full z-10 lg:hidden">
            <div onClick={() => setIsOpen(!isOpen)} className="absolute right-[20px] top-[20px] flex flex-col gap-[7px]">
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
        <Content className="bg-white pl-[20px] pr-[20px] pb-[50px] xs:px-[5px]">
            <div className="mt-[60px] w-[560px] mx-auto xs:w-[370px] md:w-[450px]">
              <h1 className="text-center text-[50px] xs:text-[40px]">Изысканная еда как стиль жизни</h1>
              <h2 className="mt-[10px] text-center text-[24px] opacity-[0.7]">Готовое полезное питание с доставкой. Освободите время для важных дел.</h2>
            </div>
            <Category/>
            <Company/>
        </Content>
        <Footer className="bg-white border-t-[1px] flex justify-between xs:flex-col-reverse xs:gap-[20px] lg:flex-row">
          <Link href="/" className="xs:mx-auto lg:mx-0">
            <img src="/icons/logo 1.svg" alt="logo" />
          </Link>
          <div>
            <div className="flex justify-between lg:justify-end lg:gap-[25px]">
              <ul className="flex flex-col gap-[20px]">
                <li className="text-[22px]">
                  <Link href="/for-mans">Для парней</Link>
                </li>
                <li className="text-[22px]">
                  <Link href="/for-womans">Для девушек</Link>
                </li>
                <li className="text-[22px]">
                  <Link href="/no-milk">Без глютена и молока</Link>
                </li>
              </ul>
              <ul className="flex flex-col gap-[5px]">
                <a target="_blank" href="https://t.me/insight_food_sochi">
                  <img src=" /icons/телеграмма.svg" alt="telegram" />
                </a>
                <a target="_blank" href="https://www.instagram.com/insighte.food">
                  <img src="/icons/instagram.svg" alt="instagram" />
                </a>
                <a target="_blank" href="https://wa.me/79528278833">
                  <img src="/icons/whatsapp.svg" alt="whatsapp" />
                </a>
              </ul>
            </div>
            <p className="text-[#5c5c5c] w-[300px] mt-[20px] xs:w-full lg:w-[280px]">
              *Суд признал экстремистской и запретил в России
              деятельность корпорации Meta по реализации социальных сетей
            </p>
          </div>
        </Footer>
      </Layout>
    </Flex>
  );
}
