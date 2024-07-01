import axios from 'axios';
export async function sendFileByUrl(chatId: string, fileUrl: string, idInstance: string, apiTokenInstance: string, setResponse: React.Dispatch<React.SetStateAction<string | undefined>>) {


    await axios.post(`${process.env.GREEN_API_URL}/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`, {
        chatId: chatId,
        urlFile: fileUrl,
        fileName: "horse.png",
        caption: "Лошадка"
    })
    .then(data => setResponse(JSON.stringify(data.data)))
    .catch(error => setResponse(JSON.stringify(error)))

}