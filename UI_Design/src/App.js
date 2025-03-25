import './App.css';
import { BrowserRouter as Router,  Routes,  Route} from 'react-router-dom';
import Page1 from './Components/page1/index'
import Page2 from './Components/page2/index'
import Home from './Components/Home/index'
import NoPage from './Components/common/NoPage';
function App() {
  return (
    <>
 <Router> 
    <Routes> 
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/page1" element={<Page1/>}/>
        <Route exact path="/page2" element={<Page2/>}/>
        {/* <Route exact path="/products/mini-pos-qr-soundbox" element={<Mini urlLink={PINE_LABS_URL}/>} /> */}
        <Route path="*" element={<NoPage />} />       
    </Routes>
  </Router>
    </>
  );
}

export default App;
