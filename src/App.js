import logo from "./logo.svg";
import "./App.css";
import FilmList from "./compoonents/FilmList";
import Navbar from "./compoonents/Navbar";
import About from "./compoonents/About";
function App() {
  return (
    <div className="App">
      <div className="main">
        <Navbar></Navbar>

        <div className="container">
          <span>MARCH 23-26, 2016 / NEW YORK</span>
          <div className="title">
            <h1>Best Film Festival</h1>
            <div className="detail">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </div>
          <div className="button-firstpage">
            <a href="#" class="btn">
              Buy Tickets
            </a>
          </div>
        </div>
      </div>

      <FilmList></FilmList>
      {/*  <button type="button" class="btn btn-secondary btn-lg">SEE ALL</button> */}
      <div className="see-all">
        <a href="#" >
          SEE ALL
        </a>
      </div>

      <div className="ads">
        <h1>Don't wait! </h1>
        <h1>Get your tickets now and Save the Money.</h1>
      </div>

     
    </div>
  );
}

export default App;
