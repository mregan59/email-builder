import React from 'react';
import { Text, Column, Container, Row, Image } from '../base-components';

interface GridProps {
    containerStyle?: React.CSSProperties,
    style?: React.CSSProperties,
    data: any
}



export const Grid: React.FC<GridProps> = ({ containerStyle, style, data }) => {

    const defaultContainerStyle = {
        marginTop: 16,
        marginBottom: 16,
    }

    return (
        <Container alignment="center" style={{ ...defaultContainerStyle, ...containerStyle }}>
            <Row>
                {data.map((item: any) => {
                    return (
                        <Column small={6} style={{ textAlign: 'center', padding: 5, height: 330, }}>
                            <div style={{ padding: 20, height: '100%', width: '100%', backgroundColor: '#ececec' }}><Image style={{ borderRadius: 10, padding: 50, paddingBottom: 12 }} src={item.image}></Image>

                                <div><Text style={{ paddingTop: 10, fontSize: 24, fontWeight: 700, }}>{item.text}</Text></div></div>
                        </Column>)
                })}
            </Row>
        </Container >
    )
}

