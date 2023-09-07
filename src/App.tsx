import { Login, Home, FAQs} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/faqs" element={<FAQs/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
