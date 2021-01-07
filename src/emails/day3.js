import { links, images } from '../shared/links';

export const emails = [
    {
        name: `Why haven't you upgraded? (no upgrade)`,
        forMembers: 'no upgrade',
        content: [
            {
                type: 'title',
                props: {
                    text:
                        'How is online dating going for for you?',
                    style: {},
                },
            },
            {
                type: 'image',
                props: {
                    src: images.messaging
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Hi [[user.first_name]],
                    <br/><br/>
                    You've been online for a few days now. Is there anything that could be going better?
                    <br/><br/>
                    Some of the best (and easiest) ways to improve your online dating experience are through small actions such as:`,
                },
            },
            {
                type: 'textimage',
                props: {
                    text: 'Sending messages to multiple users',

                },
            },
            {
                type: 'textimage',
                props: {
                    text: `Liking other users' profiles`,

                },
            },
            {
                type: 'textimage',
                props: {
                    text: 'Viewing the users who have liked your profile',

                },
            },
            {
                type: 'textimage',
                props: {
                    text: 'Utlizing all of our advanced search options!',

                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `To help you date better, we're offering CatholicMatch Premium for just [insert price] so you can start utilizing all of our features now!`,
                },
            },
            {
                type: 'button',
                props: {
                    text: 'Upgrade my Account',
                    href: links.subscribe,
                    center: true,
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
