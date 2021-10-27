import React from 'react';

export default class Video extends React.Component{
    constructor(props){
        super(props);
        this.loadVideo = this.loadVideo.bind(this)
    }

    loadVideo(){
        const videoNumber = this.props.videoNumber === null? 1: this.props.videoNumber;

        switch(videoNumber){
            case 1:
                return './video/Cheeta.mov';
            case 2:
                return './video/caramujo.mov';
            case 3:
                return './video/cuteCat.mov';
            default:
                break;
        }
    }

    render(){
        return(
            <section>
                <div>
                    <video width="500px" autoPlay controls>
                        <source src={this.loadVideo()} />
                    </video>
                </div>
            </section>
        )
    }
}