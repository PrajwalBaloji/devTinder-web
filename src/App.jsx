import { BrowserRouter, Route, Routes } from "react-router";
import Body from "./Body";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="login" element={<div> login </div>} />
          <Route path="profile" element={<div> Profile</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
