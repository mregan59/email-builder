import React from 'react';
import { Text, Column, Container, Row, Image } from '../base-components';
import { Button } from './Button';
import { PremiumPromptProps } from './types';


export const PremiumPrompt: React.FC<PremiumPromptProps> = ({ header, text = null, button, style, containerStyle, center, }) => {

    const defaultContainerStyle = {
        marginTop: 0,
        marginBottom: 16,
        backgroundColor: '#106fff',
        padding: 20,
        borderRadius: 16,

    }

    let defaultText = text;
    if (!text && !header) {
        defaultText = 'To get the most out of the CatholicMatch community, switch to a Premium account and unlock all of our features! Use our New Member Discount and get 6 months for $9.99!';
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
                        {defaultText && <Column small={12} style={{ padding: 0, textAlign }}>
                            <Text style={{ color: 'white', fontWeight: 500, }}>{defaultText}</Text>
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

