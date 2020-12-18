import { links, images } from '../shared/links';
export const emails = [
    {
        name: `St. Raphael (everyone)`,
        forMembers: 'everyone',
        content: [
            {
                type: 'title',
                props: {
                    text: `Could you use a little <span class="highlight">Heavenly help</span>`,
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
                    text: `Dear [name],
                    <br/> <br/>
                    Did you know St. Raphael is the patron saint of happy meetings?
                    <br/> <br/>
                    This makes him the perfect saint to intercede for you during your dating years. Many CatholicMatch users have turned to St. Raphael as they began their search for their future spouse.
                    `,
                },
            },
            {
                type: 'title',
                props: {
                    text: `A novena to St. Raphael`,
                    style: {
                        fontSize: 36,
                        lineHeight: '40px',
                    },
                },
            },
            {
                type: 'video',
                props: {
                    videoLink: `https://www.youtube.com/watch?v=amScOfplXEw&feature=emb_logo`,
                    roundedCorners: true,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `If you could use a little heavenly help, we recommend praying the St. Raphael Novena.
                    <br/> <br/>
                    Many of our success story couples credit this novena for supporting them during their single years and leading them to “the one”!
                        <br/> <br/>
                        Sincerely,
                        <br/> <br/>
                        The CatholicMatch Team`,
                },
            },
        ],
    },
];
