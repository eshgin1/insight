import React, { useState, useEffect } from "react";
import { Modal, Input, message } from "antd"
import { onSumbitMessage } from "@/utils/onSumbitMessage";
import { closeModal } from "@/redux/slices/modalSlices";
import { useDispatch } from "react-redux";

interface ModalCompanyProps {
    isModalOpen: boolean,
    messageApi: any
}

const ModalCompany: React.FC<ModalCompanyProps> = ({isModalOpen, messageApi}) => {
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("+7");
    const [messageText, setMessageText] = useState("");
    const [err, setErr] = useState(false)

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

    const handleOk = (event: any) => {

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
    };

    const handleCancel = () => {
        dispatch(closeModal())
        setName("");
        setPhone("+7");
        setMessageText("");
      };

    return(
        <>
            <Modal title="Оставьте заявку" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p className="mt-[5px]">Как Вас зовут?</p>
                <Input status={err && !name ? "error" : ""} placeholder="Ваше имя" value={name} onChange={(e) => setName(e.target.value)}/>
                <p className="mt-[5px]">Номер телефона</p>
                <Input status={err && !phone.slice(2) ? "error" : ""} value={phone} maxLength={12} onChange={(e) => getPhone(e)}/>
                <p className="mt-[5px]">Какой у Вас вопрос?</p>
                <Input.TextArea status={err && !messageText ? "error" : ""} placeholder="Ваш вопрос" value={messageText} onChange={(e) => setMessageText(e.target.value)}/>
            </Modal> 
        </>
    )
}

export default ModalCompany;