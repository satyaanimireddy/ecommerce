import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import HomeScreen from "./pages/HomeScreen";
import ProductDescription from "./pages/ProductDescription";
import Cartscreen from "./pages/Cartscreen";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Loginscreen from "./pages/Loginscreen";
import Signupscreen from "./pages/Signupscreen";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductDescription />} />
          <Route path="/login" element={<Loginscreen />} />
          <Route path="/signup" element={<Signupscreen />} />
          <Route path="/cart" element={<Cartscreen />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
