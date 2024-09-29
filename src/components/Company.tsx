"use client"
import { useEffect, useState } from "react"
import { Button, ConfigProvider, Input, Modal } from "antd"
import { on } from "events";
import { onSumbitMessage } from "@/utils/onSumbitMessage";

const Company: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

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
      onSumbitMessage(event, name, phone, message, setName, setMessage, setPhone);    
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
      setName("");
      setPhone("");
      setMessage("");
    };

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
                    <Button className="p-[20px] mt-[20px] hover:opacity-[0.95]" onClick={showModal}>Отправить заявку на консультацию</Button>
                </div>
            </div>
            <Modal title="Оставьте заявку" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p className="mt-[5px]">Как Вас зовут?</p>
                <Input placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)}/>
                <p className="mt-[5px]">Номер телефона</p>
                <Input placeholder="Ваш номер телефона" value={phone} maxLength={11} onChange={(e) => getPhone(e)}/>
                <p className="mt-[5px]">Какой у Вас вопрос?</p>
                <Input.TextArea placeholder="Ваш вопрос" value={message} onChange={(e) => setMessage(e.target.value)}/>
            </Modal>
        </ConfigProvider>
        
    )
}

export default Company