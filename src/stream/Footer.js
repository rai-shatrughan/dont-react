import React from 'react';

class Footer extends React.Component {

    // constructor(props){  
    //     super(props);        
    // }
    
    render() {
        return(
            <div className="flex-container footer">
                {/* <div className="footerItem footerLeft">&copy; 2022</div> */}
                <div className="footerItem footerRight">OpenSource by Shatrughan Rai</div>
            </div>
        )
    }
  }

  export default Footer;