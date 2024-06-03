import {Header} from './components/Header';
import './App.css';
import { Advertise } from './components/advertisement';
import { AppWork } from './components/appWork';
import { LifeGoals } from './components/lifeGoals';
import { TrustedCompany } from './components/trustedCompany';

function App() {
  return  <div className="App">
 <Header/>
 <Advertise/>
 <AppWork/>
 <LifeGoals/>
 <TrustedCompany/>
    </div>
  
}

export default App;
