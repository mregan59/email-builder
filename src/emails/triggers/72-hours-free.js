import { links, images, videos } from '../../shared/links';
import { audience, subscription } from '../../shared/options.js';

export const emails = [
    {
        name: `72 Hours Free`,
        audience: audience.all,
        subscription: subscription.free,
        content: [
            {
                type: 'title',
                props: {
                    text: `Enjoy 72 hours of CatholicMatch Premium for <span class="highlight">FREE!</span>`,
                },
            },
            {
                type: 'image',
                props: {
                    src: images.messaging,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Dear [[user.first_name]],
                    <br/> <br/>
                    Each week we receive dozens of stories from happy members who used a CatholicMatch subscription to meet their future spouse.
                    <br/> <br/>
                    We are so confident that you will find our subscription worthwhile, we're offering you a FREE TRIAL for 72 hours!
                    <br/> <br/>
                    This offer will expire in 7 days and it is a ONE TIME offer!
                    `,
                },
            },
            {
                type: 'button',
                props: {
                    text: 'Get Your Free Subscription!',
                    href: links.subscribe,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `We wish you many blessings in your search!
                    <br/> <br/>
                    Sincerely,
                    <br/> <br/>
                    The CatholicMatch Team`,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `If you decide not to continue past the trial period, cancel your trial on your <a href="${links.account}">Account Page</a> within 72 hours and your card will not be charged. To continue past the trial period, take no action and your card will be charged in the amount of your chosen subscription at the end of the trial period.`,
                },
            },

        ],
    },
    {
        name: `72 Hours Free 2`,
        audience: audience.all,
        subscription: subscription.free,
        content: [
            {
                type: 'title',
                props: {
                    text: `Enjoy 72 hours of CatholicMatch Premium for <span class="highlight">FREE!</span>`,
                },
            },
            {
                type: 'image',
                props: {
                    src: images.messaging,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Dear [[user.first_name]],
                    <br/> <br/>
                    Each week we receive dozens of stories from happy members who used a CatholicMatch subscription to meet their future spouse.
                    <br/> <br/>
                    We are so confident that you will find our subscription worthwhile, we're offering you a FREE TRIAL for 72 hours!
                    <br/> <br/>
                    This offer will expire in 7 days and it is a ONE TIME offer!
                    `,
                },
            },
            {
                type: 'button',
                props: {
                    text: 'Get Your Free Subscription!',
                    href: links.subscribe,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `We wish you many blessings in your search!
                    <br/> <br/>
                    Sincerely,
                    <br/> <br/>
                    The CatholicMatch Team`,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `If you decide not to continue past the trial period, cancel your trial on your <a href="${links.account}">Account Page</a> within 72 hours and your card will not be charged. To continue past the trial period, take no action and your card will be charged in the amount of your chosen subscription at the end of the trial period.`,
                },
            },

        ],
    },
]