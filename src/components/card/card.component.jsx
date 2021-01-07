import React, { useEffect, useRef } from 'react';
import { FlexBox } from '../../components';
import { renderHtml } from '../../base-components';
import OnboardingTemplate from '../../templates/OnboardingTemplate';
import './card.styles.css';

export const Card = ({ setEmail, email }) => {
    const linkRef = useRef(null);
    const copyRef = useRef(null);
    const cardRef = useRef(null);
    useEffect(() => {
        console.log('email');
        console.log(email);
        const html = renderHtml(OnboardingTemplate, {
            lang: 'en',
            data: email.content,
        });
        if (linkRef && linkRef.current) {
            linkRef.current.setAttribute('download', `${email.name}.html`);
            linkRef.current.setAttribute(
                'href',
                'data:text/html;charset=utf-8,' + encodeURIComponent(html)
            );
        }
    }, []);

    const copyToClipboard = () => {
        const html = renderHtml(OnboardingTemplate, {
            lang: 'en',
            data: email.content,
        });
        navigator.clipboard.writeText(html);
    };

    const style = {
        backgroundColor: '#106fff',
        padding: '8px 10px',
        fontWeight: 700,
        color: 'white',
        borderRadius: 6,
        width: 100,
        textAlign: 'center',
        fontSize: 14,
        marginRight: 10,
        marginBottom: 5,
    };
    return (
        <FlexBox className="grid-item">
            <h4 className="grid-item-header">{email.name}</h4>
            <FlexBox row w100 style={{ padding: 8, paddingTop: 0 }}>
                <a
                    style={style}
                    ref={linkRef}
                    href=""
                    rel="noopener noreferrer"
                >
                    Download
                </a>
                <div style={style} onClick={copyToClipboard} ref={copyRef}>
                    Copy Html
                </div>
            </FlexBox>

            <div onClick={() => setEmail(email)} className="grid-item-scale">
                <div class="card-wrapper">
                    <OnboardingTemplate
                        data={email.content}
                    ></OnboardingTemplate>
                </div>
            </div>
        </FlexBox>
    );
};
