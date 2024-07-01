import React, { useState } from 'react';
import {Input} from "../shared/ui/input";
import {Btn} from "../shared/ui/button";
import {Output} from "../shared/ui/output";
import { getStateInstance } from '../shared/lib/instance';
import { sendMessage } from '../shared/lib/message';
import { sendFileByUrl } from '../shared/lib/file';
import { getSettings } from '../shared/lib/settings';


function App(): React.JSX.Element {
    // todo: lib/* methods calls

    const [idInstance, setIdInstance] = useState<string>('')
    const [apiTokenInstance, setApiTokenInstance] = useState<string>('')
    const [chatId, setChatId] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [fileUrl, setFileUrl] = useState<string>('');


    const [response, setResponse] = useState<string>();

  return (
      <div className={"grid grid--isColumns-2 container isMY32"}>
          <div className={"gridItem grid__item--isColumn-1st isFlexCol"}>
              <Input placeholder={"idInstance"} value={idInstance} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setIdInstance(event.target.value)}/>
              <Input placeholder={"ApiTokenInstance"} value={apiTokenInstance} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setApiTokenInstance(event.target.value)}/>
          </div>
          <div className={"grid__item grid__item--isColumn-1st isFlexCol"}>
              <Btn label={"getSettings"} onClick={() => getSettings(idInstance, apiTokenInstance, setResponse)}/>
              <Btn label={"getStateInstance"} onClick={() => getStateInstance(idInstance, apiTokenInstance, setResponse)}/>
          </div>
          <div className={"grid__item grid__item--isColumn-1st isFlexCol"}>
              <Input placeholder={"ChatId"} value={chatId} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setChatId(event.target.value)}/>
              <Input placeholder={'Message'} value={message} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setMessage(event.target.value)}/>
              <Btn label={"sendMessage"} onClick={() => sendMessage(chatId, message, idInstance, apiTokenInstance, setResponse)}/>
          </div>
          <div className={"grid__item grid__item--isColumn-1st isFlexCol"}>
              <Input placeholder={"ChatId"} value={chatId} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setChatId(event.target.value)}/>
              <Input placeholder={"fileURL"} value={fileUrl} onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFileUrl(event.target.value)}/>
              <Btn label={"sendFileByUrl"} onClick={() => sendFileByUrl(chatId, fileUrl, idInstance, apiTokenInstance, setResponse)}/>
          </div>
          <div className={"grid__item grid__item--isColumn-last grid__item--isRowSpan-4 isFlexCol"}>
              <p>Ответ:</p>
              <Output
                value={response}
                readOnly={true}
              />
          </div>
      </div>
  )
}

export default App;
