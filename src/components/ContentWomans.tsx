
import { Button, ConfigProvider, Flex, Segmented } from "antd"
import { useState } from "react"

const ContentWomans: React.FC = ({text, subtext, segmented, data}) => {
    console.log(data);
    
    const [segmentedValue, setSegmentedValue] = useState(segmented[0]);

    return (
        <ConfigProvider
            theme={{
                components: {
                    Segmented: {
                        itemSelectedBg: "#48b03a",
                        itemSelectedColor: "#fff",
                    },
                    Button: {
                        // colorPrimary: "#fff",
                        // colorPrimaryActive: "#48b03a",
                        // colorPrimaryHover: "#48b03a",
                        // colorPrimaryTextActive: "#fff",
                        // textTextColor: "#000",
                        // colorLinkHover: "$f9f9f9",
                        // fontSize: 16,
                        // borderRadius: 0,
                        // controlHeight: 70
                    }
                },
            }}
        >
            <Flex vertical={false} className="">
                <div className="p-[30px] bg-[#f9f9f9] border-solid border-[1px] border-[#e6e6e6] flex-1">
                    <h1 className="text-[20px] font-medium">выберите калорийность</h1>
                    <Segmented 
                        className="mt-[20px]"
                        options={segmented}
                        defaultValue={segmented[0]}
                        onChange={(value) => {
                            setSegmentedValue(value);
                        }}
                    />

                    <div className="mt-[20px]">
                        <h2 className="text-[18px] font-medium">О программе</h2>
                        <h3 className="mt-[10px]">{text}</h3>
                        <h4 className="text-[#989898] mt-[10px]">{subtext}</h4>
                    </div>
                </div>
                <div className="p-[30px] bg-[#f9f9f9] border-solid border-[1px] border-[#e6e6e6] flex-1">
                    <h1 className="text-[20px] font-medium">примерное меню</h1>
                    <div className="mt-[20px]">
                        <img src="" alt="eats" />
                    </div>
                    <div className="mt-[20px]">
                        <h3 className="text-[#adadad] text-[1rem]">В среднем за день</h3>
                        {
                            data.map((item: any, i: number) => {
                                if (item.calories === segmentedValue){
                                    return (
                                        <div key={i} className="flex gap-[20px]">
                                            <div className="mt-[10px] flex flex-col">
                                                <p className="text-[#adadad] text-[.75rem]">Белки</p>
                                                <p className="text-[.88313rem] ">{item.bju.protein}</p>
                                            </div>
                                            <div className="mt-[10px] flex flex-col">
                                                <p className="text-[#adadad] text-[.75rem]">Жиры</p>
                                                <p className="text-[.88313rem] ">{item.bju.fats}</p>
                                            </div>
                                            <div className="mt-[10px] flex flex-col">
                                                <p className="text-[#adadad] text-[.75rem]">Углеводы</p>
                                                <p className="text-[.88313rem] ">{item.bju.car}</p>
                                            </div>
                                        </div>
                                    )
                                }
                                
                            })
                        }
                        
                    </div>
                </div>
                <div className="p-[30px] bg-[#f9f9f9] border-solid border-[1px] border-[#e6e6e6] flex-1">
                    <h1 className="text-[20px] font-medium">выберите продолжительность</h1>
                    {
                        data.map((item: any, i: number) => {
                            if (item.calories === segmentedValue){
                                return (
                                    <div className="mt-[20px]">
                                        <div className="flex  gap-[20px] w-[400px] flex-wrap">
                                            <div className="flex flex-colcursor-pointershadow-mdbg-[#fff]w-[140px] p-[10px]">
                                                <p className="font-bold">1 день</p>
                                                <p>{item.price.one} / день</p>
                                            </div>
                                            <div className="flex flex-col cursor-pointer shadow-md bg-[#fff] w-[140px] p-[10px]">
                                                <p className="font-bold">7 дней</p>
                                                <p>{item.price.seven} / день</p>
                                            </div>
                                            <div className="flex flex-col cursor-pointer shadow-md bg-[#fff] w-[140px] p-[10px]">
                                                <p className="font-bold">14 дней</p>
                                                <p>{item.price.fourteen} / день</p>
                                            </div>
                                            <div className="flex flex-col cursor-pointer shadow-md bg-[#fff] w-[140px] p-[10px]">
                                                <p className="font-bold">30 дней</p>
                                                <p>{item.price.thirty} / день</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            
                        })
                    }
                </div>
            </Flex>
        </ConfigProvider>
    )
}

export default ContentWomans