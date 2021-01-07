import { links, images, videos } from '../shared/links';
export const emails = [
    {
        name: 'Welcome',
        forMembers: 'Upgraded',
        content: [
            {
                type: 'title',
                props: {
                    text:
                        'Congratulations and <span class="highlight">Welcome!</span>',
                },
            },
            {
                type: 'image',
                props: {
                    src:
                        'https://d2q86h5pvn46dj.cloudfront.net/emails/images/welcome_6_1.png',
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Dear [[user.first_name]],
                    <br/><br/>
                    You've just joined a community of singles who are looking for the same thing you are: a spouse who shares your faith!
                    <br/> <br/>
                    It's time to start meeting them...`,
                },
            },
            {
                type: 'button',
                props: {
                    text: 'Start Meeting Singles',
                    href: links.home,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `We want to ensure that you feel supported throughout your online dating experience. If you have any questions, visit our <a href="${links.faqs}">FAQ page</a> or contact our <a href="${links.support}">support team</a>.
                        <br/><br/>
                        Sincerely,
                        <br/> <br/>
                        The CatholicMatch Team`,
                },
            },
        ],
    },
    {
        name: 'Getting Started (no upgrade)',
        forMembers: 'Not Upgraded',
        content: [
            {
                type: 'title',
                props: {
                    text: `It's time to start meeting Catholic Singles!`,
                },
            },
            {
                type: 'image',
                props: {
                    src:
                        'https://d2q86h5pvn46dj.cloudfront.net/emails/images/welcome_faceless.png',
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Whether you're new to online dating or have been using it for a while, we have some advice...`,
                    style: { fontSize: 18, fontWeight: 500 },
                },
            },
            {
                type: 'video',
                props: {
                    videoLink:
                        'https://www.youtube.com/watch?v=amScOfplXEw&feature=emb_logo',
                    videoImg: videos.raphael,
                    roundedCorners: true,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `For more tips on getting started with CatholicMatch, check out our <a href='${links.faqs}'>FAQ page</a> or our <a href='${links.blog}'>blog</a>.
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
    {
        name: 'Getting Started (upgraded)',
        forMembers: 'Not Upgraded',
        content: [
            {
                type: 'title',
                props: {
                    text: `It's time to start meeting Catholic Singles!`,
                },
            },
            {
                type: 'image',
                props: {
                    src:
                        'https://d2q86h5pvn46dj.cloudfront.net/emails/images/welcome_faceless.png',
                },
            },

            {
                type: 'paragraph',
                props: {
                    text: `Whether you're new to online dating or have been using it for a while, we have some advice...`,
                    style: { fontSize: 18, fontWeight: 500 },
                },
            },
            {
                type: 'video',
                props: {
                    videoLink:
                    'https://www.youtube.com/watch?v=amScOfplXEw&feature=emb_logo',
                videoImg: videos.raphael,
                roundedCorners: true,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `For more tips on getting started with CatholicMatch, check out our <a href='${links.faqs}'>FAQ page</a> or our <a href='${links.blog}'>blog</a>.
                        <br/><br/>
                        Sincerely,
                        <br/><br/>
                        The CatholicMatch Team`,
                },
            },
        ],
    },
    {
        name: 'Online Dating Just Got Better',
        forMembers: 'Upgraded',
        content: [
            {
                type: 'title',
                props: {
                    text:
                        'Online Dating just got <span class="highlight">so much better</span> for you',
                },
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
                        Congratulations on your new Premium account with CatholicMatch!
                        <br/><br/>
                        Now it's time to start using all the features you just unlocked:`,
                },
            },
            {
                type: 'image',
                props: {
                    src: images.freePremiumComparison,
                    style: { width: 500 },
                },
            },
            {
                type: 'title',
                props: {
                    text: 'Use all our features to your advantage',
                    style: {
                        lineHeight: '36px',
                        color: '#106fff',
                        fontSize: 32,
                    },
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Start meeting people that interest you!',
                    text:
                        'With unlimited messages and likes, you can initiate conversations with anyone at any time.',

                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Discover who is interested in you!',
                    text:
                        'Now you can view your mutual likes and matches and choose who you want to get to know better.',

                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Start searching for "the one"!',
                    text:
                        'By unlocking all of our advanced search filters, you can narrow down your results and start searching for someone you really like.',

                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'Get support faster!',
                    text:
                        'With prioritized support, you can get answers and assistance from our support team sooner.',

                },
            },
        ],
    },
    {
        name: 'Complete Profile',
        forMembers: null,
        content: [
            {
                type: 'title',
                props: {
                    text: 'Complete your profile!',
                },
            },
            {
                type: 'image',
                props: {
                    src:
                        'https://d2q86h5pvn46dj.cloudfront.net/emails/images/build%20profile_1.png',
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Hi [[user.first_name]],
                <br/> <br/>
                Before you can start meeting singles, you need to finish setting up your CatholicMatch profile.`,
                },
            },
            {
                type: 'button',
                props: {
                    text: 'Complete your Profile',
                    href: links.editProfile,
                    center: true,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `If you have any questions about setting up your profile, visit our FAQ page or contact our support team!
                        <br/> <br/>
                        Sincerely,
                        <br/> <br/>
                        The CatholicMatch Team`,
                },
            },
        ],
    },
];
