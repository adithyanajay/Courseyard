import React from 'react';
import './Buttons.css'

const Styles = [
    'btn--primary',
    'btn-outline'
]

const Sizes = [
    'btn--medium',
    'btn--large'
]

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = Styles.includes(buttonStyle) ? buttonStyle : Styles[0]
    const checkButtonSize = Sizes.includes(buttonSize) ? buttonSize : Sizes[0]
    return (
        <Button className ={`btn ${checkButtonStyle} ${checkButtonSize}`} OnClick={onClick} type={type}>
            {children}
        </Button>
    )
}