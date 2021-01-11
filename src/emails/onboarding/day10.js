import { links, images, videos } from '../../shared/links';
import { audience, subscription } from '../../shared/options.js';
export const emails = [
    {
        name: `Dear Single Self (everyone)`,
        audience: audience.all,
        subscription: subscription.both,
        content: [
            {
                type: 'title',
                props: {
                    text: `Here's what they would go back and tell themselves...`,
                },
            },
            {
                type: 'image',
                props: {
                    src: images.letter,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Dear [[user.first_name]],
                    <br/> <br/>
                    We know being single isn’t easy. But, this season of your life won’t last forever!
                    <br/> <br/>
                    Recently, we asked a few of our success story couples to share the advice they wish they had been able to give their formally single selves. 
                    <br/> <br/>
                    We hope their answers can provide you with the support you need to continue your own dating journey!
                    `,
                },
            },
            {
                type: 'title',
                props: {
                    text: `David & Melissa`,
                    style: {
                        fontSize: 36,
                        lineHeight: '40px',
                    },
                },
            },
            {
                type: 'video',
                props: {
                    videoLink: `https://www.youtube.com/watch?v=XsrnYUKxU8s`,
                    videoImg: videos.letter1,
                    roundedCorners: true,
                },
            },
            {
                type: 'title',
                props: {
                    text: `Issac & Hannah`,
                    style: {
                        fontSize: 36,
                        lineHeight: '40px',
                    },
                },
            },
            {
                type: 'video',
                props: {
                    videoLink: `https://www.youtube.com/watch?v=_y0YsEb175U`,
                    videoImg: videos.letter2,
                    roundedCorners: true,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `
                        Sincerely,
                        <br/> <br/>
                        The CatholicMatch Team`,
                },
            },
        ],
    },
];
