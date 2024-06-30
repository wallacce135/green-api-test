import React from 'react';
import {Input} from "../shared/ui/input";
import {Btn} from "../shared/ui/button";
import {Output} from "../shared/ui/output";

function App(): React.JSX.Element {
    // todo: lib/* methods calls

  return (
      <div className={"grid grid--isColumns-2 container isMY32"}>
          <div className={"gridItem grid__item--isColumn-1st isFlexCol"}>
              <Input placeholder={"idInstance"}/>
              <Input placeholder={"ApiTokenInstance"}/>
          </div>
          <div className={"grid__item grid__item--isColumn-1st isFlexCol"}>
              <Btn label={"getSettings"}/>
              <Btn label={"getStateInstance"}/>
          </div>
          <div className={"grid__item grid__item--isColumn-1st isFlexCol"}>
              <Input/>
              <Input/>
              <Btn label={"sendMessage"}/>
          </div>
          <div className={"grid__item grid__item--isColumn-1st isFlexCol"}>
              <Input/>
              <Input/>
              <Btn label={"sendFileByUrl"}/>
          </div>
          <div className={"grid__item grid__item--isColumn-last grid__item--isRowSpan-4 isFlexCol"}>
              <p>Ответ:</p>
              <Output
                  readOnly={true}
              />
          </div>
      </div>
  )
}

export default App;
