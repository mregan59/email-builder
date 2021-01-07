import React, { useRef, useState, useEffect } from 'react';
import { emails as day1Emails } from '../../emails/day1';
import { emails as day2Emails } from '../../emails/day2';
import { emails as days3Email } from '../../emails/day3';
import { emails as day4Emails } from '../../emails/day4';
import { emails as day5Emails } from '../../emails/day5';
import { emails as day6Emails } from '../../emails/day6';
import { emails as day7Emails } from '../../emails/day7';
import { emails as day8Emails } from '../../emails/day8';
import { emails as day9Emails } from '../../emails/day9';
import { emails as day10Emails } from '../../emails/day10';
import { emails as day13Emails } from '../../emails/day13';
import { FlexBox, Card } from '../../components';
import './home.style.css';
import { saveAs } from 'file-saver';
import { renderHtml } from '../../base-components';
import OnboardingTemplate from '../../templates/OnboardingTemplate';

const days = [
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

export const Home = ({ setEmail }) => {
    // const [email, setEmail] = useState<any>(null);
    const [day, setDay] = useState(0);

    const [dayData, setDayData] = useState(days[0]);

    const allDays = () => {
        const onClick = () => {
            let array = [];
            days.forEach((d) => d.forEach((d2) => array.push(d2)));
            setDayData(array);
        };
        return (
            <FlexBox
                row
                justifybetween
                onClick={onClick}
                style={{ marginBottom: 16 }}
                className="menu-header-container"
            >
                <h3 className="menu-header">All Days</h3>
            </FlexBox>
        );
    };

    //  const emails = day
    const daysMenu = days.map((day1, i) => {
        return (
            <FlexBox>
                <FlexBox
                    row
                    justifybetween
                    onClick={() => setDayData(days[i])}
                    className="menu-header-container"
                >
                    <h3 className="menu-header">Day {i + 1}</h3>
                    <div className="menu-header">({day1.length})</div>
                </FlexBox>
                {day1.map((d) => {
                    return (
                        <FlexBox
                            className="menu-item"
                            onClick={() => setEmail(d)}
                        >
                            <h5>{d.name}</h5>
                        </FlexBox>
                    );
                })}
            </FlexBox>
        );
    });

    //  const emails = day
    const emailGrid = dayData.map((d, i) => {
        return <Card setEmail={setEmail} email={d}></Card>;
    });

    function pause(msec) {
        return new Promise(
            (resolve, reject) => {
                setTimeout(resolve, msec || 1000);
            }
        );
    }

    const downloadAll = async() => {
        let dataArry = [];
       days.forEach((d, index) => d.forEach((d2) => dataArry.push({day: index, email: d2})));
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

    return (
        <FlexBox flex1 row className="container">

            <FlexBox className="menu">
                {allDays()}
                {daysMenu}
            </FlexBox>
            <FlexBox row className="grid">
            <div onClick={downloadAll}>Download All</div>
                {emailGrid}
            </FlexBox>
        </FlexBox>
    );
};
