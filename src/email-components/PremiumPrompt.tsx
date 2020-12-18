import React from 'react';
import { Text, Column, Container, Row, Image } from '../base-components';
import { Button } from './Button';
import { PremiumPromptProps } from './types';


export const PremiumPrompt: React.FC<PremiumPromptProps> = ({ header, text, button, style, containerStyle, center, }) => {

    const defaultContainerStyle = {
        marginTop: 0,
        marginBottom: 16,
        backgroundColor: '#106fff',
        padding: 20,
        borderRadius: 16,

    }

    const textAlign = center ? 'center' as const : 'left' as const;

    return (
        <Container alignment="center" >
            <Row>

                <Column small={12} style={{ ...defaultContainerStyle, ...containerStyle }}>
                    <Row>
                        {header && <Column small={12} style={{ padding: 0, marginBottom: 6, textAlign }}>
                            <Text style={{ color: 'white', fontSize: 20, fontWeight: 700 }}>{header}</Text>
                        </Column>}
                        {text && <Column small={12} style={{ padding: 0, textAlign }}>
                            <Text style={{ color: 'white', fontWeight: 500, }}>{text}</Text>
                        </Column>}
                        {button && <Column small={12} style={{ padding: '16px 0 0 0', textAlign }}>
                            <Button style={{ backgroundColor: '#084aae' }} href={button.href} text={button.text}></Button>
                        </Column>}
                    </Row>
                </Column>

            </Row>
        </Container>
    )
}

