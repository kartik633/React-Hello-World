import React from 'react'
import "./style.css";

const UseEffect = () => {
    
    const initialData = 0;
    const [myNum,setmyNum] = React.useState(initialData);

    React.useEffect(() => {
        document.title = `chats(${myNum})`
    },);

    // console.log(myNum);

    return (
        <>
        <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => setmyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Incr
        </div>
      </div>
        </>
    )
}

export default UseEffect 
