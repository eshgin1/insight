"use client"

import ContentWomans from "@/components/ContentWomans";
import { Layout, Flex, Tabs, ConfigProvider } from "antd";
import Link from "next/link";

const { Header, Footer, Sider, Content } = Layout;

const programmArr = [
    {
        programm: "Cнижение",
        text: "Похудение еще никогда не было таким приятным и эффективным.",
        subtext: "Снижение веса пройдет так плавно, что вы не будете испытывать голод и почувствуете себя комфортно. За месяц вы сможете сбросить до 7 кг.",
        segmented: ["800-900", "1100-1200", "1400-1500"],
        data: [
            {
                calories: "800-900",
                price: {
                    one: "1 500",
                    seven: "9 800",
                    fourteen: "18 900",
                    thirty: "37 500"
                },
                bju: {
                    protein: 52,
                    fats: 32,
                    car: 70
                },
                img: '/img/800-900.png'
            },
            {
                calories: "1100-1200",
                price: {
                    one: "1 700",
                    seven: "11 550",
                    fourteen: "22 400",
                    thirty: "45 000"
                },
                bju: {
                    protein: 80,
                    fats: 55,
                    car: 85
                },
                img: '/img/1100-1200.png'
            },
            {
                calories: "1400-1500",
                price: {
                    one: "1 900",
                    seven: "12 950",
                    fourteen: "25 200",
                    thirty: "51 000"
                },
                bju: {
                    protein: 105,
                    fats: 60,
                    car: 100
                },
                img: '/img/1400-1500.png'
            },
        ]
    },
    {
        programm: "Поддержание",
        text: "Программа предназначена для тех, кто достиг желаемых результатов и хочет сохраниь их на долгий срок.",
        subtext: "Стабилизицая веса и поддержание физической формы без жестких ограничений. Если вы хотите наслаждаться жизнью, не беспокоясь о возыравте к прежним привычкам , - это идеальный выбор для устойчивого результата.",
        segmented: ["1400-1500", "1600-1700"],
        data: [
            {
                calories: "1400-1500",
                price: {
                    one: "1 900",
                    seven: "12 950",
                    fourteen: "25 200",
                    thirty: "51 000"
                },
                bju: {
                    protein: 105,
                    fats: 60,
                    car: 100
                },
                img: '/img/1400-1500.png'
            },
            {
                calories: "1600-1700",
                price: {
                    one: "2 000",
                    seven: "13 650",
                    fourteen: "26 600",
                    thirty: "54 000"
                },
                bju: {
                    protein: 120,
                    fats: 80,
                    car: 140
                },
                img: '/img/1600-1700.png'
            },
        ]
    },

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
                <div className="mt-[30px]">
                    <h1 className="text-[35px]">Программы для девушек</h1>
                    <ConfigProvider
                        theme={{
                            components: {
                            Tabs: {
                                itemSelectedColor: "#48b03a",
                                horizontalMargin: "0 0 0 0",
                            },
                            },
                        }}
                        >
                        <Tabs   
                            className="mt-[30px]"
                            defaultActiveKey="1"
                            type="card"
                            items={programmArr.map((item: any) => {
                                return {
                                    label: item.programm,
                                    key: item.programm,
                                    children: <ContentWomans 
                                        text={item.text} 
                                        subtext={item.subtext} 
                                        segmented={item.segmented}
                                        data={item.data}
                                        />,
                                }
                            })}
                        />
                    </ConfigProvider>
                    
                </div>
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