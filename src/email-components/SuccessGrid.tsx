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
            href: 'https://www.catholicmatch.com/about/he-knew-second-date',
            text: `Breanna & Ross thought they couldn't handle the long-distance.`,
            src: `https://d2q86h5pvn46dj.cloudfront.net/emails/success-stories/success%201.jpg`
        },
        {
            href: 'https://www.catholicmatch.com/about/an-online-algorithm-matched-us',
            text: `Carol & Zach only started talking after the algorithm matched them.`,
            src: `https://d2q86h5pvn46dj.cloudfront.net/emails/success-stories/success%202.jpg`
        },
        {
            href: 'https://www.catholicmatch.com/about/she-sent-the-first-message',
            text: `Adamma & Emmanuel went to school together and hadn't met!`,
            src: `https://d2q86h5pvn46dj.cloudfront.net/emails/success-stories/success%203.jpeg`
        },
        {
            href: 'https://www.catholicmatch.com/about/she-didnt-mind-his-purple-mini-van',
            text: `Jim & Megan met after she tried CatholicMatch for one month.`,
            src: `https://d2q86h5pvn46dj.cloudfront.net/emails/success-stories/success%204.jpg`
        },
        {
            href: 'https://www.catholicmatch.com/about/i-wasnt-meeting-any-guys-at-daily-mass-or-adoration',
            text: `Paul & Stephanie were both nervous about online dating!`,
            src: `https://d2q86h5pvn46dj.cloudfront.net/emails/success-stories/success%205.jpg`
        },
        {
            href: 'https://www.catholicmatch.com/about/she-didnt-mind-his-purple-mini-van',
            text: `Jocelyn & John Paul both thought they'd be single for life!`,
            src: `https://d2q86h5pvn46dj.cloudfront.net/emails/success-stories/success%206.jpg`
        },
    ]

    const divorcedData = [
        {
            href: 'https://www.catholicmatch.com/about/her-chickens-caught-his-eye',
            text: `Beth & Andy were both looking for a second chance at love!`,
            src: `https://d2q86h5pvn46dj.cloudfront.net/emails/success-stories/divorced%20success%201.jpg`
        },
        {
            href: 'https://www.catholicmatch.com/about/these-60-somethings-unexpectedly-found-love',
            text: `Debbie & Robert weren't planning on dating after getting divorced.`,
            src: `https://d2q86h5pvn46dj.cloudfront.net/emails/success-stories/divorced%20success%202.jpg`
        },
        {
            href: 'https://www.catholicmatch.com/about/these-single-parents-found-each-other-online',
            text: `Heather & Phillip bonded over being single parents.`,
            src: `https://d2q86h5pvn46dj.cloudfront.net/emails/success-stories/divorced%20success%203.jpg`
        },
        {
            href: 'https://www.catholicmatch.com/about/polar-opposite-what-i-wanted',
            text: `Debra & Stephen thought they weren't good for each other.`,
            src: `https://d2q86h5pvn46dj.cloudfront.net/emails/success-stories/divorced%20success%205.jpeg`
        },
        {
            href: 'https://www.catholicmatch.com/about/his-rosary-got-caught-on-her-dress',
            text: `Natalia & Jason had to learn to let go of each others' past relationships.`,
            src: `https://d2q86h5pvn46dj.cloudfront.net/emails/success-stories/divorced%20success%206.png`
        },
        {
            href: 'https://www.catholicmatch.com/about/she-got-three-proposals',
            text: `Ana & Dane agree that their love was worth waiting for.`,
            src: `https://d2q86h5pvn46dj.cloudfront.net/emails/success-stories/divorced%20success%204.jpg`
        },
    ]
    const seniorsData = [
        {
            href: 'https://www.catholicmatch.com/about/they-have-88-years-of-marriage-combined',
            text: `Mary Anne & John are proof that love can be found at any age!`,
            src: `https://d2q86h5pvn46dj.cloudfront.net/emails/success-stories/senior%20success%201.jpg`
        },
        {
            href: 'https://www.catholicmatch.com/about/he-said-humuhumunukunukuapuaa-at-the-honeymoon-reveal',
            text: `Clara & David had to start their lives all over again.`,
            src: `https://d2q86h5pvn46dj.cloudfront.net/emails/success-stories/senior%20success%202.jpg`
        },
        {
            href: 'https://www.catholicmatch.com/about/at-68-jody-discovered-it-is-never-too-late',
            text: `Jody & Jerry thought love had passed them by.`,
            src: `https://d2q86h5pvn46dj.cloudfront.net/emails/success-stories/senior%20success%203.jpg`
        },
        {
            href: 'https://www.catholicmatch.com/about/a-match-made-in-church-bulletins',
            text: `Betty & Tom thought they weren't ready to date again.`,
            src: `https://d2q86h5pvn46dj.cloudfront.net/emails/success-stories/senior%20success%204.jpg`
        },
        {
            href: 'https://www.catholicmatch.com/about/he-thought-hed-be-single-for-life',
            text: `Margot & Chris thought they were going to be single forever.`,
            src: `https://d2q86h5pvn46dj.cloudfront.net/emails/success-stories/senior%20success%205.png`
        },
        {
            href: 'https://www.catholicmatch.com/about/it-took-claire-12-years-online-to-find-tom',
            text: `Claire & Tom were on and off CatholicMatch for 12 years!`,
            src: `https://d2q86h5pvn46dj.cloudfront.net/emails/success-stories/senior%20success%206.jpg`
        },
    ]


    let selectedData = type === 'divorced' ? divorcedData : type === 'seniors' ? seniorsData : data

    return (
        <Container alignment="center" style={{ ...defaultContainerStyle, ...containerStyle }}>
            <Row>
                {selectedData.map(story => {
                    return (
                        <Column small={6}>
                            <a href={story.href} ><Image style={{ borderRadius: 10 }} src={story.src}></Image></a>
                            <Button style={{ padding: 0, marginTop: 8, lineHeight: '18px', backgroundColor: 'white', textAlign: 'left', color: '#106fff' }} href={story.href} text={story.text}></Button>
                        </Column>)
                })}
            </Row>
        </Container>
    )
}

