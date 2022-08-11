import React from 'react'
import {Routes,Route,} from "react-router-dom";
import router from './router';
function App(){
  console.log(router);
  return(
    <div className='App'>
   <Routes>
    {router.map((ele)=>(
      <Route key={ele.id} path={ele.pathname} element={ele.component}/>
    ))}
   </Routes>
    </div>
  )
}
export default App;