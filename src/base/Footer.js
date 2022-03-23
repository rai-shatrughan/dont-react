import 'purecss/build/buttons.css';
import 'purecss/build/pure-min.css';
import 'purecss/build/grids-responsive-min.css';
import './Base.css';

const items = ["OpenSource by Shatrughan Rai"];

export default function Footer() {
  return (
            <div class="pure-g">
            {items.map((item) =>
                <div class="pure-u-1 pure-u-md-1-1 footer"> 
                <a class="pure-button" href="#">{item}</a>
                </div>
            )}    
            </div>
  );
}