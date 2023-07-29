import React, { useState } from 'react';
import styles from './Input.module.scss';

const Input = ({ leftIcon, rightIcon, placeholder, validateNumbers }) => {
    const [text, setText] = useState('');

    const handleInputChange = (event) => {
        const { value } = event.target;
        setText(validateNumbers ? value.replace(/[^0-9]/g, '') : value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Здесь можно обработать отправку данных или выполнить другую логику
        console.log('Submitted:', text);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formInput}>
                {leftIcon && (
                    <img src={leftIcon} alt="Left Icon" className={styles['left-icon']} />
                )}
                <input
                    type="text"
                    className={styles['text-input']}
                    value={text}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                />
                <button type="submit" className={styles['submit-button']}>
                    {rightIcon && (
                        <img src={rightIcon} alt="Right Icon" className={styles['right-icon']} />
                    )}
                </button>
            </div>
        </form>
    );
};

export default Input;
