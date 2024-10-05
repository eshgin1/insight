"use client"
import { useEffect, useState } from "react"
import { Button, ConfigProvider, Input, Modal, message } from "antd"
import { onSumbitMessage } from "@/utils/onSumbitMessage";

const Company: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("+7");
    const [messageText, setMessageText] = useState("");
    const [err, setErr] = useState(false)

    const [messageApi, contextHolder] = message.useMessage()    


    // useEffect(() => {
        // setTimeout(() => {
        //     setErr(false)
        // }, 1000)
    // },[err])

    useEffect(() => {
        if(name && name !== ""){
            setErr(false)
        }
        if(phone.slice(2) && phone.slice(2) !== ""){
            setErr(false)
        }
        if(messageText && messageText !== ""){
            setErr(false)
        }
        if(!isModalOpen){
            setErr(false)
        }
    }, [name, phone, messageText, isModalOpen])
    
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
        
        // if(name && phone.slice(2) && messageText){
        //     onSumbitMessage(event, name, phone, messageText, setName, setMessageText, setPhone, messageApi);    
        //     setIsModalOpen(false);
        // }else{

        // }
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
    
        if (!messageText) {
            setErr(true);
            hasError = true;
        } else if (err) {
            setErr(false); // Сбрасываем ошибку, если сообщение введено
        }
    
        // Если ошибок нет, вызываем функцию отправки сообщения
        if (!hasError) {
            onSumbitMessage(event, name, phone, messageText, setName, setMessageText, setPhone, messageApi);    
            setIsModalOpen(false);
        }
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
      setName("");
      setPhone("+7");
      setMessageText("");
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
                    Input: {
                        activeBorderColor: "#48b03a",
                        hoverBorderColor: "#48b03a"
                    }
                },
            }}
        >
            <div className="mt-[50px] flex justify-between items-center gap-[50px] xs:flex-col lg:flex-row lg:p-[20px] lg:flex-wrap lg:gap-[20px] xl:flex-nowrap xl:p-[30px]">
                <div className="flex flex-col">
                    <div className="w-[250px] h-[250px]">
                        <img src="/img/dir.JPG" className="w-[100%] h-[100%] rounded-[50%] object-cover" alt="Evgenia"/>
                    </div>
                    <h1 className="mt-[10px] text-[22px] text-[#000] font-bold text-center">Евгения Грушецкая</h1>
                    <h2 className="mt-[5px] text-[20px] text-[#000] text-center font-[300]">Основатель компании</h2>
                </div>
                <div className="w-[700px] xs:w-[350px] lg:w-[700px] xl:w-[500px] xl:ml-[40px] 2xl:w-[700px]">
                    <p className="text-[20px] text-center xl:text-start font-[300]">
                        "Уже более 4 лет мы занимаемся приготовлением и доставкой рационов здорового питания в Сочи. 
                        Наша основная цель - развеять миф о том, что правильное питание - это невкусно и однообразно.
                        Мы сможем сэкономить Ваше время и силы, а Вы уделите больше внимания тому, что поистине для Вас важно"
                    </p>
                </div>
                <div className="flex flex-col justify-center items-center lg:mt-[-100px] lg:mr-0 lg:ml-[auto] xl:mt-0 xl:w-[350px]">
                    <h2 className="text-[24px] text-center font-bold ">У Вас есть вопрос или Вы хотите получить консультацию?</h2>
                    <Button className="p-[20px] mt-[20px] hover:opacity-[0.95]" onClick={showModal}>Отправить заявку на консультацию</Button>
                </div>
            </div>
            <Modal title="Оставьте заявку" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p className="mt-[5px]">Как Вас зовут?</p>
                <Input status={err && !name ? "error" : ""} placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)}/>
                <p className="mt-[5px]">Номер телефона</p>
                <Input status={err && !phone.slice(2) ? "error" : ""} value={phone} maxLength={12} onChange={(e) => getPhone(e)}/>
                {/* {
                    err ? (<p className="text-[red] transition-all duration-100">номер телефона должен состоять только из цифр</p>) : null
                } */}
                <p className="mt-[5px]">Какой у Вас вопрос?</p>
                <Input.TextArea status={err && !messageText ? "error" : ""} placeholder="Ваш вопрос" value={messageText} onChange={(e) => setMessageText(e.target.value)}/>
            </Modal>
            {contextHolder}
        </ConfigProvider>
    )
}

export default Company