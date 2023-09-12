import { Login, Home, FAQs} from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PropertyDetail from "./pages/PropertyDetail";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/faqs" element={<FAQs/>}/>
        <Route path="/property-detail" element={<PropertyDetail/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
