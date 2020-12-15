import React, { useRef, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { renderHtml } from './base-components';
import OnboardingTemplate from './templates/OnboardingTemplate';
import { emails as day1Emails } from './emails/day1';
import { emails as day2Emails } from './emails/day2';
import { FlexBox } from './components';

const days = [day1Emails, day2Emails];

function App() {

    const linkRef = useRef<HTMLAnchorElement>(null);
    const [email, setEmail] = useState<any>(null);
    const [day, setDay] = useState<number>(0);

    // useEffect(() => {
    //     const html = renderHtml(OnboardingTemplate, {
    //         lang: 'en'
    //     });
    //     if (linkRef && linkRef.current) {
    //         linkRef.current.setAttribute('download', 'testHtml.html');
    //         linkRef.current.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(html));
    //     }

    // }, [])

    //  const emails = day
    const daysMenu = days.map((day, i) => {
        return (
            <FlexBox>
                <FlexBox onClick={() => setDay(i)} className="menu-header-container">
                    <h3 className="menu-header">Day {i + 1}</h3>
                </FlexBox>
                {day.map(d => {
                    return <FlexBox className="menu-item" onClick={() => setEmail(d)}>
                        <h5>{d.name}</h5>
                    </FlexBox>
                })
                }
            </FlexBox >)
    })

    //  const emails = day
    const emailGrid = days[day].map((d, i) => {
        return (
            <FlexBox className="grid-item" onClick={() => setEmail(d)}>
                <h4 className="grid-item-header">{d.name}</h4>
                <div className="grid-item-scale" >
                    <div style={{ transform: `scale(.9)` }}>
                        <OnboardingTemplate data={d.content}></OnboardingTemplate>
                    </div>
                </div>

            </FlexBox>)
    })

    return (
        <FlexBox column>
            {/* <a
                ref={linkRef}
                href=""
                rel="noopener noreferrer"
            >
                Download
        </a> */}
            <FlexBox flex1 row className="container">
                <FlexBox className="menu">
                    {daysMenu}
                </FlexBox>
                <FlexBox row className="grid">
                    {emailGrid}
                </FlexBox>

            </FlexBox>
            {email && <FlexBox flex1 row className="fixed-container">
                <div className="close-button" onClick={() => setEmail(null)}>
                    Close
                </div>
                <FlexBox w100 aligncenter style={{ overflowY: 'scroll' }}>
                    <OnboardingTemplate data={email.content}></OnboardingTemplate>
                </FlexBox>
            </FlexBox>}

        </FlexBox >
    );
}

export default App;
