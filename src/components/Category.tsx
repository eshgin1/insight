"use client"
import { Card } from "antd"
import Link from "next/link"

const { Meta } = Card


const Category: React.FC = () => {
    return (
        <div className="mt-[50px] flex justify-between">
            <Link href="/for-womans">
                <Card
                    className="hover:scale-[1.01] transition-transform duration-300" 
                    hoverable
                    style={{ width: 400, transform: "transition: all 0.3s" }}
                    cover={<img alt="example" className="h-[500px] object-cover" src="/img/woman.PNG"/>}
                >
                    <Meta title="Для девушек" />
                    <div className="mt-[10px]">
                        Полезное питание из изысканных ингредиентов для спорта и здоровой жизни
                    </div>
                </Card>
            </Link>
            <Link href="/for-mans">
                <Card
                    className="hover:scale-[1.01] transition-transform duration-300" 
                    hoverable
                    style={{ width: 400 }}
                    cover={<img alt="example" className="h-[500px] object-cover" src="/img/man.JPG" />}
                >
                    <Meta title="Для парней" />
                    <div className="mt-[10px]">
                        Здоровое питание для людей, требующих особого подхода
                    </div>
                </Card>
            </Link>
            <Link href="/no-milk">
                <Card
                    className="hover:scale-[1.01] transition-transform duration-300" 
                    hoverable
                    style={{ width: 400 }}
                    cover={<img alt="example" src="/img/nomilk.JPG" />}
                >
                    <Meta title="Без глютена и молока" />
                    <div className="mt-[10px] text-[#2b2b2b">
                        Индивидуальное меню с полным сопровождением диетолога
                    </div>
                </Card>
            </Link>
        </div>
    )
}
export default Category