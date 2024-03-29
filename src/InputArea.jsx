import React,{useState} from "react"
function InputArea(props)
{
    const[inputText,setInputText] = useState("")
    function handleText(event)
    {
        const newTextValue = event.target.value
        setInputText(newTextValue)
    }
    return <div className="form">
        <input type="text" value={inputText} onChange={handleText}/>
        <button onClick={()=>{
            props.onAdd(inputText)
            setInputText("")
        }}>
            <span>Add</span>
        </button>
    </div>
}
export default InputArea