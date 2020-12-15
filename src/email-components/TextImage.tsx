import React from 'react';
import { Text, Column, Container, Row, Image } from '../base-components';
import { Button } from './Button';
import { TextImageProps } from './types';



export const TextImage: React.FC<TextImageProps> = ({ header, text, button, style, containerStyle, image, imageOnRight, is5050 }) => {

    const defaultContainerStyle = {
        marginTop: 16,
        marginBottom: 16,
    }

    return (
        <Container alignment="center" style={{ ...defaultContainerStyle, ...containerStyle }}>
            <Row>
                {!imageOnRight && <Column small={is5050 ? 6 : 3}>
                    <Image style={{ width: 120 }} src="https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg"></Image>
                </Column>}
                <Column small={is5050 ? 6 : 9}>
                    <Row>
                        {header && <Column small={12} style={{ padding: 0 }}>
                            <Text style={{ fontSize: 18, fontWeight: 700 }}>This is a header</Text>
                        </Column>}
                        {text && <Column small={12} style={{ padding: 0 }}>
                            <Text>Any other questions? We are happy to help!</Text>
                        </Column>}
                        {button && <Column small={12} style={{ padding: '16px 0 0 0' }}>
                            <Button href={button.href} text={button.text}></Button>
                        </Column>}
                    </Row>
                </Column>
                {imageOnRight && <Column small={is5050 ? 6 : 3}>
                    <Image style={{ width: 120 }} src="https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg"></Image>
                </Column>}
            </Row>
        </Container>
    )
}

