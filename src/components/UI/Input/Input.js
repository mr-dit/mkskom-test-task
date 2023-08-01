import { useState } from 'react';
import style from './Input.module.scss';

const Input = ({ leftIcon, rightIcon, placeholder, validateNumbers, onSubmit }) => {
    const [text, setText] = useState('');

    const handleInputChange = (event) => {
        const value  = event.target.value;
        setText(validateNumbers ? value.replace(/[^0-9]/g, '') : value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(text);
    };

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <div className={style.formInput}>
                {leftIcon && (
                    <img src={leftIcon} alt="Left Icon" className={style.leftIcon} />
                )}
                <input
                    type="text"
                    className={style.textInput}
                    value={text}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                />
                <button type="submit" className={style.submitButton}>
                    {rightIcon && (
                        <img src={rightIcon} alt="Right Icon" />
                    )}
                </button>
            </div>
        </form>
    );
};

export default Input;
