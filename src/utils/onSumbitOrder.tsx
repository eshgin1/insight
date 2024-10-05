const TELEGRAM_BOT_TOKEN = '6448515073:AAHQZ4XNZkpHuhzq9viCotRee8iok0Re-40'
const TELEGRAM_CHAT_ID = '@InsightFood'
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

export  const onSumbitOrder = async (event: any, name: string, phone: string,segmentedValue:string, activeButton: any, setName:any, setPhone:any, sex: string, messageApi:any) => {
    event.preventDefault()

    const text = `Заказ: \n Пол:${sex}, \n Имя: ${name},\n Номер телефона: ${phone},\n Кол-во дней: ${activeButton}, \n Каллорий: ${segmentedValue}`
    try {
        const response = await fetch(API, {
        method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text,
            })
        });
        if(response.ok){
            setName('') 
            setPhone('')
            messageApi.open({
                type: 'success',
                content: 'Заказ успешно отправлен, мы скоро с Вами свяжемся',
            })
        }else{
            console.log('+')
        }
    } catch (error) {
        console.log('-')
    } finally{

    }
}