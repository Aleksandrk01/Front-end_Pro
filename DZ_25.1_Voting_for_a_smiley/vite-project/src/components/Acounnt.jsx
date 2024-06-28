import React, { Component } from 'react';
import two from '/public/two.svg';
import one from '/public/one.svg';
import three from '/public/three.svg';
import four from '/public/four.svg';
import five from '/public/five.svg';
import Button from './Buttons';

class Acounnt extends Component {
    constructor(props) {
        super(props);
        const savedCounts = JSON.parse(localStorage.getItem('counts'));
        this.state = {
            counts: savedCounts || [0, 0, 0, 0, 0],
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.counts !== this.state.counts) {
            localStorage.setItem('counts', JSON.stringify(this.state.counts));
        }
    }

    updateCount = (index) => {
        this.setState((prevState) => {
            const newCounts = prevState.counts.map((count, i) =>
                i === index ? count + 1 : count
            );
            return { counts: newCounts };
        });
    };

    render() {
        const { counts } = this.state;
        const images = [two, one, three, four, five];

        return (
            <div className='ImgBlock'>
                {images.map((image, index) => (
                    <div key={index}>
                        <img
                            onClick={() => this.updateCount(index)}
                            src={image}
                            style={{ width: '50px', height: '50px' }}
                            alt={`Image ${index + 1}`}
                        />
                        <>{counts[index]}</>
                    </div>
                ))}
                <div>
                    <Button />
                </div>
            </div>
        );
    }
}

export default Acounnt;
