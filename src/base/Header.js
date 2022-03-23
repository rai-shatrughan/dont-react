import 'purecss/build/buttons.css';
import 'purecss/build/pure-min.css';
import 'purecss/build/grids-responsive-min.css';
import './Base.css';

const items = ["Stream", "ML", "Trends", "Metrics"];
const siteName = "Shatrughan Rai"

export default function Header() {
  return (
        <div class="header">
            <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
                <a class="pure-menu-heading" href="">{siteName}</a>
                <ul class="pure-menu-list">
                    <li class="pure-menu-item pure-menu-selected"><a href="#" class="pure-menu-link">Home</a></li>
                    {items.map((item) => 
                        <li class="pure-menu-item"><a href={item} class="pure-menu-link">{item}</a></li>
                    )}
                </ul>
            </div>
        </div>
  );
}