import React, { useState, useEffect } from 'react';
import two from '/public/two.svg';
import one from '/public/one.svg';
import three from '/public/three.svg';
import four from '/public/four.svg';
import five from '/public/five.svg';
import Button from './ Button';
export function Acounnt() {
    const [counts, setCounts] = useState(() =>{
        const savedCounts = JSON.parse(localStorage.getItem('counts'));
        return savedCounts || [0, 0, 0, 0, 0]
    });

    useEffect(() => {
        localStorage.setItem('counts', JSON.stringify(counts));
    }, [counts]);

    const updateCount = (index) => {
        setCounts(counts.map((count, i) => i === index ? count + 1 : count));
    }

    return (
        <div className='ImgBlock'>
            <div>
                <img onClick={() => updateCount(0)} src={two} style={{width: '50px', height: '50px'}} />
                <>{counts[0]}</>
            </div>
            <div>
                <img onClick={() => updateCount(1)} src={one} style={{width: '50px', height: '50px'}} />
                <>{counts[1]}</>
            </div>
            <div>
                <img onClick={() => updateCount(2)} src={three} style={{width: '50px', height: '50px'}} />
                <>{counts[2]}</>
            </div>
            <div>
                <img onClick={() => updateCount(3)} src={four} style={{width: '50px', height: '50px'}} />
                <>{counts[3]}</>
            </div>
            <div>
                <img onClick={() => updateCount(4)} src={five} style={{width: '50px', height: '50px'}} />
                <>{counts[4]}</>
            </div>
            <div>
            <Button />
            </div>
        </div>
    );
}

export default Acounnt;