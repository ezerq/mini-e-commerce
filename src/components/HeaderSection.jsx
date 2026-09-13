function HeaderSection({ title, btnText }) {
  return (
    <div className="flex justify-between items-center ml-1">
      <p className="font-semibold">{title}</p>
      <button className="text-sm text-primary/70 flex items-center gap-2 hover:text-primary cursor-pointer">
        View All {btnText}
        <span className="mso">arrow_forward</span>
      </button>
    </div>
  );
}

export default HeaderSection;
