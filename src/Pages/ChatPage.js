import { useContext, useState } from "react";
import ChatBox from "../Components/ChatBox";
import MyChats from "../Components/MyChats";
import SideDrawer from "../Components/miscellaneous/SideDrawer";
import { ChatContext } from "../Context/ChatProvider"

const ChatPage = () => {
  const { user } = useContext(ChatContext)
  const [fetchAgain, setFetchAgain] = useState(false)
  return (
    <>
    <div style={{width: "100%",height: "100vh"}}>
    {user && <SideDrawer/>}
    <div className="box">
      {user && <MyChats fetchAgain={fetchAgain} />}
      {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>}
    </div>
    </div>
    </>
  )
}

export default ChatPage
