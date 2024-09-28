"use client"
import { Card } from "antd"
import './../assets/img/man.JPG'

const { Meta } = Card

// const arr = [
//     {
//         img: "./../assets/img/man.JPG",    
//     },
//     {
//         img: "/insight/my-app/src/app/assets/img/woman.PNG",  
//     },
//     {
//         img: '/insight/my-app/src/app/assets/img/man.PNG',
//     }
// ]
const Category: React.FC = () => {
    return (
        <div className="mt-[50px] flex justify-between">
            <Card 
                hoverable
                style={{ width: 400 }}
                // cover={<img alt="example" src="" />}
            >
                <Meta title="Для девушек" />
            </Card>
            <Card 
                hoverable
                style={{ width: 400 }}
                // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Для парней" />
            </Card>
            <Card 
                hoverable
                style={{ width: 400 }}
                // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Без глютена и молока" />
            </Card>
        </div>
    )
}
export default Category