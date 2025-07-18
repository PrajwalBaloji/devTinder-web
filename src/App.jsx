import Body from "./Body";
import Login from "./Screens/Login";
import Profile from "./Screens/profile";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Feed from "./Screens/Feed";
import { BrowserRouter, Route, Routes } from "react-router";
import Connections from "./Screens/Connections";
import Requests from "./Screens/Requests";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route index element={<Feed />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/requests" element={<Requests />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
