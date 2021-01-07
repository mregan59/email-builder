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
    SuccessGrid,
    Grid,
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
            case 'successgrid':
                return <SuccessGrid {...props}></SuccessGrid>;
            case 'grid':
                return <Grid {...props}></Grid>;
            default:
                return null;
        }
    };
    console.log(data);
    const content = data.map((item) => {
        return getType(item.type, item.props);
    });

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
                ]}
            >
                <Header
                    logo="https://d2q86h5pvn46dj.cloudfront.net/resources/cm_logo_blue.png"
                    logoWidth={150}
                    style={{ marginBottom: 24, marginTop: 24 }}
                />
                <FullWidth style={{ marginBottom: 24 }}> {content}</FullWidth>
                <Footer></Footer>
            </Email>
        </PostonentsProvider>
    );
};

export default OnboardingTemplate;
