import { useState, useEffect } from "react";

export const useMessageList = () => {
    const[message, setMessage] = useState([]);
    const[val, setValue] = useState("");

    const sendMessage = () => {
        setMessage(state => [...state, {val, author: " Random"}]);
        setValue("")
    }

    useEffect(() => {
       setTimeout(() => {
           if (message.length < 1) {
               console.log("Сообщений нет");
           } else
           console.log(message[message.length-1].author + " ввел сообщение")
        }, 1500)},
    [message]);

   return(
        <div>
            <ul>
                {message.map((message, id) => <li key = {id}>Сообщение: {message.val},автор: {message.author}</li>)}
            </ul>
            <input value={val} onChange = {(event) => setValue(event.target.value)}></input>
            <button onClick = {() => {sendMessage()}}>Отправить</button>
        </div>
    )
}

// const appMessage = () => {
//     const [message, setMessage] = useState([{text: "Fugiat laboris consectetur mollit officia Lorem elit.", author: "Random1"}]);
//     const[val, setVal] = useState("");

//     return {message, setMessage, val, setVal};
// }

// export const useMessageList = () => {
//     const{message, setMessage, val, setVal} = appMessage();

//     return (
//     <div>
//         <ul>
//         {message.map((message, id) => <li key={id}>{message.text} = {message.author}</li>)}
//         </ul>
//         <input value = {val} onChange = {(event) => setVal(event.target.value)}></input>
//         <button onClick = {() => setMessage(state => [...state, {message: "", author: "Random"}])}>Отправить</button>
//     </div>
// );
// }