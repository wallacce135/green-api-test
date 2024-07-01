import axios from 'axios';
export async function sendMessage(chatId: string, message: string, idInstance: string, apiTokenInstance: string, setResponse: React.Dispatch<React.SetStateAction<string | undefined>>) {
    
    await axios.post(`${process.env.GREEN_API_URL}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
        chatId: chatId,
        message: message
    })
    .then(data => setResponse(JSON.stringify(data.data)))
    .catch(error => setResponse(JSON.stringify(error)))

}