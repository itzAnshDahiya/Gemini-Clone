import {createContext} from 'react';
import runChat from '../config/gemini';

export const Context = createContext();
    
const ContextProvider = (props) =>{

    const [input,setInput] = useState("");
    const [recentPrompt,setRecentPrompt] = useState("")
    const [prevPromots,setprevPromots] = useState([])
    const [showResult,setShowResult] = useState(false)
    const [loading,setLoading] = useState(false)
    const [resultData,setResultData] = useState("")


    const onSent = async (props) => {
       await runChat(prompt)
    }

const contextValue = {
prevPromots,
setPrevPrompts,
onSent,
setRecentPrompt,
recentPrompt,
showResult,
loading,
resultData,
input,
setInput,
}

return(
    <Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
)

}
export default ContextProvider;