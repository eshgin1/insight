"use client"

import { Layout, Flex} from "antd";
import Category from "@/components/Category";
import Company from "@/components/Company";
import Top from "@/components/Top";
import Bottom from "@/components/Bottom";
import Description from "@/components/Description";
import ModalMain from "@/components/modal/ModalMain";
import { Provider } from 'react-redux';
import store from "@/redux";

const { Header, Footer, Sider, Content } = Layout;

export default function Home() {
    
  return (
    <Provider store={store}>
        <Flex gap="middle" wrap>
          <Layout >
            <Top/>
            <Content className="bg-white pl-[20px] pr-[20px] pb-[50px] xs:px-[5px]">
                <div className="mt-[60px] w-[560px] mx-auto xs:w-[370px] md:w-[450px]">
                  <h1 className="text-center text-[50px] xs:text-[40px] font-[300]">Изысканная еда как стиль жизни</h1>
                  <h2 className="mt-[10px] text-center text-[24px] opacity-[0.7] font-[300]">Готовое полезное питание с доставкой. Освободите время для важных дел.</h2>
                </div>
                <Category/>
                <Company/>
                <Description/>
            </Content>
            <Bottom/>
          </Layout>
          <ModalMain/>
        </Flex>
    </Provider>
  );
}
