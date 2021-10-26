import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import Options from './components/options';

class VideoDisplay extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Options />
                <Video />
            </div>
        );
    }
}

ReactDOM.render(
    <VideoDisplay/>,
    document.querySelector("#root")
)