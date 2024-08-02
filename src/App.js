import Header from './components/Header';
import SearchWidget from './components/SearchWidget';
import Banner from './components/Banner';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <SearchWidget />
        <Banner />
        <Footer />
    </div>
  );
}

export default App;
