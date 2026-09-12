function Accordion({ title, children }) {
  return (
    <div className="border border-primary/20 rounded-xl px-3 py-2">
      <div className="flex justify-between items-center">
        <h2 className="text-sm">{title} </h2>
        <button className="mso">keyboard_arrow_down</button>
      </div>

      <div className="">
        <div className="divider"></div>
        <div className="text-xs text-primary/60">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
