import * as AppView from './views/App';
import * as Attacher from './views/Attacher';
import * as Deployer from './views/Deployer';
import * as Player from './views/Player'; 
import AppContext from './context/ReachContext';
import RenderViews,{renderDom}  from './App';
import './index.css';
import css from './css/app.module.css';

const Views = {
  ...AppView,
  ...Attacher,
  ...Deployer,
  ...Player,
}

const App = () =>{
   return(
    <div className={css.app}>
      <h1>FORTUNE GAME</h1>
      <RenderViews {...Views} />
    </div>
   )
}

renderDom(
  <AppContext>
    <App />
  </AppContext>
)