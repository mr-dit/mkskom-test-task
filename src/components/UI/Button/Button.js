import React, { useState, useEffect } from 'react';
import style from "./Button.module.scss";

const SVGButton = ({ svgPath, size="large" }) => {
    const [svgContent, setSVGContent] = useState(null);
    const [svgColor, setSVGColor] = useState('#C3CAD9');

    useEffect(() => {
        const fetchSVG = async () => {
            try {
                const response = await fetch(svgPath);
                const svgText = await response.text();
                setSVGContent(svgText);
            } catch (error) {
                console.error('Error fetching SVG:', error);
            }
        };
        fetchSVG();
    }, [svgPath]);

    const handleButtonClick = () => {
        setSVGColor(svgColor === '#C3CAD9' ? '#FF6633' : '#C3CAD9');
    };

    return (
        <button onClick={handleButtonClick} className={`${style.button} ${style[size]}`}>
            {svgContent && (
                <div dangerouslySetInnerHTML={{ __html: svgContent.replace('fill="#C3CAD9"', `fill="${svgColor}"`) }} />
            )}
        </button>
    );
};

export default SVGButton;
