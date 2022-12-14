import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Index from "./pages/index/Index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
