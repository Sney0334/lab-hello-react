
import './App.css';
import logo from './logo.svg';
import ironhack from './images/ironhack-logo-xs.png';
import menu from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png'

function SayHello(){
  return(
    

    <div>
      <img class="logo" src={ironhack} alt="IronHackLogo"/>
      <img class="menu" src={menu} alt="Menu"/>
      <h1>Say hello to ReactJS</h1>
      <p>You will learm how to use</p>
      <p>the most popular forntend library,</p>
      <p>and become a super Ninja developer.</p>
      <div className="button">
        <button>Awesome!</button></div>
       <div class="images">
       <img src={icon1} alt="icon1" title="Declaration" description="React makes it painless to create interactive Uis."/>
        <img src={icon2} alt="icon2"/>
        <img src={icon3} alt="icon3"/>
        <img src={icon4} alt="icon4"/>
         </div> 
    </div>
    
  )
}

function App() {
  return (
    <div className="App">
      <SayHello />
    </div>
  );
}




export default App;
