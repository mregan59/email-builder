import React from 'react';
import { Text, Column, Container, Row, Image } from '../base-components';
import { Button } from './Button';

interface SuccessGridProps {
    containerStyle?: React.CSSProperties,
    style?: React.CSSProperties,
    type: string
}



export const SuccessGrid: React.FC<SuccessGridProps> = ({ containerStyle, style, type }) => {

    const defaultContainerStyle = {
        marginTop: 16,
        marginBottom: 16,
    }

    const data = [
        {
            href: 'https://www.catholicmatch.com/about/her-chickens-caught-his-eye',
            text: `Beth & Andy were both looking for a second chance at love!`,
            src: `https://www.catholicmatch.com/institute/wp-content/uploads/2019/11/Beth-Andy-SuccessStory-4-e1574735386693-600x400.jpg`
        },
        {
            href: 'https://www.catholicmatch.com/about/her-chickens-caught-his-eye',
            text: `Beth & Andy were both looking for a second chance at love!`,
            src: `https://www.catholicmatch.com/institute/wp-content/uploads/2019/11/Beth-Andy-SuccessStory-4-e1574735386693-600x400.jpg`
        },
        {
            href: 'https://www.catholicmatch.com/about/her-chickens-caught-his-eye',
            text: `Beth & Andy were both looking for a second chance at love!`,
            src: `https://www.catholicmatch.com/institute/wp-content/uploads/2019/11/Beth-Andy-SuccessStory-4-e1574735386693-600x400.jpg`
        },
        {
            href: 'https://www.catholicmatch.com/about/her-chickens-caught-his-eye',
            text: `Beth & Andy were both looking for a second chance at love!`,
            src: `https://www.catholicmatch.com/institute/wp-content/uploads/2019/11/Beth-Andy-SuccessStory-4-e1574735386693-600x400.jpg`
        },
        {
            href: 'https://www.catholicmatch.com/about/her-chickens-caught-his-eye',
            text: `Beth & Andy were both looking for a second chance at love!`,
            src: `https://www.catholicmatch.com/institute/wp-content/uploads/2019/11/Beth-Andy-SuccessStory-4-e1574735386693-600x400.jpg`
        },
        {
            href: 'https://www.catholicmatch.com/about/her-chickens-caught-his-eye',
            text: `Beth & Andy were both looking for a second chance at love!`,
            src: `https://www.catholicmatch.com/institute/wp-content/uploads/2019/11/Beth-Andy-SuccessStory-4-e1574735386693-600x400.jpg`
        },
    ]

    const divorceData = data;
    const seniorData = data;

    let selectedData = type === 'divorced' ? divorceData : type === 'seniors' ? seniorData : data

    return (
        <Container alignment="center" style={{ ...defaultContainerStyle, ...containerStyle }}>
            <Row>
                {selectedData.map(story => {
                    return (
                        <Column small={6}>
                            <Row>
                                <a href={story.href} ><Image style={{ borderRadius: 10 }} src={story.src}></Image></a>
                                <Column small={12} style={{ padding: '8px 0 0 0' }}>
                                    <Button style={{ padding: 0, lineHeight: '18px', backgroundColor: 'white', textAlign: 'left', color: '#106fff' }} href={story.href} text={story.text}></Button>
                                </Column>
                            </Row>
                        </Column>)
                })}
            </Row>
        </Container>
    )
}

