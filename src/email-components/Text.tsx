import React from 'react';
import { Text, Column, Container, Row, FullWidth } from '../base-components';
import { TextProps } from './types';

interface HighlightProps {
    text: string,
    highlight?: boolean
}


export const Title: React.FC<TextProps> = ({ text, style, containerStyle }) => {

    const defaultTextStyle = {
        fontSize: 46,
        lineHeight: '50px',
        fontWeight: 700,
        fontFamily: `Times,'Times New Roman',serif`,
    }

    const defaultContainerStyle = {
        marginTop: 16,
        marginBottom: 16,
    }


    const createMarkup = () => {
        return { __html: text };
    }

    return (
        <Container alignment="center" style={{ ...defaultContainerStyle, ...containerStyle }}>
            <Row>
                <Column small={12} style={{ textAlign: 'center' }}>
                    <Text style={{ ...defaultTextStyle, ...style }}><span dangerouslySetInnerHTML={createMarkup()}></span></Text>
                </Column>
            </Row>
        </Container >
    )
}

export const Paragraph: React.FC<TextProps> = ({ text, style, containerStyle, center }) => {

    const defaultTextStyle = {
        textAlign: center ? 'center' as const : 'left' as const,
        fontFamily: `'Nunito Sans', Arial,sans-serif`
    }
    const defaultContainerStyle = {
        // marginTop: 24,
        // marginBottom: 24,
    }
    const createMarkup = () => {
        return { __html: text };
    }

    return (
        <Container alignment="center" style={{ ...defaultContainerStyle, ...containerStyle }}>
            <Row>
                <Column small={12} >
                    <Text style={{ ...defaultTextStyle, ...style }}><span dangerouslySetInnerHTML={createMarkup()}></span></Text>
                </Column>
            </Row>
        </Container>
    )
}
