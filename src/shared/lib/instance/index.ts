import axios from 'axios';
export async function getStateInstance(idInstance: string, apiTokenInstance: string, setResponse: React.Dispatch<React.SetStateAction<string | undefined>>) {

    await axios.get(`${process.env.GREEN_API_URL}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`)
    .then(data => setResponse(JSON.stringify(data.data)))
    .catch(error => setResponse(error));

}