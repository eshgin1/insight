"use client"
import { Button, ConfigProvider, Modal } from "antd"

const Company: React.FC = () => {
    return (
        <ConfigProvider
            theme={{
                components: {
                Button: {
                        defaultBg: "#48b03a",
                        defaultColor: "#fff",
                        defaultHoverBg: "#48b03a",
                        defaultHoverColor: "#fff",
                        defaultHoverBorderColor: "#f9f9f9"
                    },
                },
            }}
        >
            <div className="mt-[50px] flex justify-between items-center gap-[50px]">
                <div className="flex flex-col">
                    <div className=" w-[250px] h-[250px]">
                        <img src="/img/dir.JPG" className="w-[100%] h-[100%] rounded-[50%] object-cover" alt="Evgenia"/>
                    </div>
                    <h1 className="mt-[10px] text-[22px] text-[#000] font-bold text-center">Евгения Грушецкая</h1>
                    <h2 className="mt-[5px] text-[20px] text-[#000] text-center">Основатель компании</h2>
                </div>
                <div className="w-[700px]">
                    <p className="text-[20px]">
                        "Уже более 4 лет мы занимаемся приготовлением и доставкой рационов здорового питания в Сочи. 
                        Наша основная цель - развеять миф о том, что правильное питание - это невкусно и однообразно.
                        Мы сможем сэкономить Ваше время и силы, а Вы уделите больше внимания тому, что поистине для Вас важно"
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-[24px] text-center font-bold ">У Вас есть вопрос или Вы хотите получить консультацию?</h2>
                    <Button className="p-[20px] mt-[20px] hover:opacity-[0.95]">Отправить заявку на консультацию</Button>
                </div>
            </div>
            <Modal>
                
            </Modal>
        </ConfigProvider>
        
    )
}

export default Company