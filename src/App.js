import './App.css';
import Header from './componets/layouts/Header';
import Main from './componets/layouts/Main';
import Footer from './componets/layouts/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <section className="App">
      <Header />
      <Main />
      <Footer />
    </section>
  );
}

export default App;
