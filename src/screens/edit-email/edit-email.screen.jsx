import React, { useRef, useState, useEffect } from 'react';

import { renderHtml } from '../../base-components';
import OnboardingTemplate from '../../templates/OnboardingTemplate';
import { emails as day1Emails } from '../../emails/onboarding/day1';
import { emails as day2Emails } from '../../emails/onboarding/day2';
import { FlexBox } from '../../components';
import { Home } from '..';
import './edit-email.style.css';
import { useHistory } from 'react-router-dom';

export const EditEmail = ({ email, onClick }) => {
    const history = useHistory();
    const cardRef = useRef(null);
    const onClose = () => {
        onClick();
        history.go(-1);
    };
    if (!email) {
        return null;
    }
    return (
        <FlexBox flex1 row className="fixed-container">
            <div className="close-button" onClick={onClose}>
                Close
            </div>
            <FlexBox w100 aligncenter style={{ overflowY: 'scroll' }}>
                <OnboardingTemplate data={email.content}></OnboardingTemplate>
            </FlexBox>
        </FlexBox>
    );
};
