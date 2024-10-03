import Navbar from "../components/Navbar";

import { Link, Routes, Route } from "react-router-dom";
import Hd from "../components/Hd";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <div class="row row-cols-2 row-cols-md-4 g-2 m-3">
        <div class="col">
          <div class="card" id="s1">
          <Link className="link" to="/hd">
            <div class="card-body">
              <h5 class="card-title">
                Hd Wallpaper
              </h5>
            </div>
            </Link>
          </div>
        </div>

        <div class="col">
          <div class="card" id="s1">
            <div class="card-body">
              <h5 class="card-title">4K Wallpaper</h5>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card" id="s1">
            <div class="card-body">
              <h5 class="card-title">Nature Wallpaper</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" id="s1">
            <div class="card-body">
              <h5 class="card-title">Desktop Background</h5>
            </div>
          </div>
        </div>
      </div>






    
      <Routes>
        <Route path="/hd" element={<Hd></Hd>}></Route>
      </Routes>
    </>
  );
}
export default App;
