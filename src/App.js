
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import {store, persistor} from './store/Store'
import Home from './page/Home/Home';
import AboutUs from './page/AboutUs/AboutUs';
import History from './page/History/History';
import Input from './page/AdminInput/Input';
import RecapData from './page/AdminRecapData/RecapData';
import LoginUser from './page/login/loginUser';


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/history" element={<History />}/>
          {/* <Route path="/finance" element={<Home />}/> */}
          <Route path="/admin/input" element={<Input />}/>
          <Route path="/admin/recap" element={<RecapData />}/>
          <Route path="/login" element={<LoginUser />}/>
      </Routes>

      </PersistGate>
    </Provider>
  );
}

export default App;
