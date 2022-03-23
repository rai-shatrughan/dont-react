import Header from './Header';
import Footer from './Footer';

function Home() {
  return ( 
    <div>
    <Header />

    <div className="splash-container">
    <div className="splash">
        <h1 className="splash-head">Big Bold Text</h1>
        <p className="splash-subhead">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <p>
            <a href="/stream" className="pure-button pure-button-primary">Get Started</a>
        </p>
    </div>
    </div>

    <Footer />
    </div>
  );
}

export default Home;