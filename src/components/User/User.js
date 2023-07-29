import style from "./User.module.scss"

const User = ({img}) => {
    return (<>
            <div className={style.user}>
                <div className={style.avatar}>
                    <svg
                        className={style.base}
                        width="130"
                        height="130"
                        viewBox="0 0 130 130"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M65 130C100.899 130 130 100.899 130 65C130 29.1015 100.899 0 65 0C29.1015 0 0 29.1015 0 65C0 100.899 29.1015 130 65 130Z"
                            stroke="#DADEE6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <svg
                        className={style.base2}
                        width="130"
                        height="130"
                        viewBox="0 0 130 130"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g filter="url(#filter0_d_502_50838)">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M65 0C29.1015 0 0 29.1015 0 65C0 100.899 29.1015 130 65 130C100.899 130 130 100.899 130 65"
                                fill="#F7F8FA"
                            />
                        </g>
                        <defs>
                            <filter
                                id="filter0_d_502_50838"
                                x="-30"
                                y="-20"
                                width="190"
                                height="190"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dy="10"/>
                                <feGaussianBlur stdDeviation="15"/>
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 1 0 0 0 0 0.4 0 0 0 0 0.2 0 0 0 0.1 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow_502_50838"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow_502_50838"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>

                    <div className={style.avatarImage}>
                        <img className={style.base5} src={img} alt=""/>
                    </div>

                    <svg
                        className={style.line}
                        width="130"
                        height="130"
                        viewBox="0 0 130 130"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M65 0C29.1015 0 0 29.1015 0 65C0 100.899 29.1015 130 65 130V130C100.899 130 130 100.899 130 65"
                            stroke="#FF6633"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>

                <div className={style.badge}>
                    <div className={style.badge2}>2</div>
                </div>


            </div>
            <div className={style.userInfo}>
                <div>Hello Alfred Bryant</div>

                <div className={style.userInfoEmail}>adrain.nader@yahoo.com</div>
            </div>
        </>
    )
}

export default User