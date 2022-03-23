import 'purecss/build/buttons.css';
import 'purecss/build/pure-min.css';
import './Base.css';

const items = ["Home", "Stream", "ML", "Trends", "Metrics"];

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


export default function Header() {
  return (
            <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                <ul className="pure-menu-list">
                        {items.map((item) => 
                            <li className="pure-menu-item" key={item}>
                            <a href={item} className="pure-menu-link">{item}</a>
                            </li>
                        )}
                    <li className="pure-menu-item switchTheme"><a href="#" onClick={toggleTheme} className="pure-menu-link">switchTheme</a></li>
                </ul>                
            </div>
  );
}