import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { GodownList, Register, HomePage, LoginPage} from './Pages'
import {GodownOwnerForm, ExporterForm} from './components'

function App() {
  
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/register' element={<Register />} />
      <Route path='/godown_list' element={<GodownList />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/exporter_form' element={<ExporterForm />} />
      <Route path='/warehouse_owner_form' element={<GodownOwnerForm />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
