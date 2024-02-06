import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import InvoiceListing from './Components/InvoiceListing';
import InvoiceCreate from './Components/InvoiceCreate';
import InvoiceEdit from './Components/InvoiceEdit';
import Details from './Components/Details';
import { ToastContainer } from 'react-toastify';
import PrintInvoice from './Components/PrintInvoice';
import Footer from './Components/Footer';
import Login from './Components/Login';


function App() {
  return (
    <>
     {/* <Header /> */}
     {/* <Login /> */}
      <ToastContainer></ToastContainer>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/home" element={<Header />} />
      <Route  path='/listing' element={<InvoiceListing />} />
      <Route  path='/lotus/create' element={<InvoiceCreate />} />
      <Route  path='/lotus/:eid' element={<Details />} />
      <Route  path='/lotus/print/:eid' element={<PrintInvoice />} />

      <Route  path='/lotus/edit/:eid' element={<InvoiceEdit />} />

     </Routes>
     </BrowserRouter>
     <Footer />
    </>
  );
}

export default App;
