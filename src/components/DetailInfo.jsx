function DetailInfo({ icon, info }) {
  return (
    <div className="cursor-default flex gap-2 items-center border rounded-lg border-primary/10 px-2.5 py-1">
      <span className="mso text-blue-400">{icon}</span>
      <p className="text-xs text-primary/70">{info}</p>
    </div>
  );
}

export default DetailInfo;
