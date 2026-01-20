import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
// import NotFound from "./pages/NotFound";
import { Toaster } from "@/component/ui/toaster";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>

      {/* Toaster should be OUTSIDE Routes but inside BrowserRouter */}
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
