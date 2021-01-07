import React, { useRef, useEffect, useState } from 'react';
import { Column, Container, Row, FullWidth, } from '../base-components';
import { ImageProps } from './types';

interface VideoProps extends ImageProps {
    videoLink: string;
    videoImg?: string
}


export const Video: React.FC<VideoProps> = ({ roundedCorners, containerStyle, style, videoLink, videoImg, ...rest }) => {
    const imageRef = useRef<any>(null);

    const defaultImageStyle = {
        width: '100%',
        borderRadius: roundedCorners ? 10 : 0,
    }
    const defaultContainerStyle = {
        marginTop: 16,
        marginBottom: 16,
    }


    return (
        <Container alignment="center" style={{ ...defaultContainerStyle, ...containerStyle }}>
            <Row>
                <Column small={12} style={{ textAlign: 'center', position: 'relative' }}>
                    <a href={videoLink}>
                        <img ref={imageRef} style={{ ...defaultImageStyle, ...style }} {...rest} src={videoImg}></img>

                    </a>


                </Column>
            </Row>

        </Container>
    )
}
