const TELEGRAM_BOT_TOKEN = '6448515073:AAHQZ4XNZkpHuhzq9viCotRee8iok0Re-40'
const TELEGRAM_CHAT_ID = '@InsightFood'
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

export  const onSumbitMessage = async (event: any, name: string, phone: string, message: string, setName:any, setMessage:any, setPhone:any) => {
    event.preventDefault()

    const text = `Консультация: \n Имя: ${name},\n Номер телефона: ${phone},\n Cообщение: ${message}`
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
            setMessage('')
        }else{
            console.log('+')
        }
    } catch (error) {
        console.log('-')
    } finally{

    }
}