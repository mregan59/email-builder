import React from 'react';
import ReactDOMServer from 'react-dom/server';

export const renderEmail = (Template: React.FunctionComponent, emailData?: object, headStyles?: string): string => {
    const docType = '<!DOCTYPE html>';
    const props: any = { headStyles, ...emailData };
    const templateElement = React.createElement(Template, { ...props });
    const content = ReactDOMServer.renderToStaticMarkup(templateElement);

    return `${docType}${content}`;
};


export const renderHtml = renderEmail;
