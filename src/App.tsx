import React,{useState} from 'react';

const App = () => {


  return (
    <div className="App">
     <NavBar>
       <NavItem icon = "😀" >
         <Dropdown>
            HI
         </Dropdown>
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
 
  return (
  <div className="dropdown">
    <DropdownItem leftIcon = '' rightIcon = ''  >My Profile</DropdownItem>
    <DropdownItem  ></DropdownItem>
    <DropdownItem rightIcon = '👶' ></DropdownItem>
  </div>
  )
}

const DropdownItem = (props: any) => {

  return (
    <a href="#" className = "menu-item"> 

      <span className = "icon-button">{props.leftIcon}</span>

      {props.children} 

      <span className = "icon-button">{props.rightIcon}</span>

    </a>
  )
}

export default App;
