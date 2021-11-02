import React , { useContext , useEffect , useCallback } from 'react'
import UIContext from '../context/UI';

function Comment() {
    const {ToggleState} = useContext(UIContext);
    const GetData = useCallback(
    () => {
      ToggleState(true , false);     
      setTimeout(( ) => {
        ToggleState(false, true , `error`);     
      }, 2000)
    },[]
  ) 
    
  useEffect(() => {
    GetData();
  }, [GetData])
 
    
    return (
        <div>
            <p onClick={GetData}>this is a comment !</p>
        </div>
    )
}

export default Comment
