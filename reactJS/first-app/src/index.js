import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import {Product}  from './pages/Product';
import { Calculator } from './pages/Calculator';
// import { Counter, CounterCallBack,CounterMemo } from './pages/Counter';
import { CounterReducer } from './pages/Reducer/CounterReducer';
import { ReduxProvider } from './pages/reduxExamples/ReduxProvider';
// import { EvenOddReducer } from './pages/Reducer/EvenOddReducer';
import { Provider } from 'react-redux';
import { loginStore } from './pages/reduxExamples/login/LoginStore';
import {UseRefExample} from './pages/UseRefExample';


const root = ReactDOM.createRoot(document.getElementById('root'));
// const profiles=[
//    {name:"Damini", age:23, path:"download.jpg"},
//    {name:"Apurva",age:22, path:"img2.jpg"},
//    {name:"Payal",age:23, path:"img3.jpg"},
//    {name:"Priyanka",age:27, path:"img4.jpg"}
//]
root.render(
<Provider store={loginStore}>
 <BrowserRouter>
 <Routes>
  
    <Route path='/' element={<App/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/product' element={<Product/>}/>
    <Route path='/calc' element={<Calculator/>}/>
    {/* <Route path='/count' element={<Counter/>}/> */}
    {/* <Route path='/count' element={<CounterCallBack/>}/> */}
    {/* <Route path='/counter' element={<CounterMemo/>}/> */}
    <Route path='/reducercounter' element={<CounterReducer/>}/>
    {/* <Route path='/reducereven' element={<EvenOddReducer/>}/> */}
    <Route path='/redux' element={<ReduxProvider/>}/>
    <Route path='/ref' element={<UseRefExample/>}/>
  



 </Routes>
 </BrowserRouter>
 </Provider>

 
  //  {/* {profiles.map((p,i)=>  <App name={p.name} key={i} age={p.age} path={p.path}/> )} */}
  //  {/* <App/> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
