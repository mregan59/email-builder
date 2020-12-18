import { links, images } from '../shared/links';

const image = images.dinner;

export const emails = [
    {
        name: 'Date Better (upgraded)',
        forMembers: 'Upgraded',
        content: [
            {
                type: 'title',
                props: {
                    text:
                        'Date Better with <span class="highlight">CatholicMatch</span>',
                    style: {},
                },
            },
            {
                type: 'image',
                props: {
                    src: image,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Hi [name],
                    <br/><br/>
                    We’re familiar with the highs and lows of online dating and we want to help you navigate them.
                    <br/><br/>
                    Follow these 4 steps to set yourself up for success with online dating:`,
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Get the advice you actually need.',
                    text:
                        'We know the unique struggle of dating after a divorce. Check out our blog and find resources on everything from the annulment process to finding love again.',
                    button: { text: 'Visit our Blog', href: links.blog },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Ask us anything!',
                    text: `We're always here for you. Our support team is a great resource for all things CatholicMatch: from improving your profile to troubleshooting issues.`,
                    button: {
                        text: 'Contact our support team',
                        href: links.support,
                    },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Play it safe.',
                    text:
                        'We want you to get outside of your dating comfort zone...safely! At CatholicMatch, we take safety seriously and it’s important for you to do the same.',
                    button: {
                        text: 'Learn more about safety',
                        href: links.safety,
                    },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Once you’re armed with these resources, you’ll be ready to make the most of your CatholicMatch community!
                    <br/><br/>
                    Sincerely,
                    <br/><br/>
                    The CatholicMatch Team`,
                },
            },
        ],
    },
    {
        name: 'Date Better (no upgrade)',
        forMembers: 'Upgraded',
        content: [
            {
                type: 'title',
                props: {
                    text:
                        'Date Better with <span class="highlight">CatholicMatch</span>',
                    style: {},
                },
            },
            {
                type: 'image',
                props: {
                    src: image,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Hi [name],
                    <br/><br/>
                    We’re familiar with the highs and lows of online dating and we want to help you navigate them.
                    <br/><br/>
                    Follow these 4 steps to set yourself up for success with online dating:`,
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Get the advice you actually need.',
                    text:
                        'We know the unique struggle of dating after a divorce. Check out our blog and find resources on everything from the annulment process to finding love again.',
                    button: { text: 'Visit our Blog', href: links.blog },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Ask us anything!',
                    text: `We're always here for you. Our support team is a great resource for all things CatholicMatch: from improving your profile to troubleshooting issues.`,
                    button: {
                        text: 'Contact our support team',
                        href: links.support,
                    },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Play it safe.',
                    text:
                        'We want you to get outside of your dating comfort zone...safely! At CatholicMatch, we take safety seriously and it’s important for you to do the same.',
                    button: {
                        text: 'Learn more about safety',
                        href: links.safety,
                    },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'premiumprompt',
                props: {
                    header: 'Get serious about dating.',
                    text: `Stop waiting for messages to unlock. Switch to a Premium account and unlock all of our features, including unlimited likes and messaging!`,
                    button: {
                        text: 'Upgrade your account',
                        href: links.subscribe,
                    },
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Once you’re armed with these resources, you’ll be ready to make the most of your CatholicMatch community!
                    <br/><br/>
                    Sincerely,
                    <br/><br/>
                    The CatholicMatch Team`,
                },
            },
        ],
    },
    {
        name: 'Date Better (divorced upgrade)',
        forMembers: 'Upgraded',
        content: [
            {
                type: 'title',
                props: {
                    text:
                        'Date Better with <span class="highlight">CatholicMatch</span>',
                    style: {},
                },
            },
            {
                type: 'image',
                props: {
                    src: image,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Hi [name],
                    <br/><br/>
                    We’re familiar with the highs and lows of dating after a divorce and we want to help you navigate them.
                    <br/><br/>
                    Follow these 4 steps to set yourself up for success with online dating:`,
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Get the advice you actually need.',
                    text:
                        'We know the unique struggle of dating after a divorce. Check out our blog and find resources on everything from the annulment process to finding love again.',
                    button: { text: 'Visit our Blog', href: links.blog },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Ask us anything!',
                    text: `We're always here for you. Our support team is a great resource for all things CatholicMatch: from improving your profile to troubleshooting issues.`,
                    button: {
                        text: 'Contact our support team',
                        href: links.support,
                    },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Play it safe.',
                    text:
                        'We want you to get outside of your dating comfort zone...safely! At CatholicMatch, we take safety seriously and it’s important for you to do the same.',
                    button: {
                        text: 'Learn more about safety',
                        href: links.safety,
                    },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },

            {
                type: 'paragraph',
                props: {
                    text: `Once you’re armed with these resources, you’ll be ready to make the most of your CatholicMatch community!
                    <br/><br/>
                    Sincerely,
                    <br/><br/>
                    The CatholicMatch Team`,
                },
            },
        ],
    },
    {
        name: 'Date Better (divorced no upgrade)',
        forMembers: 'Upgraded',
        content: [
            {
                type: 'title',
                props: {
                    text:
                        'Date Better with <span class="highlight">CatholicMatch</span>',
                    style: {},
                },
            },
            {
                type: 'image',
                props: {
                    src: image,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Hi [name],
                    <br/><br/>
                    We’re familiar with the highs and lows of dating after a divorce and we want to help you navigate them.
                    <br/><br/>
                    Follow these 4 steps to set yourself up for success with online dating:`,
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Get the advice you actually need.',
                    text:
                        'We know the unique struggle of dating after a divorce. Check out our blog and find resources on everything from the annulment process to finding love again.',
                    button: { text: 'Visit our Blog', href: links.blog },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Ask us anything!',
                    text: `We're always here for you. Our support team is a great resource for all things CatholicMatch: from improving your profile to troubleshooting issues.`,
                    button: {
                        text: 'Contact our support team',
                        href: links.support,
                    },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Play it safe.',
                    text:
                        'We want you to get outside of your dating comfort zone...safely! At CatholicMatch, we take safety seriously and it’s important for you to do the same.',
                    button: {
                        text: 'Learn more about safety',
                        href: links.safety,
                    },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'premiumprompt',
                props: {
                    header: 'Get serious about dating.',
                    text: `Stop waiting for messages to unlock. Switch to a Premium account and unlock all of our features, including unlimited likes and messaging!`,
                    button: {
                        text: 'Upgrade your account',
                        href: links.subscribe,
                    },
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Once you’re armed with these resources, you’ll be ready to make the most of your CatholicMatch community!
                    <br/><br/>
                    Sincerely,
                    <br/><br/>
                    The CatholicMatch Team`,
                },
            },
        ],
    },
    {
        name: 'Date Better (seniors upgraded)',
        forMembers: 'Upgraded',
        content: [
            {
                type: 'title',
                props: {
                    text:
                        'Date Better with <span class="highlight">CatholicMatch</span>',
                    style: {},
                },
            },
            {
                type: 'image',
                props: {
                    src: image,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Hi [name],
                    <br/><br/>
                    We’re familiar with the highs and lows of dating as an older single and we want to help you navigate them.
                    <br/><br/>
                    Follow these 4 steps to set yourself up for success with online dating:`,
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Get the advice you actually need.',
                    text:
                        'We know the unique struggle of dating after a divorce. Check out our blog and find resources on everything from the annulment process to finding love again.',
                    button: { text: 'Visit our Blog', href: links.blog },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Ask us anything!',
                    text: `We're always here for you. Our support team is a great resource for all things CatholicMatch: from improving your profile to troubleshooting issues.`,
                    button: {
                        text: 'Contact our support team',
                        href: links.support,
                    },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Play it safe.',
                    text:
                        'We want you to get outside of your dating comfort zone...safely! At CatholicMatch, we take safety seriously and it’s important for you to do the same.',
                    button: {
                        text: 'Learn more about safety',
                        href: links.safety,
                    },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Once you’re armed with these resources, you’ll be ready to make the most of your CatholicMatch community!
                    <br/><br/>
                    Sincerely,
                    <br/><br/>
                    The CatholicMatch Team`,
                },
            },
        ],
    },
    {
        name: 'Date Better (seniors no upgrade)',
        forMembers: 'Upgraded',
        content: [
            {
                type: 'title',
                props: {
                    text:
                        'Date Better with <span class="highlight">CatholicMatch</span>',
                    style: {},
                },
            },
            {
                type: 'image',
                props: {
                    src: image,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Hi [name],
                    <br/><br/>
                    We’re familiar with the highs and lows of dating as an older single and we want to help you navigate them.
                    <br/><br/>
                    Follow these 4 steps to set yourself up for success with online dating:`,
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Get the advice you actually need.',
                    text:
                        'We know the unique struggle of dating after a divorce. Check out our blog and find resources on everything from the annulment process to finding love again.',
                    button: { text: 'Visit our Blog', href: links.blog },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Ask us anything!',
                    text: `We're always here for you. Our support team is a great resource for all things CatholicMatch: from improving your profile to troubleshooting issues.`,
                    button: {
                        text: 'Contact our support team',
                        href: links.support,
                    },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Play it safe.',
                    text:
                        'We want you to get outside of your dating comfort zone...safely! At CatholicMatch, we take safety seriously and it’s important for you to do the same.',
                    button: {
                        text: 'Learn more about safety',
                        href: links.safety,
                    },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'premiumprompt',
                props: {
                    header: 'Get serious about dating.',
                    text: `Stop waiting for messages to unlock. Switch to a Premium account and unlock all of our features, including unlimited likes and messaging!`,
                    button: {
                        text: 'Upgrade your account',
                        href: links.subscribe,
                    },
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Once you’re armed with these resources, you’ll be ready to make the most of your CatholicMatch community!
                    <br/><br/>
                    Sincerely,
                    <br/><br/>
                    The CatholicMatch Team`,
                },
            },
        ],
    },
];
