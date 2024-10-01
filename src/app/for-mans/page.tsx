"use client"

import ContentMans from "@/components/ContentMans";
import Bottom from "@/components/Bottom";
import Top from "@/components/Top";
import { Layout, Flex, Tabs, ConfigProvider } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const programmArr = [
    {
        programm: "Cнижение",
        text: "Похудение еще никогда не было таким приятным и эффективным.",
        subtext: "Снижение веса пройдет так плавно, что вы не будете испытывать голод и почувствуете себя комфортно. За месяц вы сможете сбросить до 7 кг.",
        segmented: ["1100-1200", "1400-1500", "1600-1700"],
        data: [
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
    {
        programm: "Поддержание",
        text: "Программа предназначена для тех, кто достиг желаемых результатов и хочет сохраниь их на долгий срок.",
        subtext: "Стабилизицая веса и поддержание физической формы без жестких ограничений. Если вы хотите наслаждаться жизнью, не беспокоясь о возыравте к прежним привычкам , - это идеальный выбор для устойчивого результата.",
        segmented: ["1800-1900", "2000-1200"],
        data: [
            {
                calories: "1800-1900",
                price: {
                    one: "2 200",
                    seven: "15 050",
                    fourteen: "29 400",
                    thirty: "60 000"
                },
                bju: {
                    protein: 130,
                    fats: 80,
                    car: 145
                },
                img: '/img/1800-2200.png'
            },
            {
                calories: "2000-2200",
                price: {
                    one: "2 400",
                    seven: "16 450",
                    fourteen: "32 200",
                    thirty: "66 000"
                },
                bju: {
                    protein: 150,
                    fats: 90,
                    car: 170
                },
                img: '/img/1800-2200.png'
            },
        ]
    },
    {
        programm: "Набор",
        text: "Программа предназначена для тех, кто достиг желаемых результатов и хочет сохраниь их на долгий срок.",
        subtext: "Стабилизицая веса и поддержание физической формы без жестких ограничений. Если вы хотите наслаждаться жизнью, не беспокоясь о возыравте к прежним привычкам , - это идеальный выбор для устойчивого результата.",
        segmented: ["2000-2200", "2400-2500"],
        data: [
            {
                calories: "2000-2200",
                price: {
                    one: "2 400",
                    seven: "16 450",
                    fourteen: "32 200",
                    thirty: "66 000"
                },
                bju: {
                    protein: 150,
                    fats: 90,
                    car: 170
                },
                img: '/img/1800-2200.png'
            },
            {
                calories: "2400-2500",
                price: {
                    one: "2 400",
                    seven: "16 450",
                    fourteen: "32 200",
                    thirty: "66 000"
                },
                bju: {
                    protein: 150,
                    fats: 90,
                    car: 170
                },
                img: '/img/1800-2200.png'
            },
        ]
    },
]

export default function ForWomans() {
    return (
        <Layout >
            <Top/>
            <Content className="bg-white pl-[30px] pr-[30px] pb-[50px]">
                <div className="mt-[30px]">
                    <h1 className="text-[35px]">Программа для парней</h1>
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
                                    children: <ContentMans 
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
            <Bottom/>
        </Layout>
    )
}