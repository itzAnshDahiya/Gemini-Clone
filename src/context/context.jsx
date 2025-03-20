import React, { createContext, useState } from "react";
import runChat from "../config/gemini"; // Make sure the runChat function is correctly imported

export const Context = createContext();

const ContextProvider = (props) => {
  // State variables
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  // onSent function to handle sending the chat prompt
  const onSent = async () => {
    // Set loading to true while waiting for the response
    setLoading(true);
    try {
      // Call the runChat function with the input as prompt
      const result = await runChat(input);

      // Assuming resultData needs to be updated with the response from runChat
      setResultData(result);

      // Set the previous prompts
      setPrevPrompts((prev) => [...prev, input]);

      // Set the recent prompt
      setRecentPrompt(input);

      // Show result
      setShowResult(true);
    } catch (error) {
      console.error("Error sending chat prompt:", error);
    } finally {
      // Reset loading state after the chat is done
      setLoading(false);
    }
  };

  // Context value to be shared
  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
