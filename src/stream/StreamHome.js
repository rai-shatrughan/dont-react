import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Center from './Center';

class StreamHome extends React.Component {

    // constructor(props){
    //     super(props);        
    // }
    
    render() {
        return(
            <div className="flex-container fullPage">
                <Header></Header>
                <Center></Center>
                <Footer></Footer>
            </div>
        )
    }
  }

  export default StreamHome;