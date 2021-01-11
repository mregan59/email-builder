import { links, images } from '../../shared/links';
import { audience, subscription } from '../../shared/options.js';

export const emails = [
    {
        name: `Here's what to expect (everyone)`,
        audience: audience.all,
        subscription: subscription.premium,
        content: [
            {
                type: 'title',
                props: {
                    text: `Here's what to expect when you start <span class="highlight">dating online...</span>`,
                    style: {},
                },
            },
            {
                type: 'image',
                props: {
                    src: images.expectations,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Hi [[user.first_name]], 
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
