
import { ConfigProvider, Flex, Segmented } from "antd"
const ContentWomans: React.FC = ({text, subtext, segmented}) => {
    
    return (
        <ConfigProvider
            theme={{
                components: {
                    Segmented: {
                        itemSelectedBg: "#48b03a",
                        itemSelectedColor: "#fff",
                    },
                    Button: {
                        
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
                            console.log(value); // string
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
                    <div>
                        <img src="" alt="eats" />
                    </div>
                    <div>
                        <h3>в среднем за день</h3>
                        <div>
                            <div>
                                <p>Белки</p>
                                <p></p>
                            </div>
                            <div>
                                <p>Жиры</p>
                                <p></p>
                            </div>
                            <div>
                                <p>Углеводы</p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-[30px] bg-[#f9f9f9] border-solid border-[1px] border-[#e6e6e6] flex-1">
                    <h1 className="text-[20px] font-medium">выберите продолжительность</h1>

                </div>
            </Flex>
        </ConfigProvider>
    )
}

export default ContentWomans