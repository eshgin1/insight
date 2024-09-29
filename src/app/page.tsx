"use client"

import { Layout, Flex } from "antd";
import Link from "next/link";
import Category from "@/components/Category";
import Company from "@/components/Company";

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  return (
    <Flex gap="middle" wrap>
      <Layout >
        <Header className=" h-[80px] bg-white flex justify-between border-b-[1px]">
          <Link href="/">
            <img src="/icons/logo 1.svg" alt="logo" />
          </Link>
          <div>
            <a href="tel:+79528278833" className="text-[20px] text-[#48b03a] hover:text-[#48b03a]">8-(952)-827-88-33</a>
          </div>
          <ul className="flex gap-[20px]">
            <li>
              <Link href="/for-mans">Для парней</Link>
            </li>
            <li>
              <Link href="/for-women">Для девушек</Link>
            </li>
            <li>
              <Link href="/no-milk">Без глютена и молока</Link>
            </li>
          </ul>
        </Header>
        <Content className="bg-white pl-[30px] pr-[30px] pb-[50px]">
            <div className="mt-[60px] w-[560px] mx-auto">
              <h1 className="text-center text-[50px]">Изысканная еда как стиль жизни</h1>
              <h2 className="mt-[10px] text-center text-[24px] opacity-[0.7]">Готовое полезное питание с доставкой. Освободите время для важных дел.</h2>
            </div>
            <Category/>
            <Company/>
        </Content>
        <Footer className="bg-white border-t-[1px] flex justify-between">
          <Link href="/">
            <img src="/icons/logo 1.svg" alt="logo" />
          </Link>
          <div>
            <div className="flex justify-between">
              <ul className="flex flex-col gap-[20px]">
                <li>
                  <Link href="/for-mans">Для парней</Link>
                </li>
                <li>
                  <Link href="/for-women">Для девушек</Link>
                </li>
                <li>
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
            <p className="text-[#5c5c5c] w-[300px] mt-[20px]">
              *Суд признал экстремистской и запретил в России
              деятельность корпорации Meta по реализации социальных сетей
            </p>
          </div>
        </Footer>
      </Layout>
    </Flex>
  );
}
