import React, { useState } from 'react';

export const Graph = () => {
    const img = [
        require("../Images/graph1.png"),
        require("../Images/graph2.png"),
        require("../Images/graph3.png"),
        require("../Images/graph4.png"),
        require("../Images/graph5.png"),
        require("../Images/graph6.png")
    ];

    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const handleButtonClick = (index) => {
        setCurrentImgIndex(index);
    };

    return (
        <div>
            <div className="graph-display">
                <p className='history-price'>Historic Gold Price</p>
                <div className='flex graph-wrap'>
                    <img src={img[currentImgIndex]} alt="Graph" />
                </div>
                <br/><br/>
                <div className='graph-buttons flex'>
                <button onClick={() => handleButtonClick(0)}>1 W</button>
                <button onClick={() => handleButtonClick(1)}>1 M</button>
                <button onClick={() => handleButtonClick(2)}>3 M</button>
                <button onClick={() => handleButtonClick(3)}>6 M</button>
                <button onClick={() => handleButtonClick(4)}>1 Y</button>
                <button onClick={() => handleButtonClick(5)}>Max</button>
                </div>
            </div>
        </div>
    );
};