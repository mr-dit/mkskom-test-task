import style from "./UserMenuListItem.module.scss"
import {useEffect, useState} from "react";

const UserMenuListItem = ({svgPath, text}) => {
    const [svgContent, setSVGContent] = useState(null);

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

    return(<div className={style.item}>
            <div className={style.content}>
                {svgContent && (
                    <div dangerouslySetInnerHTML={{ __html: svgContent.toString() }} />
                )}
                <div className={style.dashboard}>{text}</div>
            </div>
        </div>
    )
}

export default UserMenuListItem