import React from 'react';
import { Text, Column, Container, Row, FullWidth, Image as BaseImage } from '../base-components';
import { ImageProps } from './types';


export const Image: React.FC<ImageProps> = ({ roundedCorners, containerStyle, style, ...rest }) => {

    const defaultImageStyle = {
        width: 300,
        borderRadius: roundedCorners ? 10 : 0,
    }
    const defaultContainerStyle = {
        marginTop: 16,
        marginBottom: 16,
    }

    return (
        <Container alignment="center" style={{ ...defaultContainerStyle, ...containerStyle }}>
            <Row>
                <Column small={12} style={{ textAlign: 'center' }}>
                    <BaseImage style={{ ...defaultImageStyle, ...style }} {...rest}></BaseImage>
                </Column>
            </Row>
        </Container>
    )
}
