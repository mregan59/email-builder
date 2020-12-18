import { links, images } from '../shared/links';

export const emails = [
    {
        name: `Here's what to expect (everyone)`,
        forMembers: 'Upgraded',
        content: [
            {
                type: 'title',
                props: {
                    text: `Here's what to expect when you start <span class="highlight">dating online</span>`,
                    style: {},
                },
            },
            {
                type: 'image',
                props: {
                    src: images.help,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Hi [name], 
                    <br/><br/>
                    What have you been told about online dating?
                    <br/><br/>
                    While everyone's online dating experience is unique, there are a few things that everyone should keep in mind.`,
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Have a little patience',
                    text: `Don't become frustrated when you don't meet "the one" right away! Most couples who have success with online dating spent months online before meeting each other.`,
                    button: {
                        text: 'Read more about dating with patience',
                        href: links.blog,
                    },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'A little effort goes a long way',
                    text: `After you create your profile, don't sit back and expect singles to suddenly connect with you. In order to meet people, you have to put in some effort!`,
                    button: {
                        text: 'Read more about getting yourself out of there',
                        href: links.support,
                    },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Your mindset matters',
                    text: `Go into online dating with a positive mindset! Even if you feel negative about dating, don't let that deter you from meeting new people.`,
                    button: {
                        text: 'Read more about stopping negative thoughts',
                        href: links.safety,
                    },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Sincerely,
                    <br/><br/>
                    The CatholicMatch Team`,
                },
            },
        ],
    },
];
