import {BrowserRouter,Route,Routes,Link} from "react-router-dom";
import Prime from './prime';
import Cube from './cube';

function App(){
  return(<>
  <BrowserRouter>
  <Link to ='/prime'>Prime</Link>&nbsp;&nbsp;
  <Link to ='/cube'>Cube</Link>
  <Routes>
    <Route path="/prime" element={<Prime />}></Route>
    <Route path="/cube" element={<Cube />}></Route>
  </Routes>
  </BrowserRouter>
  </>)
}
export default App;
