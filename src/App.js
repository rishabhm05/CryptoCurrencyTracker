import { makeStyles } from "@mui/material";
import "./App.css";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import "./styles.css";
import Search from "./Components/Search";
import CoinTable from "./Components/CoinTable";
import { Routes, Route } from "react-router-dom";
import SingleCoin from "./Components/SingleCoin";
function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Search />
              <CoinTable />
            </>
          }
        />

        <Route path="/coin/:id" element={<SingleCoin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
