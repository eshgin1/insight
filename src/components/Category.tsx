"use client"
import { Card } from "antd"
import Link from "next/link"

const { Meta } = Card


const Category: React.FC = () => {
    return (
        <div className="mt-[50px] flex justify-between xs:flex-col xs:justify-center xs:gap-[30px] xl:flex-row">
            <Link href="/for-womans" className="xs:mx-auto">
                <Card
                    className="hover:scale-[1.01] transition-transform duration-300 xs:w-[350px] md:w-[450px] xl:w-[330px] 2xl:w-[400px]" 
                    hoverable
                    style={{  transform: "transition: all 0.3s" }}
                    cover={<img alt="example" className="h-[500px]  object-cover xs:h-[400px] md:h-[500px] xl:h-[400px] 2xl:h-[450px]" src="/img/woman.PNG"/>}
                >
                    <Meta title="Для девушек" />
                    <div className="mt-[10px]">
                        Полезное питание из изысканных ингредиентов для спорта и здоровой жизни
                    </div>
                </Card>
            </Link>
            <Link href="/for-mans" className="xs:mx-auto">
                <Card
                    className="hover:scale-[1.01] transition-transform duration-300 xs:w-[350px] md:w-[450px] xl:w-[330px] 2xl:w-[400px]" 
                    hoverable
                    style={{ transform: "transition: all 0.3s" }}
                    cover={<img alt="example" className="h-[500px]  object-cover xs:h-[400px] md:h-[500px] xl:h-[400px] 2xl:h-[450px]" src="/img/man.JPG" />}
                >
                    <Meta title="Для парней"  />
                    <div className="mt-[10px]">
                        Здоровое питание для людей, требующих особого подхода
                    </div>
                </Card>
            </Link>
            <Link href="/no-milk" className="xs:mx-auto">
                <Card
                    className="hover:scale-[1.01] transition-transform duration-300 xs:w-[350px] md:w-[450px] xl:w-[330px] 2xl:w-[400px]" 
                    hoverable
                    style={{ transform: "transition: all 0.3s" }}
                    cover={<img alt="example" className="h-[500px]  object-cover xs:h-[400px] md:h-[500px] xl:h-[400px] 2xl:h-[450px]" src="/img/nomilk.JPG"  />}
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