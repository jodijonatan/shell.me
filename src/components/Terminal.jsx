import React, { useState, useEffect, useRef } from "react";
import OutputLine from "./OutputLine";
import CommandInput from "./CommandInput";
import { COMMANDS } from "../utils/commands";

const Terminal = () => {
  const [history, setHistory] = useState([
    {
      cmd: "",
      resp: ` $$$$$$\\  $$\\                 $$\\ $$\\                               
$$  __$$\\ $$ |                $$ |$$ |                              
$$ /  \\__|$$$$$$$\\   $$$$$$\\  $$ |$$ |    $$$$$$\\$$\\$$\\   $$$$$$\\  
\\$$$$$$\\  $$  __$$\\ $$  __$$\\ $$ |$$ |    $$  _$$  _$$ \\ $$  __$$\\ 
 \\____$$\\ $$ |  $$ |$$$$$$$$ |$$ |$$ |    $$ / $$ / $$ |$$$$$$$$ |
$$\\   $$ |$$ |  $$ |$$   ____|$$ |$$ |    $$ | $$ | $$ |$$   ____|
\\$$$$$$  |$$ |  $$ |\\$$$$$$$\\ $$ |$$ |$$\\ $$ | $$ | $$ |\\$$$$$$$\\ 
 \\______/ \\__|  \\__| \\_______|\\__|\\__|\\__|\\__| \\__| \\__| \\_______|

Welcome to shell.me [Version 1.0.0]
Type 'help' to see available commands.`,
    },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyPointer, setHistoryPointer] = useState(-1);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  // Selalu scroll ke paling bawah jika ada output baru
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Handle focus
  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleExecute = (e) => {
    if (e.key === "Enter") {
      const cleanInput = input.toLowerCase().trim();

      if (cleanInput === "") {
        setHistory([...history, { cmd: "", resp: "" }]);
      } else if (cleanInput === "clear") {
        setHistory([]);
        setCmdHistory([cleanInput, ...cmdHistory]);
      } else {
        const response =
          COMMANDS[cleanInput] || `command not found: ${cleanInput}`;
        setHistory([...history, { cmd: cleanInput, resp: response }]);
        setCmdHistory([cleanInput, ...cmdHistory]);
      }

      setInput("");
      setHistoryPointer(-1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length > 0 && historyPointer < cmdHistory.length - 1) {
        const newPointer = historyPointer + 1;
        setHistoryPointer(newPointer);
        setInput(cmdHistory[newPointer]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyPointer > 0) {
        const newPointer = historyPointer - 1;
        setHistoryPointer(newPointer);
        setInput(cmdHistory[newPointer]);
      } else if (historyPointer === 0) {
        setHistoryPointer(-1);
        setInput("");
      }
    }
  };

  return (
    <div
      className="terminal-container p-6 min-h-screen flex flex-col cursor-text"
      onClick={handleTerminalClick}
    >
      <div className="scanline"></div>

      {/* Daftar Riwayat Output */}
      <div className="flex-1">
        {history.map((line, index) => (
          <OutputLine key={index} cmd={line.cmd} resp={line.resp} />
        ))}
        <div ref={scrollRef} />
      </div>

      {/* Input di bagian paling bawah */}
      <CommandInput
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleExecute}
      />
    </div>
  );
};

export default Terminal;
