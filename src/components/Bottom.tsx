"use client"

import Link from "next/link";
import { Layout } from "antd";

const {Footer} = Layout
const Bottom: React.FC = () => {
    return(
        <Footer className="bg-white border-t-[1px] flex justify-between xs:flex-col-reverse xs:gap-[20px] lg:flex-row">
            <Link href="/" className="xs:mx-auto lg:mx-0">
                <img src="/icons/logo 1.svg" alt="logo" />
            </Link>
            <div>
                <div className="flex justify-between lg:justify-end lg:gap-[25px]">
                    <ul className="flex flex-col gap-[20px]">
                        <li className="text-[20px] xs:leading-7 sm:leading-3 font-[300] ">
                            <Link href="/for-mans" className="hover:text-[#48b03a] duration-0">Для парней</Link>
                        </li>
                        <li className="text-[20px] xs:leading-7 sm:leading-3 font-[300]">
                            <Link href="/for-womans" className="hover:text-[#48b03a] duration-0">Для девушек</Link>
                        </li>
                        <li className="text-[20px] xs:leading-7 sm:leading-3 font-[300]">
                            <Link href="/no-milk" className="hover:text-[#48b03a] duration-0">Без глютена и молока</Link>
                        </li>
                        
                    </ul>
                    <ul className="flex flex-col gap-[20px]">
                        <li className="text-[20px] xs:leading-7 sm:leading-3 font-[300]">
                            <Link href="/delivery" className="hover:text-[#48b03a] duration-0">Доставка и оплата</Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-[5px]">
                        <a target="_blank" href="https://t.me/insight_food_sochi">
                            <img src=" /icons/телеграмма.svg" alt="telegram" />
                        </a>
                        <a target="_blank" href="https://www.instagram.com/insighte.food">
                            <img src="/icons/instagram.svg" alt="instagram" />
                        </a>
                        <a target="_blank" href="https://wa.me/79528278833">
                            <img src="/icons/whatsapp.svg" alt="whatsapp" />
                        </a>
                    </ul>
                </div>
                <p className="text-[#5c5c5c] w-[300px] mt-[20px] xs:w-full lg:w-[280px]">
                    *Суд признал экстремистской и запретил в России
                    деятельность корпорации Meta по реализации социальных сетей
                </p>
            </div>
        </Footer>
    )
}

export default Bottom;