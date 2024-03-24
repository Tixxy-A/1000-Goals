import { Routes ,Route} from "react-router-dom";
import Index from './pages/IndexPage';
import Layout from "./pages/Layout";
import Game from "./pages/Game";

function App() {
  return (
    <Routes>
  
      <Route path="/" element={<Layout/>}>
          <Route index element={<Index/>}/>
          <Route path="/game" element={<Game/>}/>
      </Route>
    </Routes>
  );
}

export default App;
