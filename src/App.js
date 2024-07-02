import Header from './components/navbar';
import About from './pages/about';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Products from './pages/products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='product' element={<Products/>}/>
        </Route>
      </Routes>
      <h1>Hello Fake api</h1>
    </BrowserRouter>
  );
}

export default App;
