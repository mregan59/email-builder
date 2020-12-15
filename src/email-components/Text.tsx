import React from 'react';
import { Text, Column, Container, Row, FullWidth } from '../base-components';
import { TextProps } from './types';

interface HighlightProps {
    text: string,
    highlight?: boolean
}


export const Title: React.FC<TextProps> = ({ text, style, containerStyle, highlight }) => {

    const defaultTextStyle = {
        fontSize: 46,
        lineHeight: '54px',
        fontFamily: 'Playfair Display',
    }


    const highlightStyle = {
        color: '#106fff',
        textDecoration: 'underline' as const

    }
    const defaultContainerStyle = {
        marginTop: 16,
        marginBottom: 16,
    }

    const getArrayTagsHtmlString = (str: string) => {
        let htmlSplit = str.split('<highlight>')
        let arrayElements: HighlightProps[] = []
        htmlSplit.forEach((element: string) => {
            if (element.includes("<")) {
                const secondSplit = element.split('</highlight>');
                secondSplit.forEach((el, i) => {
                    if (el != '') {
                        arrayElements.push({ text: el, highlight: i == 0 });
                    }
                })

            } else {
                arrayElements.push({ text: element })
            }

        })
        return arrayElements
    }

    const textSplit = text && getArrayTagsHtmlString(text);

    console.log(textSplit);

    return (
        <Container alignment="center" style={{ ...defaultContainerStyle, ...containerStyle }}>
            <Row>
                <Column small={12} style={{ textAlign: 'center' }}>
                    {textSplit && textSplit.map(txt => {
                        return <Text style={txt.highlight ? { ...defaultTextStyle, ...highlightStyle, ...style, } : { ...defaultTextStyle, ...style }}>{txt.text}</Text>

                    })}
                </Column>
            </Row>
        </Container >
    )
}

export const Paragraph: React.FC<TextProps> = ({ text, style, containerStyle, highlight }) => {

    const defaultTextStyle = {
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
