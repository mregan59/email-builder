import { links, images } from '../shared/links';
export const emails = [
    {
        name: `Rejection (everyone)`,
        forMembers: 'everyone',
        content: [
            {
                type: 'title',
                props: { text: `Rejection is never fun...` },
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
                    Rejection is never fun. But, it’s an unavoidable part of the dating process. No matter who you are or how you date...you’re going to be rejected sometimes. But, that’s okay. 
                    <br/> <br/>
                    You may feel that if EVERYONE doesn’t love you, then NOBODY ever will, but, that’s just not true!
                    `,
                },
            },
            {
                type: 'title',
                props: {
                    text: `The truth about rejection!`,
                    style: {
                        fontSize: 36,
                        lineHeight: '40px',
                    },
                },
            },
            {
                type: 'video',
                props: {
                    videoLink: `https://www.youtube.com/watch?v=Igi3Xh9ddv4`,
                    roundedCorners: true,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Don’t let your fear of rejection keep you from meeting your future spouse!
                        <br/> <br/>
                        Sincerely,
                        <br/> <br/>
                        The CatholicMatch Team`,
                },
            },
        ],
    },
];
