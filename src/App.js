import logo from './logo.svg';
import './App.css';
import ProductsList from "./components/ProductList/ProductsList";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <div>
            <Navbar/>
            <ProductsList/>
        </div>
    );
}

export default App;
