import { useState } from "react";

function Accordion({ title, children }) {
  //
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="border border-primary/20 rounded-lg p-4 cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-sm">{title} </h2>
        <button className="mso cursor-pointer">keyboard_arrow_down</button>
      </div>

      <div
        className={`${open === true ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} grid overflow-hidden transition-grid-rows`}
      >
        <div className="min-h-0">
          <div className="divider"></div>
          <div className="text-xs text-primary/60">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
