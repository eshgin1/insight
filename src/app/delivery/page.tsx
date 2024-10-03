import Bottom from "@/components/Bottom";
import Top from "@/components/Top";
import { Layout, Card } from "antd";

export default function Page (){
    return(
        <Layout className="bg-[#fff]">
            <Top/>
            <div className="p-[30px]">
                <h1 className="text-[35px] xs:text-center lg:text-left">Доставка</h1>
                <div className="mt-[30px] p-[30px] bg-[#f9f9f9] flex gap-[30px] justify-between xs:flex  xs:flex-col-reverse md:flex-row">
                    <div className="flex flex-col gap-[20px]">
                        <Card title="Дни доставки" bordered={false} className="xs:w-[100%] md:w-[300px]">
                            <p className="text-[14px] font-[300]">Все рационы питания <span className="font-[400]">INSIGHT-FOOD</span> доставляются ежедневно. Это позволяет нам обеспечить для Вас всегда свежие продукты в рационе.</p>
                        </Card>
                        <Card title="Время доставки" bordered={false} className="xs:w-[100%] md:w-[300px]">
                            <p className="text-[14px] font-[300]">C <span className="font-[500]">18:00</span> до <span className="font-[500]">22:00</span> наши курьеры с заботой привезут ваши заказы прямо к двери, чтобы вы могли наслаждаться любимыми блюдами в удобном Вам месте</p>
                        </Card>
                    </div>
                    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A7ba1556459b0279164f5031256c03bb4ac5b65ceb750b9c1ddd25c8332a26553&amp;source=constructor" width="70%" height="400" className="xs:w-[100%]"></iframe>
                </div>
            </div>
            <Bottom/>
        </Layout>
    )
}