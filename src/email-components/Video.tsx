import React, { useRef, useEffect } from 'react';
import { Text, Column, Container, Row, FullWidth, Image as BaseImage } from '../base-components';
import { ImageProps } from './types';

interface VideoProps extends ImageProps {
    videoLink: string;
    videoPreviewImg?: string
}


export const Video: React.FC<VideoProps> = ({ roundedCorners, containerStyle, style, videoLink, videoPreviewImg, ...rest }) => {
    const imageRef = useRef<any>(null);

    useEffect(() => {
        if (imageRef) {
            console.log('imageRef.current');
            console.log(imageRef.current.height);
        }
    }, [imageRef])
    const defaultImageStyle = {
        width: '100%',
        borderRadius: roundedCorners ? 10 : 0,
    }
    const defaultContainerStyle = {
        marginTop: 16,
        marginBottom: 16,
    }

    const playStyle = {
        // marginTop: (imageRef && imageRef.current) ? (-imageRef.current.height / 2) - 50 : -100,
        // marginBottom: (imageRef && imageRef.current) ? (imageRef.current.height / 2) - 50 : -100,
        height: 100,
        width: 100,
        zIndex: 50,
        color: 'white'
    }
    const playContainer = {
        marginTop: (imageRef && imageRef.current) ? (-imageRef.current.height / 2) - 50 : -100,
        marginBottom: (imageRef && imageRef.current) ? (imageRef.current.height / 2) - 50 : 100,
    }

    function youtube_parser(url: string) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length === 11) ? match[7] : false;
    }
    let previewImg = null;
    if (videoPreviewImg) {
        previewImg = videoPreviewImg
    } else {
        const videoId = youtube_parser(videoLink);
        previewImg = `https://img.youtube.com/vi/${videoId}/0.jpg`
    }


    return (
        <Container alignment="center" style={{ ...defaultContainerStyle, ...containerStyle }}>
            <Row>
                <Column small={12} style={{ textAlign: 'center', position: 'relative' }}>
                    <a href={videoLink}>
                        <img ref={imageRef} style={{ ...defaultImageStyle, ...style }} {...rest} src={previewImg}></img>

                    </a>
                    <div style={playContainer}>
                        <BaseImage className="play-button" style={playStyle} src="https://d2q86h5pvn46dj.cloudfront.net/emails/images/play.png" />
                    </div>

                </Column>
            </Row>

        </Container>
    )
}
