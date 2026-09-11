import { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// import { useState, useEffect } from "react";

function App() {
  //
  const [search, setSearch] = useState("");

  return (
    <main className="py-5 px-35 flex flex-col gap-10">
      <Navbar search={search} setSearch={setSearch} />
      <Home search={search} />
    </main>
  );
}

export default App;
