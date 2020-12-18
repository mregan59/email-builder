import React from 'react';
import { Link, Column, Container, Row } from '../base-components';
import { ButtonProps, ButtonInContainerProps } from './types';



export const Button: React.FC<ButtonProps> = ({ text, href, style, }) => {

    const defaultStyle = {
        backgroundColor: '#106fff',
        padding: '10px 20px',
        fontWeight: 700,
        borderRadius: 6,
        color: 'white'
    }

    return (
        <Link style={{ ...defaultStyle, ...style }} href={href}>{text}</Link>
    )
}

export const ButtonInContainer: React.FC<ButtonInContainerProps> = ({ text, href, style, containerStyle, center }) => {
    const defaultStyle = {
        marginBottom: 16
    }

    return (
        <Container alignment="center" style={{ ...defaultStyle, ...containerStyle }}>
            <Row>
                <Column small={12} style={center ? { textAlign: 'center' } : {}}>
                    <Button style={style} href={href} text={text}></Button>
                </Column>
            </Row>
        </Container >
    )
}
