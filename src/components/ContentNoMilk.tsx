import { onSumbitOrder } from "@/utils/onSumbitOrder";
import { Button, ConfigProvider, Flex, Modal, Segmented, Input, message } from "antd"
import { useState, useEffect } from "react"

interface ContentNoMilkProps {
    text: string;
    subtext: string;
    segmented: string[];
    data: any; // Замените any на более конкретный тип, если знаете
}

const ContentNoMilk: React.FC<ContentNoMilkProps> = ({text, subtext, segmented, data}) => {
    const [activeButton, setActiveButton] = useState(14)
    const [segmentedValue, setSegmentedValue] = useState(segmented[0]);
    
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("+7");
    const [err, setErr] = useState(false);

    const [messageApi, contextHolder] = message.useMessage()    

    useEffect(() => {
        if(name && name !== ""){
            setErr(false)
        }
        if(phone.slice(2) && phone.slice(2) !== ""){
            setErr(false)
        }
        if(!isModalOpen){
            setErr(false)
        }
    }, [name, phone, isModalOpen])

    const getPhone = (event: any) => {

        const inputValue = event.target.value;

        const reg = /^\d*$/

        if(inputValue.startsWith("+7")){
            
            if (reg.test(inputValue.slice(2))) {
                setPhone(inputValue);
                
            } else{
                setErr(true)
            }
        }
    }  
    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleOk = (event: any) => {
        // onSumbitOrder(event, name, phone, segmentedValue ,activeButton, setName, setPhone, "Без глютена и молока", messageApi);    
        // setIsModalOpen(false);


        let hasError = false;

        // Проверяем каждое поле
        if (!name) {
            setErr(true);
            hasError = true;
        } else if (err) {
            setErr(false); // Сбрасываем ошибку, если имя введено
        }
    
        if (!phone.slice(2)) {
            setErr(true);
            hasError = true;
        } else if (err) {
            setErr(false); // Сбрасываем ошибку, если телефон введен
        }
    
        // Если ошибок нет, вызываем функцию отправки сообщения
        if (!hasError) {
            onSumbitOrder(event, name, phone, segmentedValue ,activeButton, setName, setPhone, "Девушка", messageApi);    
            setIsModalOpen(false);
        }
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
        setName("");
        setPhone("+7");
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
                        },
                        Input: {
                            activeBorderColor: "#48b03a",
                            hoverBorderColor: "#48b03a"
                        }
                    },
                }}
            >
                <Flex vertical={false} className="xs:flex xs:flex-col lg:flex-row">
                    <div className="p-[30px] bg-[#f9f9f9] border-solid border-[1px] border-[#e6e6e6] flex-1">
                        <h1 className="text-[20px] font-medium">выберите калорийность:</h1>
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
                        <h1 className="text-[20px] font-medium md:text-center">примерное меню</h1>
                        {
                            data.map((item: any, i: number) => {
                                if (item.calories === segmentedValue){
                                    return (
                                        <div key={i} className="mt-[20px] h-[400px] flex justify-center">
                                            <img src={item.img} alt="eats" className="h-[100%] object-cover xs:h-[54%] md:h-[70%]"/>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <div className="p-[30px] bg-[#f9f9f9] border-solid border-[1px] border-[#e6e6e6] flex-1">
                        <h1 className="text-[20px] font-medium md:text-center">выберите продолжительность</h1>
                        {
                            data.map((item: any, i: number) => {
                                if (item.calories === segmentedValue){
                                    return (
                                        <div key={i} className="mt-[20px] md:flex md:flex-col md:items-center">
                                            <div className="flex gap-[20px] md:mx-auto md:justify-center md:w-[400px] flex-wrap xs:w-[315px] lg:w-[283px]">
                                                <div onClick={() => setActiveButton(1)} className={activeButton === 1 ? "flex flex-col cursor-pointer shadow-md bg-[#48b03a] text-[#fff] lg:w-[131px] md:w-[140px] p-[10px] xs:w-[125px]" : "flex flex-col cursor-pointer shadow-md bg-[#fff] lg:w-[131px] md:w-[140px] p-[10px] xs:w-[125px]"}>
                                                    <p className="font-bold">1 день</p>
                                                    <p>{item.price.one.day} ₽ / день</p>
                                                </div>
                                                <div onClick={() => setActiveButton(7)} className={activeButton === 7 ? "flex flex-col cursor-pointer shadow-md bg-[#48b03a] text-[#fff] lg:w-[131px] md:w-[140px] p-[10px] xs:w-[125px]" : "flex flex-col cursor-pointer shadow-md bg-[#fff] lg:w-[131px] md:w-[140px] p-[10px] xs:w-[125px]"}>
                                                    <p className="font-bold">7 дней</p>
                                                    <p>{item.price.seven.day} ₽ / день</p>
                                                </div>
                                                <div onClick={() => setActiveButton(14)} className={activeButton === 14 ? "flex flex-col cursor-pointer shadow-md bg-[#48b03a] text-[#fff] lg:w-[131px] md:w-[140px] p-[10px] xs:w-[125px]" : "flex flex-col cursor-pointer shadow-md bg-[#fff] lg:w-[131px] md:w-[140px] p-[10px] xs:w-[125px]"}>
                                                    <p className="font-bold">14 дней</p>
                                                    <p>{item.price.fourteen.day} ₽ / день</p>
                                                </div>
                                                <div onClick={() => setActiveButton(30)} className={activeButton === 30 ? "flex flex-col cursor-pointer shadow-md bg-[#48b03a] text-[#fff] lg:w-[131px] md:w-[140px] p-[10px] xs:w-[125px]" : "flex flex-col cursor-pointer shadow-md bg-[#fff] lg:w-[131px] md:w-[140px] p-[10px] xs:w-[125px]"}>
                                                    <p className="font-bold">30 дней</p>
                                                    <p>{item.price.thirty.day} ₽ / день</p>
                                                </div>
                                            </div>
                                            <Button className="mt-[40px] p-[20px]" onClick={showModal}>
                                                {
                                                    activeButton === 1 ? `Заказать ${activeButton} день за ${item.price.one.total} рублей`:
                                                    activeButton === 7 ? `Заказать ${activeButton} день за ${item.price.seven.total} рублей`:
                                                    activeButton === 14 ? `Заказать ${activeButton} день за ${item.price.fourteen.total} рублей`:
                                                    activeButton === 30 ? `Заказать ${activeButton} день за ${item.price.thirty.total} рублей`:
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
                <Input status={err && !name ? "error" : ""} placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)}/>
                <p className="mt-[5px]">Номер телефона</p>
                <Input status={err && !phone.slice(2) ? "error" : ""} placeholder="Ваш номер телефона" value={phone} maxLength={12} onChange={(e) => getPhone(e)}/>

            </Modal>
            {contextHolder}
        </>
    )
}

export default ContentNoMilk