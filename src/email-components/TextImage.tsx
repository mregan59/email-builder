import React from 'react';
import { Text, Column, Container, Row, Image } from '../base-components';
import { Button } from './Button';
import { TextImageProps } from './types';



export const TextImage: React.FC<TextImageProps> = ({ header, text, button, style, headerStyle, containerStyle, image, imageOnRight, is5050 }) => {

    const defaultContainerStyle = {
        marginTop: 16,
        marginBottom: 16,
    }

    return (
        <Container alignment="center" style={{ ...defaultContainerStyle, ...containerStyle }}>
            <Row>
                {(image && !imageOnRight) && <Column small={is5050 ? 6 : 3}>
                    <Image style={{ width: 120 }} src={image}></Image>
                </Column>}
                <Column small={!image ? 12 : is5050 ? 6 : 9}>
                    <Row>
                        {header && <Column small={12} style={{ padding: 0, marginBottom: 6 }}>
                            <Text style={{ fontSize: 20, fontWeight: 700, ...headerStyle }}>{header}</Text>
                        </Column>}
                        {text && <Column small={12} style={{ padding: 0 }}>
                            <Text style={{ color: '#000' }}>{text}</Text>
                        </Column>}
                        {button && <Column small={12} style={{ padding: '8px 0 0 0' }}>
                            <Button style={{ padding: 0, backgroundColor: 'white', textAlign: 'left', color: '#106fff' }} href={button.href} text={button.text}></Button>
                        </Column>}
                    </Row>
                </Column>
                {(image && imageOnRight) && <Column small={is5050 ? 6 : 3}>
                    <Image style={{ width: 120 }} src={image}></Image>
                </Column>}
            </Row>
        </Container>
    )
}

