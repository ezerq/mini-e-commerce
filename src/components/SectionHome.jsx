import HeaderSection from "./HeaderSection";

function SectionHome({ title, btnText, children }) {
  return (
    <div className="flex flex-col gap-2">
      <HeaderSection title={title} btnText={btnText} />

      <div className="grid grid-cols-4 gap-3">{children}</div>
    </div>
  );
}

export default SectionHome;
