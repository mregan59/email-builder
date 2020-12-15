export const emails = [
    {
        name: 'Welcome',
        forMembers: 'Upgraded',
        content: [
            {
                type: 'title',
                props: {
                    text: 'Congratulations and <highlight>Welcome!</highlight>',
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
                    text: `Dear Marian,
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
                    hre: 'https://www.catholicmatch.com/',
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `We want to ensure that you feel supported throughout your online dating experience. If you have any questions, visit our <a href="www.google.com">FAQ page</a> or contact our <a href="www.google.com">support team</a>.
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
                    text: `It's time to start meeting <highlight>singles</highlight>!`,
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
                    style: { fontSize: 18, fontWeight: 600 },
                },
            },
            {
                type: 'video',
                props: {
                    src: 'https://img.youtube.com/vi/amScOfplXEw/sddefault.jpg',
                    roundedCorners: true,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `For more tips on getting started with CatholicMatch, check out our FAQ page or our blog.
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
                        href: 'http://catholicmatch.com/subscribe',
                    },
                },
            },
        ],
    },
    {
        name: 'Start Meeting Members',
        forMembers: 'Upgraded',
        content: [
            {
                type: 'title',
                props: { text: 'This is <highlight>my title</highlight>' },
            },
            {
                type: 'image',
                props: {
                    src:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'paragraph',
                props: { text: 'Dear Whomever,' },
            },
            {
                type: 'paragraph',
                props: {
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                },
            },
            {
                type: 'button',
                props: {
                    text: 'This is my button',
                    hre: 'www.catholicmatch.com',
                },
            },
            {
                type: 'paragraph',
                props: {
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'This is a header',
                    text: 'This is some text',
                    button: { text: 'Click Me', href: 'www.google.com' },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'textimage',
                props: {
                    text: 'This is some text',
                    button: { text: 'Click Me', href: 'www.google.com' },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'textimage',
                props: {
                    text: 'This is some text',
                    imageOnRight: true,
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
        ],
    },
    {
        name: 'Date Better',
        forMembers: 'Upgraded',
        content: [
            {
                type: 'title',
                props: { text: 'This is <highlight>my title</highlight>' },
            },
            {
                type: 'image',
                props: {
                    src:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'paragraph',
                props: { text: 'Dear Whomever,' },
            },
            {
                type: 'paragraph',
                props: {
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                },
            },
            {
                type: 'button',
                props: {
                    text: 'This is my button',
                    hre: 'www.catholicmatch.com',
                },
            },
            {
                type: 'paragraph',
                props: {
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'This is a header',
                    text: 'This is some text',
                    button: { text: 'Click Me', href: 'www.google.com' },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'textimage',
                props: {
                    text: 'This is some text',
                    button: { text: 'Click Me', href: 'www.google.com' },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'textimage',
                props: {
                    text: 'This is some text',
                    imageOnRight: true,
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
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
                props: { text: 'This is <highlight>my title</highlight>' },
            },
            {
                type: 'image',
                props: {
                    src:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'paragraph',
                props: { text: 'Dear Whomever,' },
            },
            {
                type: 'paragraph',
                props: {
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                },
            },
            {
                type: 'button',
                props: {
                    text: 'This is my button',
                    hre: 'www.catholicmatch.com',
                },
            },
            {
                type: 'paragraph',
                props: {
                    text:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
                },
            },
            {
                type: 'textimage',
                props: {
                    header: 'This is a header',
                    text: 'This is some text',
                    button: { text: 'Click Me', href: 'www.google.com' },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'textimage',
                props: {
                    text: 'This is some text',
                    button: { text: 'Click Me', href: 'www.google.com' },
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
            {
                type: 'textimage',
                props: {
                    text: 'This is some text',
                    imageOnRight: true,
                    image:
                        'https://image.freepik.com/free-vector/vintage-christmas-tree-with-gifts_23-2148759404.jpg',
                },
            },
        ],
    },
];
