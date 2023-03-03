import './App.css';
import Header from './components/header/header.component';
import Menu from './components/menu-components/menu.component';
import Container from '@mui/material/Container';

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <Header />
        <Menu />
      </Container>
    </div>
  );
}

export default App;
