"use client"

import { Layout, Flex } from "antd";
import Link from "next/link";
import Category from "@/components/Category";
import Company from "@/components/Company";
import { useState } from "react";
import Top from "@/components/Top";
import Bottom from "@/components/Bottom";

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Flex gap="middle" wrap>
      <Layout >
        <Top/>
        <Content className="bg-white pl-[20px] pr-[20px] pb-[50px] xs:px-[5px]">
            <div className="mt-[60px] w-[560px] mx-auto xs:w-[370px] md:w-[450px]">
              <h1 className="text-center text-[50px] xs:text-[40px]">Изысканная еда как стиль жизни</h1>
              <h2 className="mt-[10px] text-center text-[24px] opacity-[0.7]">Готовое полезное питание с доставкой. Освободите время для важных дел.</h2>
            </div>
            <Category/>
            <Company/>
        </Content>
        <Bottom/>
      </Layout>
    </Flex>
  );
}
