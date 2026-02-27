import React, { forwardRef } from "react";

const CommandInput = forwardRef(({ value, onChange, onKeyDown }, ref) => {
  return (
    <div className="flex items-center font-mono mt-2 group">
      <span className="text-terminal-green mr-2 font-bold whitespace-nowrap opacity-70 transition-all duration-300 group-focus-within:opacity-100 group-focus-within:brightness-125">
        user@shell.me:~$
      </span>
      <div className="relative flex-1 flex items-center min-h-[1.5rem]">
        {/* Input transparan (Ghost Input) */}
        <input
          ref={ref}
          type="text"
          className="absolute inset-0 bg-transparent border-none outline-none w-full text-transparent z-20 caret-transparent"
          autoFocus
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          spellCheck="false"
          autoComplete="off"
        />
        
        {/* Render teks yang terlihat dan kursor */}
        <div className="flex items-center z-10 pointer-events-none whitespace-pre-wrap break-all">
          <span className="text-white">{value}</span>
          <span className="cursor ml-[1px]"></span>
        </div>
      </div>
    </div>
  );
});

CommandInput.displayName = "CommandInput";

export default CommandInput;
