
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
import AdminWasteStock from './page/AdminWasteStock/AdminWasteStock';


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<AboutUs />}/>
              <Route path="/history" element={<History />}/>
              {/* <Route path="/finance" element={<Home />}/> */}
              <Route path="/admin/input" element={<Input />}/>
              <Route path="/admin/transaction" element={<RecapData />}/>
              <Route path="/admin/waste" element={<AdminWasteStock />}/>
              <Route path="/login" element={<LoginUser />}/>
          </Routes>
      </BrowserRouter>

      </PersistGate>
    </Provider>
  );
}

export default App;
