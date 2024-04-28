import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ChatContext = createContext();

const ChatProvider = (props)=>{

    const [user, setUser] = useState();
    const [selectedChat, setSelectedChat] = useState();
    const [chats, setChats] = useState([]);
    const [notification, setNotification] = useState([]);

    const history = useNavigate();

    useEffect(()=>{
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        setUser(userInfo);

        if(!userInfo){
            history('/');
        }
    },[history]);

    return (
        <ChatContext.Provider value={{ user , setUser , selectedChat , setSelectedChat , chats , setChats , notification , setNotification }}>
            {props.children}
        </ChatContext.Provider>
    )
}

// export const ChatState = ()=>{
//     useContext(ChatContext);
// }

export default ChatProvider;