import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Comunication from './components/Comunicacion'
import Redes from './components/Redes'
import Muestras from './components/Muestras'
import Navigation from './components/Navigation'

function App() {
  return (
    <Router>
      <Navigation />

      <Route path="/comunication" component={Comunication} />
      <Route path="/redes" component={Redes} />
      <Route path="/muestras" component={Muestras} />

    </Router>
  );
}

export default App;
