import React, { Component } from 'react';
import two from '/public/two.svg';
import one from '/public/one.svg';
import three from '/public/three.svg';
import four from '/public/four.svg';
import five from '/public/five.svg';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maxNumber: null,
            maxIndex: null,
        };
    }

    clickCount = () => {
        const savedArrayString = localStorage.getItem('counts');
        const savedArray = JSON.parse(savedArrayString);

        const maxNum = Math.max(...savedArray);
        const maxIdx = savedArray.indexOf(maxNum);

        this.setState({
            maxNumber: maxNum,
            maxIndex: maxIdx,
        });
    };

    clearCount = () => {
        localStorage.removeItem('counts');
        this.setState({
            maxNumber: null,
            maxIndex: null,
        });
    };

    render() {
        const { maxNumber, maxIndex } = this.state;
        const images = [two, one, three, four, five];

        return (
            <>
                <button onClick={this.clickCount}>Show Result</button>
                <div>
                    {maxNumber !== null && maxIndex !== null && (
                        <img
                            src={images[maxIndex]}
                            alt="Max Image"
                            style={{ width: '100px', height: '100px' }}
                        />
                    )}
                </div>
                <button onClick={this.clearCount}>Clear Result</button>
            </>
        );
    }
}

export default Button;
