import { BrowserRouter, Routes , Route } from "react-router-dom";
import Landing1 from "./landing1";
import List from "./list";
import Profile1 from "./profile1";
import Profile2 from "./profile2";
import Profile3 from "./profile3";
import Profile4 from "./profile4";
import Profile5 from "./profile5";
import Profile6 from "./profile6";
import Profile7 from "./profile7";
import Profile8 from "./profile8";

function App() {
  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing1/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/profile1" element={<Profile1/>}/>
        <Route path="/profile2" element={<Profile2/>}/>
        <Route path="/profile3" element={<Profile3/>}/>
        <Route path="/profile4" element={<Profile4/>}/>
        <Route path="/profile5" element={<Profile5/>}/>
        <Route path="/profile6" element={<Profile6/>}/>
        <Route path="/profile7" element={<Profile7/>}/>
        <Route path="/profile8" element={<Profile8/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
