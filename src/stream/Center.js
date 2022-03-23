import React from 'react';

const items = ["bigbuck", "ed", "testsrc", "smptebars"];

export default class Center extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: items,
        };
    } 

    videoPath = (item) => {
        let path = "http://localhost:3200/vs?key="+item
        // console.log(path)
        return path
    }

    filterVideo = (evt) =>  {
        const val = evt.target.value;
        console.log(val)
        if (val === ""){
            this.setState({items: items});
        } else {
        const filterItems = this.state.items.filter(item => item.match(val));
        this.setState({items: filterItems});
        }
    }


    render() {
        return(
            <div>
            <div className="flex-container center">                
            <input className="searchVideo" placeholder="search videos" onChange={evt => this.filterVideo(evt)}/>
            {this.state.items.map((item) =>
                <video className="videoItem" width="320" height="240" controls key={item}>
                    <source src={this.videoPath(item)} type="video/mp4"/>
                </video>
            )}
            </div>
            </div>
        )
    }

}