import React from "react"
function ToDoItem(props)
{
    // const[strike,setStrike] = useState(false)
    // function MouseOver()
    // {
    //     setStrike((prevValue)=>{
    //         return !prevValue
    //     })
    // }
    
    return <div onClick={()=>{
        props.onClicked(props.id)
    }}/*onClick={MouseOver}*/>
        <li style={{cursor:"pointer"/*, textDecoration : strike ? "line-through" : "none"*/}}>{props.text}</li>
    </div>
}
export default ToDoItem