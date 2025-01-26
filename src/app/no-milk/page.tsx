"use client"

import ContentMans from "@/components/ContentMans";
import Bottom from "@/components/Bottom";
import Top from "@/components/Top";
import { Layout, Flex, Tabs, ConfigProvider } from "antd";
import ContentNoMilk from "@/components/ContentNoMilk";

const { Header, Footer, Sider, Content } = Layout;

const programmArr = [
    {
        // programm: "Cнижение",
        text: "Похудение еще никогда не было таким приятным и эффективным.",
        subtext: "Снижение веса пройдет так плавно, что вы не будете испытывать голод и почувствуете себя комфортно. За месяц вы сможете сбросить до 7 кг.",
        segmented: ["1200-1400"],
        data: [
            {
                calories: "1200-1400",
                price: {
                    one: {day: "2 300", total: "2 300"},
                    seven: {day: "2 250", total: "15 750"},
                    fourteen: {day: "2 200", total: "30 800"},
                    thirty: {day: "2 100", total: "63 000"}
                },
                bju: {
                    protein: 80,
                    fats: 55,
                    car: 85
                },
                img: '/img/1200-1400.JPG'
            },
            
        ]
    },
    
]

export default function NoMilk() {
    return (
        <Layout >
            <Top/>
            <Content className="bg-white pl-[30px] pr-[30px] pb-[50px]">
                <div className="mt-[30px]">
                    <h1 className="text-[35px]">Без глютена и молока</h1>
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
                                    children: <ContentNoMilk 
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