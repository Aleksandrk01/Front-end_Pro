import React, { useState } from 'react';
import two from '/public/two.svg';
import one from '/public/one.svg';
import three from '/public/three.svg';
import four from '/public/four.svg';
import five from '/public/five.svg';

export function Button() {
    const [maxNumber, setMaxNumber] = useState(null);
    const [maxIndex, setMaxIndex] = useState(null);

    function clickCount() {
        const savedArrayString = localStorage.getItem('counts');
        const savedArray = JSON.parse(savedArrayString);

        const maxNum = Math.max(...savedArray);
        const maxIdx = savedArray.indexOf(maxNum);

        setMaxNumber(maxNum);
        setMaxIndex(maxIdx);
    }

    function clearCount() {
        localStorage.removeItem('counts');
        setMaxNumber(null);
        setMaxIndex(null);
    }

    const images = [two, one, three, four, five];

    return (
        <>
            <button onClick={clickCount}>Show Result</button>
            <div>
                {maxNumber !== null && maxIndex !== null && (
                    <img src={images[maxIndex]} alt="Max Image" style={{ width: '100px', height: '100px' }} />
                )}
            </div>
            <button onClick={clearCount}>Clear Result</button>
        </>
    );
}

export default Button;
