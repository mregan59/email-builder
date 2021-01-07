import { links, images, } from '../shared/links';
export const emails = [
    {
        name: `Here's how to meet someone (no upgrade)`,
        forMembers: 'no upgrade',
        content: [
            {
                type: 'title',
                props: { text: `Here's how you could attract someone...` },
            },
            {
                type: 'image',
                props: {
                    src: images.dateCoffee,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Hi [[user.first_name]], 
                <br/><br/>
                We know online dating isn't easy, but when you switch to CatholicMatch Premium, it becomes a whole lot easier! 
                <br/><br/>
                With a Premium account you access:`,
                },
            },

            {
                type: 'textimage',
                props: {
                    header: 'Unlimited messages & likes!',
                    text:
                        'A Premium subscription gives you the opportunity to message anyone at any time, so you can reach out to members who interest you.',
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Mutual likes & matches!',
                    text:
                        'Knowing who is interested in YOU makes all the difference! View who liked your profile or matched with you, then decide if you want to get to know them better.',

                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'All our advanced search filters!',
                    text:
                        'Start searching for the right person for you. With a Premium subscription, you unlock all search options and can narrow down your results to find your ideal match.',
                    imageOnRight: true,

                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Prioritized support!',
                    text:
                        'Get support faster! Our support team is here to help answer any questions you have or assist you in your search, so you can date better.',
                    imageOnRight: true,

                },
            },
            {
                type: 'premiumprompt',
                props: {
                    center: true,
                    header:
                        'Take Advantage of all that CatholicMatch has to offer!',
                    button: {
                        text: 'Switch to Premium',
                        href: links.subscribe,
                    },
                },
            },
        ],
    },
];
