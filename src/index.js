import * as AppView from './views/App';
import * as Attcher from './views/Attacher';
import * as Deployer from './views/Deployer';
import * as Player from './views/Player'; 
import AppContext from './context/ReachContext';
import RenderViews,{renderDom}  from './App';
import './index.css';
import './App.css';

const Views = {
  AppView,
  Attcher,
  Deployer,
  Player,
}

const App = () =>{
   return(
    <div>
      <RenderViews {...Views} />
    </div>
   )
}

renderDom(
  <AppContext>
    <App />
  </AppContext>
)