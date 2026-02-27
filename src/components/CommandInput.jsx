import React, { forwardRef } from "react";

const CommandInput = forwardRef(({ value, onChange, onKeyDown }, ref) => {
  return (
    <div className="flex items-center font-mono mt-2">
      <span className="text-terminal-green mr-2 font-bold whitespace-nowrap">
        user@shell.me:~$
      </span>
      <div className="relative flex-1 flex items-center">
        <input
          ref={ref}
          type="text"
          className="bg-transparent border-none outline-none flex-1 text-white z-10"
          autoFocus
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          spellCheck="false"
          autoComplete="off"
        />
        {/* Kursor Berkedip (Efek dari App.css) */}
        <span className="cursor"></span>
      </div>
    </div>
  );
});

CommandInput.displayName = "CommandInput";

export default CommandInput;
