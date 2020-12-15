import React from 'react';
import { Text, Column, Container, Row, Image } from '../base-components';
import { Button } from './Button';
import { TextImageProps } from './types';



export const PremiumPrompt: React.FC<TextImageProps> = ({ header, text, button, style, containerStyle, image, imageOnRight, is5050 }) => {

    const defaultContainerStyle = {
        marginTop: 16,
        marginBottom: 16,
        backgroundColor: '#106fff',
        padding: 20,
        borderRadius: 16,

    }

    return (
        <Container alignment="center" >
            <Row>

                <Column small={12}>
                    <Row style={{ ...defaultContainerStyle, ...containerStyle }}>
                        {text && <Column small={12} style={{ padding: 0 }}>
                            <Text style={{ color: 'white', fontWeight: 600, }}>{text}</Text>
                        </Column>}
                        {button && <Column small={12} style={{ padding: '16px 0 0 0' }}>
                            <Button style={{ backgroundColor: '#084aae' }} href={button.href} text={button.text}></Button>
                        </Column>}
                    </Row>
                </Column>

            </Row>
        </Container>
    )
}

