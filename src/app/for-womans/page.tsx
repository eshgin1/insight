"use client"

import { Layout, Flex, Tabs } from "antd";
import Link from "next/link";

const { Header, Footer, Sider, Content } = Layout;

const programmArr = [
    {
        programm: "Cнижение"
    },
    {
        programm: "Поддержание"
    },
    {
        programm: "Набор"
    }
]

export default function ForWomans() {
    return (
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
                <Link href="/for-womans">Для девушек</Link>
                </li>
                <li>
                <Link href="/no-milk">Без глютена и молока</Link>
                </li>
            </ul>
            </Header>
            <Content className="bg-white pl-[30px] pr-[30px] pb-[50px]">
                <Tabs   
                    defaultActiveKey="1"
                    type="card"
                    // items={new Array(3).fill(null).map((_, i) => {
                    // const id = String(i + 1);
                    //     return {
                    //         label: `Card Tab ${id}`,
                    //         key: id,
                    //         children: `Content of card tab ${id}`,
                    //     };
                    // })}
                    items={programmArr.map((item: any) => {
                        return {
                            label: item.programm,
                            key: item.programm,
                            children: `Content of ${item.programm}`,
                        }
                    })}
                />
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
                    <Link href="/for-womans">Для девушек</Link>
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
    )
}