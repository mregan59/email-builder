import React, { useRef, useState, useEffect } from 'react';
import { emails as day1Emails } from '../../emails/onboarding/day1';
import { emails as day2Emails } from '../../emails/onboarding/day2';
import { emails as days3Email } from '../../emails/onboarding/day3';
import { emails as day4Emails } from '../../emails/onboarding/day4';
import { emails as day5Emails } from '../../emails/onboarding/day5';
import { emails as day6Emails } from '../../emails/onboarding/day6';
import { emails as day7Emails } from '../../emails/onboarding/day7';
import { emails as day8Emails } from '../../emails/onboarding/day8';
import { emails as day9Emails } from '../../emails/onboarding/day9';
import { emails as day10Emails } from '../../emails/onboarding/day10';
import { emails as day13Emails } from '../../emails/onboarding/day13';
import { emails as HoursFree } from '../../emails/triggers/72-hours-free';
import { FlexBox, Card } from '../../components';
import './home.style.css';
import { saveAs } from 'file-saver';
import { renderHtml } from '../../base-components';
import OnboardingTemplate from '../../templates/OnboardingTemplate';
import {Menu} from '../../components/menu';

const onboardingEmails = [
    [...day1Emails, ...day2Emails,  ...days3Email,  ...day4Emails,  ...day5Emails, ...day6Emails,...day7Emails,...day8Emails,...day9Emails,...day10Emails,...day13Emails,],
    day1Emails,
    day2Emails,
    days3Email,
    day4Emails,
    day5Emails,
    day6Emails,
    day7Emails,
    day8Emails,
    day9Emails,
    day10Emails,
    [],
    [],
    day13Emails,
];
const triggerEmails = [
    HoursFree
];

export const Home = ({ setEmail }) => {
    // const [email, setEmail] = useState<any>(null);
    const [day, setDay] = useState(0);

    const [selectedData, setSelectedData] = useState(onboardingEmails)
    const [group, setGroup] = useState(selectedData[0])

    useEffect(()=>{
        setGroup(selectedData[0]);
    }, [selectedData])

   // const [dayData, setDayData] = useState(days[0]);

    // const allDays = () => {
    //     const onClick = () => {
    //         let array = [];
    //         days.forEach((d) => d.forEach((d2) => array.push(d2)));
    //         setDayData(array);
    //     };
    //     return (
    //         <FlexBox
    //             row
    //             justifybetween
    //             onClick={onClick}
    //             style={{ marginBottom: 16 }}
    //             className="menu-header-container"
    //         >
    //             <h3 className="menu-header">All Days</h3>
    //         </FlexBox>
    //     );
    // };




    //  const emails = day
    const emailGrid = group.map((d, i) => {
        return <Card setEmail={setEmail} email={d}></Card>;
    });

    const downloadAll = async() => {
        let dataArry = [];
       selectedData.forEach((d, index) => d.forEach((d2) => dataArry.push({day: index, email: d2})));
       dataArry.forEach(async(d2, i ) =>{
           setTimeout(()=>{
            console.log(d2);
            const email = d2.email;
            const day = d2.day;

            const html = renderHtml(OnboardingTemplate, {
                lang: 'en',
                data: email.content,
            });
            console.log('here')
            var blob = new Blob([html], {type: "text/html;charset=utf-8"});
            saveAs(blob, `day${day+1}_${email.name}.html`);

           }, 300*i)

        });

    }

    const newData = {
        onboarding: onboardingEmails,
        trigger: triggerEmails
    }

    return (
        <FlexBox flex1 row className="container">
            <Menu data={newData}
            onGroupChange={d => setSelectedData(d)}
            onEmailChange={e => setEmail(e)}
            onEmailGroupChange={g => setGroup(g)}></Menu>
            {/* <FlexBox className="menu">
                {allDays()}
            </FlexBox> */}
            <FlexBox row className="grid">
            <div onClick={downloadAll}>Download All</div>
                {emailGrid}
            </FlexBox>
        </FlexBox>
    );
};
