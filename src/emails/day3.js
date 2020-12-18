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
                        'How is online dating going <span class="highlight">for you</span>',
                    style: {},
                },
            },
            {
                type: 'image',
                props: {
                    src:
                        'https://d2q86h5pvn46dj.cloudfront.net/emails/images/exhausted.png',
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Hi [name],
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
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'textimage',
                props: {
                    text: `Liking other users' profiles`,
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'textimage',
                props: {
                    text: 'Viewing the users who have liked your profile',
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'textimage',
                props: {
                    text: 'Utlizing all of our advanced search options!',
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
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
                    text:
                        'To get the most out of the CatholicMatch community, we recommend switching to a Premium account to unlock all of our features!',
                    button: {
                        text: 'Switch to Premium',
                        href: links.subscribe,
                    },
                },
            },
        ],
    },
];
