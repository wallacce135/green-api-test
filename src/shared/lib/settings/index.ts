import axios from 'axios';

export async function getSettings(idInstance: string, apiTokenInstance: string, setResponse: React.Dispatch<React.SetStateAction<string | undefined>>) {
    await axios.get(`${process.env.GREEN_API_URL}/waInstance${idInstance}/getSettings/${apiTokenInstance}`)
        .then(data => setResponse(JSON.stringify(data.data)))
        .catch(error => setResponse(JSON.stringify(error)));
}