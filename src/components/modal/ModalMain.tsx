import { useEffect, useState } from "react";
import ModalCallBack from "./ModalCallBack";
import ModalCompany from "./ModalCompany";
import { MODAL_CALL_BACK, MODAL_COMPANY } from "@/config/modalTypes";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/redux/slices/modalSlices";
import { message } from "antd";

const ModalMain: React.FC = () => {
    const dispatch = useDispatch()
    const modalType = useSelector((state:any) => state.modal.modalTypes)
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [messageApi, contextHolder] = message.useMessage() 

    // useEffect(() => {
    //   dispatch(openModal(MODAL_CALL_BACK))
    // }, [])

    // useEffect(() => {
    //   if(modalType){
    //     messageApi.open({
    //       type: 'success',
    //       content: 'ok'
    //     })
    //   }
    // }, [])
    return(
        <>
            {modalType === MODAL_CALL_BACK && (<ModalCallBack isModalOpen={isModalOpen} messageApi={messageApi}/>)}
            {modalType === MODAL_COMPANY && (<ModalCompany isModalOpen={isModalOpen} messageApi={messageApi}/>)}
            {contextHolder}
        </>
    )
}

export default ModalMain