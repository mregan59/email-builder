import React from 'react';
import { Text, Column, Container, Row, Link, Image, Footer as BaseFooter } from '../base-components';
import { FooterProps } from './types';


export const Footer: React.FC<FooterProps> = ({ style, containerStyle, }) => {

    const defaultContainerStyle = {
        marginTop: 24,
        marginBottom: 24,
    }

    const socialStyle = {
        margin: 12
    }

    return (
        <BaseFooter style={{ ...defaultContainerStyle, ...containerStyle }}>
            <Container alignment="center">
                <Row>
                    <Column style={{ textAlign: 'center', fontSize: 12, lineHeight: '16px', fontWeight: 300 }}>
                        <Link href="https://www.facebook.com/CatholicMatch/" style={{ ...socialStyle, ...style }}>
                            <Image height={32} width={32} src="https://d2q86h5pvn46dj.cloudfront.net/emails/templates/facebook2x.png"></Image>
                        </Link>
                        <Link href="https://www.instagram.com/catholicmatch/" style={{ ...socialStyle, ...style }}>
                            <Image height={32} width={32} src="https://d2q86h5pvn46dj.cloudfront.net/emails/templates/instagram2x.png"></Image>
                        </Link>
                        <Link href="https://www.pinterest.com/catholicmatch" style={{ ...socialStyle, ...style }}>
                            <Image height={32} width={32} src="https://d2q86h5pvn46dj.cloudfront.net/emails/templates/pinterest2x.png"></Image>
                        </Link>
                        <Link href="https://twitter.com/catholicmatch" style={{ ...socialStyle, ...style }}>
                            <Image height={32} width={32} src="https://d2q86h5pvn46dj.cloudfront.net/emails/templates/twitter2x.png"></Image>
                        </Link>
                        <Link href="https://www.youtube.com/catholicmatch" style={{ ...socialStyle, ...style }}>
                            <Image height={32} width={32} src="https://d2q86h5pvn46dj.cloudfront.net/emails/templates/youtube2x.png"></Image>
                        </Link>
                    </Column>
                    <Column style={{ textAlign: 'center', fontSize: 12, lineHeight: '16px', fontWeight: 300, color: '#b0b0b0' }}>
                        {`CatholicMatch is the premiere online service for single Catholics. To change the email notifications that you receive from us, sign in to http://www.catholicmatch.com and click on Account -> Email Settings.
<br/>
Our mailing address is: CatholicMatch, LLC PO Box 154 Zelienople, PA 16063`}
                    </Column>
                </Row>
            </Container>
        </BaseFooter>
    )
}
