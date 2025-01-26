"use client"

import ContentWomans from "@/components/ContentWomans";
import Bottom from "@/components/Bottom";
import Top from "@/components/Top";
import { Layout, Flex, Tabs, ConfigProvider } from "antd";

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
                    one: {day: "1 600", total: "1 600"},
                    seven: {day: "1 500", total: "10 500"},
                    fourteen: {day: "1 450", total: "20 300"},
                    thirty: {day: "1 350", total: "40 500"}
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
                    one: {day: "1 800", total: "1 800"},
                    seven: {day: "1 700", total: "12 250"},
                    fourteen: {day: "1 700", total: "23 800"},
                    thirty: {day: "1 600", total: "48 000"}
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
                    one: {day: "2 000", total: "2 000"},
                    seven: {day: "1 950", total: "13 650"},
                    fourteen: {day: "1 900", total: "26 600"},
                    thirty: {day: "1 800", total: "54 000"}
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
                    one: {day: "2 000", total: "2 000"},
                    seven: {day: "1 950", total: "13 650"},
                    fourteen: {day: "1 900", total: "26 600"},
                    thirty: {day: "1 800", total: "54 000"}
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
                    one: {day: "2 100", total: "2 100"},
                    seven: {day: "2 050", total: "14 350"},
                    fourteen: {day: "2 000", total: "28 000"},
                    thirty: {day: "1 900", total: "57 000"}
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
            <Top/>
            <Content className="bg-white pl-[30px] pr-[30px] pb-[50px]">
                <div className="mt-[30px]">
                    <h1 className="text-[35px]">Программа для девушек</h1>
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
            <Bottom/>
        </Layout>
    )
}