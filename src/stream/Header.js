import React from 'react';

function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

class Header extends React.Component {

    constructor(props){        
        toggleTheme();
        super(props);       
    }    
    
    render() {
        return(
            <div className="flex-container header">
                <button className="switchTheme" onClick={toggleTheme}>switchTheme</button>
            </div>
        )
    }
  }

  export default Header;