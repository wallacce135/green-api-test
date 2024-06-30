import React from 'react';
import {Input} from "../shared/ui/input";
import {Btn} from "../shared/ui/button";
import {Output} from "../shared/ui/output/ui";

function App(): React.JSX.Element {
  return (
      <div className={"grid grid--isColumns-2 container isMY32"}>
          <div className={"gridItem grid__item--isColumn-1st isFlexCol"}>
              <Input/>
              <Input/>
          </div>
          <div className={"grid__item grid__item--isColumn-1st isFlexCol"}>
              <Btn label={"label 1"}/>
              <Btn label={"label 2"}/>
          </div>
          <div className={"grid__item grid__item--isColumn-1st isFlexCol"}>
              <Input/>
              <Input/>
              <Btn label={"label 3"}/>
          </div>
          <div className={"grid__item grid__item--isColumn-1st isFlexCol"}>
              <Input/>
              <Input/>
              <Btn label={"label 3"}/>
          </div>
          <div className={"grid__item grid__item--isColumn-last grid__item--isRowSpan-4 isFlexCol"}>
              <p>Ответ:</p>
              <Output />
          </div>
      </div>
  )
}

export default App;
