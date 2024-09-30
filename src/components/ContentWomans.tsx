
import { onSumbitOrder } from "@/utils/onSumbitOrder";
import { Button, ConfigProvider, Flex, Modal, Segmented, Input } from "antd"
import { useState } from "react"


const ContentWomans: React.FC = ({text, subtext, segmented, data}) => {
    const [activeButton, setActiveButton] = useState(1)
    const [segmentedValue, setSegmentedValue] = useState(segmented[0]);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const getPhone = (event: any) => {
        const inputValue = event.target.value;

        const reg = /^-?\d*(\.\d*)?$/;
        if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
          setPhone(inputValue);
        }
    }  
    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleOk = (event: any) => {
        onSumbitOrder(event, name, phone, segmentedValue ,activeButton, setName, setPhone, "Девушка");    
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
        setName("");
        setPhone("");
      };

    return (
        <>
            <ConfigProvider
                theme={{
                    components: {
                        Segmented: {
                            itemSelectedBg: "#48b03a",
                            itemSelectedColor: "#fff",
                        },
                        Button: {
                            colorBgContainer: "#48b03a",
                            colorText: "#fff",
                            colorPrimaryActive: "#fff",
                            colorPrimaryHover: "#fff",
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
                        {
                            data.map((item: any, i: number) => {
                                if (item.calories === segmentedValue){
                                    return (
                                        <div key={i} className="mt-[20px] h-[400px] flex justify-center">
                                            <img src={item.img} alt="eats" className="h-[100%]"/>
                                        </div>
                                    )
                                }
                            })
                        }
                        
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
                                        <div key={i} className="mt-[20px]">
                                            <div className="flex  gap-[20px] w-[400px] flex-wrap">
                                                <div onClick={() => setActiveButton(1)} className={activeButton === 1 ? "flex flex-col cursor-pointer shadow-md bg-[#48b03a] text-[#fff] w-[140px] p-[10px]" : "flex flex-col cursor-pointer shadow-md bg-[#fff] w-[140px] p-[10px]"}>
                                                    <p className="font-bold">1 день</p>
                                                    <p>{item.price.one} / день</p>
                                                </div>
                                                <div onClick={() => setActiveButton(7)} className={activeButton === 7 ? "flex flex-col cursor-pointer shadow-md bg-[#48b03a] text-[#fff] w-[140px] p-[10px]" : "flex flex-col cursor-pointer shadow-md bg-[#fff] w-[140px] p-[10px]"}>
                                                    <p className="font-bold">7 дней</p>
                                                    <p>{item.price.seven} / день</p>
                                                </div>
                                                <div onClick={() => setActiveButton(14)} className={activeButton === 14 ? "flex flex-col cursor-pointer shadow-md bg-[#48b03a] text-[#fff] w-[140px] p-[10px]" : "flex flex-col cursor-pointer shadow-md bg-[#fff] w-[140px] p-[10px]"}>
                                                    <p className="font-bold">14 дней</p>
                                                    <p>{item.price.fourteen} / день</p>
                                                </div>
                                                <div onClick={() => setActiveButton(30)} className={activeButton === 30 ? "flex flex-col cursor-pointer shadow-md bg-[#48b03a] text-[#fff] w-[140px] p-[10px]" : "flex flex-col cursor-pointer shadow-md bg-[#fff] w-[140px] p-[10px]"}>
                                                    <p className="font-bold">30 дней</p>
                                                    <p>{item.price.thirty} / день</p>
                                                </div>
                                            </div>
                                            <Button className="mt-[40px] p-[20px]" onClick={showModal}>
                                                {
                                                    activeButton === 1 ? `Заказать ${activeButton} день за ${item.price.one} рублей`:
                                                    activeButton === 7 ? `Заказать ${activeButton} день за ${item.price.seven} рублей`:
                                                    activeButton === 14 ? `Заказать ${activeButton} день за ${item.price.fourteen} рублей`:
                                                    activeButton === 30 ? `Заказать ${activeButton} день за ${item.price.thirty} рублей`:
                                                    null
                                                }
                                            </Button>
                                        </div>
                                    )
                                }
                                
                            })
                        }
                    </div>
                </Flex>
                
            </ConfigProvider>

            <Modal title="Сделать заказ" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                            
            <p className="mt-[5px]">Как Вас зовут?</p>
            <Input placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)}/>
            <p className="mt-[5px]">Номер телефона</p>
            <Input placeholder="Ваш номер телефона" value={phone} maxLength={11} onChange={(e) => getPhone(e)}/>

            </Modal>
        </>
    )
}

export default ContentWomans