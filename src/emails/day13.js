import { links, images } from '../shared/links';

export const emails = [
    {
        name: `It's time to meet someone!`,
        forMembers: 'no upgrade',
        content: [
            {
                type: 'title',
                props: {
                    text:
                        'How is online dating going for you?',
                    style: {},
                },
            },
            {
                type: 'image',
                props: {
                    src:
                        images.messaging
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Hi [[user.first_name]],
                    <br/><br/>
                    How has online dating been going for you?
                    <br/><br/>
                    If you're serious about dating, we have one simple suggestion...switch to CatholicMatch Premium!
                    <br/><br/>
                    When you upgrade your account, you unlock all of our features which make finding your future spouse that much easier!
                    <br/><br/>
                    To help you date better, we're offering CatholicMatch Premium for just [insert price] so you can start utilizing all of our features now!`,
                },
            },
            {
                type: 'button',
                props: {
                    text: 'Switch to Premium',
                    href: links.subscribe,
                    center: true,
                },
            },
            {
                type: 'title',
                props: {
                    text: `Serious about find your future spouse? Here's why you should consider upgrading`,
                    style: {
                        fontSize: 32,
                        lineHeight: '36px',
                    },
                },
            },
            {
                type: 'image',
                props: {
                    src: images.freePremiumComparison,
                    style: { width: 600 },
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Hurry though, this offer won’t last much longer!
                    <br/><br/>
                    Sincerely,
                    <br/><br/>
                    The CatholicMatch Team`,
                },
            },
            {
                type: 'premiumprompt',
                props: {
                    button: {
                        text: 'Switch to Premium',
                        href: links.subscribe,
                    },
                },
            },
        ],
    },
];
