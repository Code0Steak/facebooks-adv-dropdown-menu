import React from 'react';

const App = () => {
  return (
    <div className="App">
     <NavBar>
       <NavItem icon = "😀" />
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
  return (
    <li className = "nav-item">
      <a href = "#" className = "icon-button">
        {props.icon}
      </a>
    </li>
  );
}

export default App;
