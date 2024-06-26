import {Header} from './components/Header';
import './App.css';
import { Advertise } from './components/advertisement';
import { AppWork } from './components/appWork';
import { LifeGoals } from './components/lifeGoals';
import { TrustedCompany } from './components/trustedCompany';
import { MediaLove } from './components/mediaLove';
import { Secured } from './components/secuired';
import { Footer } from './components/footer';
import { SharkAd } from './components/sharkAd';
import { Graph } from './components/graph';

function App() {
  return  <div className="App">
    <SharkAd/>
 <Header/>
 <Advertise/>
 <AppWork/>
 <LifeGoals/>
 <br/><br/>
 <Graph/>
 <TrustedCompany/>
 <MediaLove/>
 <br/><br/>
 <Secured/>
 <Footer/>
    </div>
  
}

export default App;
