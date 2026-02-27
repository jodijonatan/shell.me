import React from "react";

const OutputLine = ({ cmd, resp }) => {
  return (
    <div className="mb-3 font-mono animate-in fade-in duration-500">
      {/* Baris Perintah User */}
      {cmd && (
        <div className="flex items-center">
          <span className="text-terminal-green mr-2 opacity-80 font-bold whitespace-nowrap">
            user@shell.me:~$
          </span>
          <span className="text-white">{cmd}</span>
        </div>
      )}

      {/* Baris Jawaban Terminal */}
      <div className="whitespace-pre-wrap text-terminal-green opacity-90 mt-1 leading-relaxed">
        {resp}
      </div>
    </div>
  );
};

export default OutputLine;
