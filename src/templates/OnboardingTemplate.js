import React from 'react';

// These are the imports for storybook to work. The components would be imported like this:
import {
    Email,
    Container,
    Row,
    Column,
    Header,
    FullWidth,
    Text,
    Link,
    PostonentsProvider,
} from '../base-components';
import {
    ButtonInContainer,
    Title,
    Paragraph,
    TextImage,
    Footer,
    Image,
    PremiumPrompt,
    Video,
} from '../email-components';
// Data here represents the Example Data we might get passed to from the backend.
// This can be anything and you need to define it beforehand

const OnboardingTemplate = ({ data }) => {
    const getType = (type, props) => {
        switch (type) {
            case 'title':
                return <Title {...props}></Title>;
            case 'image':
                return <Image width={300} {...props}></Image>;
            case 'paragraph':
                return <Paragraph {...props}></Paragraph>;
            case 'button':
                return <ButtonInContainer {...props}></ButtonInContainer>;
            case 'textimage':
                return <TextImage {...props}></TextImage>;
            case 'premiumprompt':
                return <PremiumPrompt {...props}></PremiumPrompt>;
            case 'video':
                return <Video {...props}></Video>;
            default:
                return null;
        }
    };

    const content = data.map((item) => {
        return getType(item.type, item.props);
    });

    //const { verifyToken, email } = data;
    const email = 'hi';

    const theme = {
        colors: {
            text: '#000',
            bodyBg: '#fff',
            footerBg: '#fff',
            footerText: '#000',
            primary: '#106fff',
            primaryBg: '#fff',
        },
        typo: {
            fontFamily: 'Nunito Sans, sans-serif',
            fontSize: '16px',
            lineHeight: '24px',
            light: 400,
            normal: 400,
            bold: 700,
        },
    };
    return (
        <PostonentsProvider theme={theme}>
            <Email
                headLinks={[
                    {
                        type: 'link',
                        props: {
                            rel: 'stylesheet',
                            href:
                                'https://fonts.googleapis.com/css?family=Nunito+Sans:400,500,600,700',
                        },
                    },
                    {
                        type: 'link',
                        props: {
                            rel: 'stylesheet',
                            href:
                                'https://fonts.googleapis.com/css?family=Playfair+Display:600',
                        },
                    },
                ]}
            >
                <Header
                    logo="https://d2q86h5pvn46dj.cloudfront.net/resources/cm_logo_blue.png"
                    logoWidth={150}
                    style={{ marginBottom: 24, marginTop: 24 }}
                />
                <FullWidth style={{ marginBottom: 24 }}> {content}</FullWidth>

                {/* <Container alignment="center" >
                    <Row style={{ marginBottom: 24 }}>
                        <Column style={{ textAlign: 'center' }} small={12}>
                            <Text style={{ fontSize: 46, fontFamily: 'Playfair Display' }}>{myData.title}</Text>
                        </Column>
                    </Row>
                    <Row style={{ marginBottom: 24 }}>
                        <Column style={{ textAlign: 'center' }} small={12}>
                            <Image src={myData.mainImage}></Image>
                        </Column>
                    </Row>
                </Container>
                <Container alignment="center">
                    <Row>
                        <Column small={12}>
                            <Text>{myData.salutation}</Text>
                        </Column>
                        <Column small={12} style={{ marginBottom: 24 }}>
                            <Text>
                                {myData.text}
                            </Text>
                        </Column>
                        <Column small={12} style={{ marginBottom: 24 }}>
                            <Link style={{ backgroundColor: '#106fff', padding: '10px 20px', fontWeight: 700, borderRadius: 6, color: 'white' }} href="https://support.example.com">{myData.button}</Link>
                        </Column>
                    </Row>
                </Container>
                <FullWidth style={{ marginBottom: 24 }}>
                    <Container alignment="center">
                        <Row>
                            <Column small={3}>
                                <Image style={{ width: 120 }} src="https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg"></Image>
                            </Column>
                            <Column small={9}>
                                <Row>
                                    <Column small={12} style={{ padding: 0 }}>
                                        <Text style={{ fontSize: 18, fontWeight: 700 }}>This is a header</Text>
                                    </Column>
                                    <Column small={12} style={{ padding: 0 }}>
                                        <Text>Any other questions? We are happy to help!</Text>
                                    </Column>
                                    <Column small={12} style={{ padding: '16px 0 0 0' }}>
                                        <Link style={{ backgroundColor: '#106fff', padding: '10px 20px', fontWeight: 700, borderRadius: 6, color: 'white' }} href="https://support.example.com">{myData.button}</Link>
                                    </Column>
                                </Row>
                            </Column>
                        </Row>
                    </Container>
                </FullWidth> */}
                <Footer></Footer>
            </Email>
        </PostonentsProvider>
    );
};

export default OnboardingTemplate;
