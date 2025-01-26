import { MODAL_CALL_BACK } from "@/config/modalTypes";
import { closeModal, openModal } from "@/redux/slices/modalSlices";
import { onSumbitMessage } from "@/utils/onSumbitMessage";
import { Modal, Input, Button, ConfigProvider } from "antd"
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface ModalCallBackProps {
    isModalOpen: boolean,
    messageApi: any
}

const ModalCallBack: React.FC<ModalCallBackProps> = ({isModalOpen, messageApi}) => {
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("+7");
    const [messageText, setMessageText] = useState("");
    const [err, setErr] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            dispatch(openModal(MODAL_CALL_BACK))
        }, 5000)
    },[]) 

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

    const handleOk = () => {
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
            dispatch(closeModal())
        }
    } 
    const handleCancel = () => {
        dispatch(closeModal())
    }
    
    return (
        <ConfigProvider
            theme={{
                components: {
                    Input: {
                        activeBorderColor: 'none', 
                        hoverBorderColor: "none", 
                        activeShadow: 'none',
                        borderRadius: 0
                    },
                    Button: {
                        colorText: "#fff",
                        defaultHoverBg: 'rgba(72, 176, 58, 0.9)'
                    }
                },
                token: {
                    colorPrimaryActive: "none",
                    colorPrimaryHover: "none"
                }
            }}
        >
            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <h1 className="text-center text-[23px] font-bold text-[#48b03a]">Свяжитесь со мной</h1>
                <p className="text-center opacity-[0.7]">Если у Вас остались вопросы, оставьте свой контактный номер, персональный менеджер свяжется с вами в течение 10 минут</p>
                <Input 
                    status={err && !name ? "error" : ""} 
                    placeholder="Имя" value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    style={{border: 'none', borderBottom: '1px solid rgba(0,0,0,0.25)'}}
                    />
                <Input 
                    status={err && !phone.slice(2) ? "error" : ""} 
                    value={phone} 
                    maxLength={12} 
                    onChange={(e) => getPhone(e)}
                    style={{marginTop: '10px', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.25)'}}
                    />
                <div className="flex justify-end">
                    <Button className="bg-[#48b03a] mt-2">Отправить</Button>
                </div>
            </Modal> 
        </ConfigProvider>
    )
}

export default ModalCallBack