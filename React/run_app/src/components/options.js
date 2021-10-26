import React from 'react';
import ReactDOM from 'react-dom';

export default class Options extends React.Component{
    render(){
        return(
           <form>
                <label for="fast">Fast</label>
                <input type="radio" id="fast" name="videoType" value="Fast" />

                <label for="low">Low</label>
                <input type="radio" id="low" name="videoType" value="Low" />
            
                <label for="cute">Cute</label>
                <input type="radio" id="cute" name="videoType" value="Cute" />
           </form>
        )
    }
}