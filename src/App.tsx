import React,{useState} from 'react';
import {CSSTransition} from 'react-transition-group';

const App = () => {


  return (
    <div className="App">
     <NavBar>
       <NavItem icon = "😀" >
         <Dropdown />
        </NavItem>
     </NavBar> 
    </div>
  );
}

const NavBar = (props: any) => {
  return (

    <nav className = "navbar">
      <ul className = "navbar-nav">
      {props.children}
      </ul>
    </nav>

  );
}

const NavItem = (props: any) => {

  let [open,setOpen] = useState(false);

  return (
    <li className = "nav-item">
      <a href = "#" className = "icon-button" onClick = {
        
        () => setOpen(!open)
      
      }>
        {props.icon}

        {open && props.children}
      </a>
    </li>
  );
}



const Dropdown = (props: any) => {
    

    
  const DropdownItem = (props: any) => {

    return (
      <a  className = "menu-item" onClick={ () => props.goToMenu && setActiveMenu(props.goToMenu)}> 
    
        {
          props.leftIcon &&
        <span className = "icon-button">{props.leftIcon}</span>

        }

        {props.children} 

        {
          props.rightIcon &&
        <span className = "icon-button">{props.rightIcon}</span>
      }
      </a>
    )
  }


  let [activeMenu,setActiveMenu] = useState('main');
  return (
  <div className="dropdown">
    <CSSTransition in = {activeMenu === 'main'} unmountOnExit timeout = {500} classNames="menu-primary">
      <div className="menu">

        <DropdownItem goToMenu="my-profile" >My Profile</DropdownItem>
        <DropdownItem rightIcon = '🍱' goToMenu="food-items" ></DropdownItem>
    

      </div>

    </CSSTransition>

    <CSSTransition in = {activeMenu === 'food-items'} unmountOnExit timeout = {500} classNames="menu-secondary">
      <div className="menu">
        
        <DropdownItem goToMenu="main">`${'🍕'}` Pizzas are bae</DropdownItem>
        <DropdownItem goToMenu="main">`${'🥓➕🍳'}` Perfect....!</DropdownItem>


      </div>

    </CSSTransition>
  </div>
  )
}



export default App;
