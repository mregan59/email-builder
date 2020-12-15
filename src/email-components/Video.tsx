import React from 'react';
import { Text, Column, Container, Row, FullWidth, Image as BaseImage } from '../base-components';
import { ImageProps } from './types';


export const Video: React.FC<ImageProps> = ({ roundedCorners, containerStyle, style, ...rest }) => {

    const defaultImageStyle = {
        width: '100%',
        borderRadius: roundedCorners ? 10 : 0,
    }
    const defaultContainerStyle = {
        marginTop: 16,
        marginBottom: 16,
    }

    const playStyle = {
        position: 'absolute' as const,
        top: 'calc(50% - 50px)',
        right: 'calc(50% - 50px)',
        height: 100,
        width: 100,
        zIndex: 50,
        color: 'white'
    }

    return (
        <Container alignment="center" style={{ ...defaultContainerStyle, ...containerStyle }}>
            <Row>
                <Column small={12} style={{ textAlign: 'center', position: 'relative' }}>
                    <BaseImage style={{ ...defaultImageStyle, ...style }} {...rest}></BaseImage>
                    <img className="play-button" style={playStyle} src="https://www.flaticon.com/svg/static/icons/svg/1562/1562715.svg" alt="play" />
                </Column>
            </Row>
        </Container>
    )
}
