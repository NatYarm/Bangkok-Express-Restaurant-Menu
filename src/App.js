import './App.css';
import Header from './components/header/header.component';
import Menu from './components/menu/menu.component';
//import Checkout from './components/cart/checkout/checkout.component';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Header />
        <Menu />
        {/* <Checkout /> */}
      </Container>
    </div>
  );
}

export default App;
