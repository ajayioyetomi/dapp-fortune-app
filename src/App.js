import React from 'react';
import ReactDOM from 'react-dom/client';
import { useReach } from './hooks/ReachHook';

const root = ReactDOM.createRoot(document.getElementById('root'));

export function renderDom(app){
  root.render(
    <React.StrictMode>
      {app}
    </React.StrictMode>
  )
}

const RenderViews = (Views) =>{
   const {views} = useReach();
   const ActiveView =  Views[views.view];
   const ActiveWrapper = views.wrapper?Views[views.wrapper]: Views['AppWrapper'];

   return (
      <ActiveWrapper>
        <ActiveView/>
      </ActiveWrapper>
   );

}

export default RenderViews;

