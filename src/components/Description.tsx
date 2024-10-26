const Description: React.FC = () => {
    return (
        <div className="pt-[50px] sm:flex flex-wrap justify-around gap-[10px] xs:hidden">
            <div className="flex flex-col items-center w-[300px]">
                <div className="w-[100px]">
                    <img src="descr-icons/eats.png" alt="insight-food" className="w-full"/>
                </div>
                <p className="text-center font-[300] text-[16px] mt-[10px]">Готовые разнообразные блюда ресторанного уровня</p>
            </div>
            <div className="flex flex-col items-center w-[300px]">
                <div className="w-[100px]">
                    <img src="descr-icons/delivery.png" alt="insight-food" className="w-full"/>
                </div>
                <p className="text-center font-[300]  text-[16px] mt-[10px]">Ежедневная доставка с 18:00 до 20:00 (Дагомыс, Cочи, Адлер)</p>
            </div>
            <div className="flex flex-col items-center w-[300px]">
                <div className="w-[100px]">
                    <img src="descr-icons/consultant.png" alt="insight-food" className="w-full"/>
                </div>
                <p className="text-center font-[300] text-[16px] mt-[10px]">Наши менеджеры подберут вам оптимальный рацион</p>
            </div>
            <div className="flex flex-col items-center w-[300px]">
                <div className="w-[100px]">
                    <img src="descr-icons/garant.png" alt="insight-food" className="w-full"/>
                </div>
                <p className="text-center font-[300] text-[16px] mt-[10px]">Гарантируем качество продуктов и программ</p>
            </div>
        </div>
    )
}

export default Description;