import React, { useState, useEffect , useCallback } from 'react';
import UIContext from './context/UI';
import logo from './logo.svg';
import './App.css';
import Comment from './component/comment'

function App() {
  const [Loading, setLoading] = useState(false);  
  const [Err, setErr] = useState(false);
  const [ErrText, setErrText] = useState(`出现错误了`);
  useEffect(() => {
    
    console.log(`err`)
  }, [Err])
  useEffect(() => {    
    console.log(`errtext`)
  }, [ErrText])

  return (
    <UIContext.Provider value={
      { 
        ToggleState : ( Loading , Err , ErrText) => {         
          console.log(ErrText) 
           setLoading(Loading);
           Err      !== undefined && setErr(Err);
           ErrText  !== undefined && setErrText(ErrText);
        } 
      }
      }>      
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Comment />
          </header>
          <section className="common-ui">
             { Loading && <LoadingCom /> }
             { Err && <ErrCom text={ErrText} /> }
          </section>
        </div>
    </UIContext.Provider>
  );
}



const LoadingCom = () => {
  return (<div>
            loading ....
          </div>)
}
const ErrCom = ({text , event}) => {
  return (<div onClick={() => event && event()}>
              {text}
          </div>)
}
export default App;
