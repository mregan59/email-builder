import { links, images, videos } from '../../shared/links';
import { audience, subscription } from '../../shared/options.js';

export const emails = [
    {
        name: `Matched (everyone)`,
        audience: audience.all,
        subscription: subscription.both,
        content: [
            {
                type: 'title',
                props: {
                    text: `Looking for some <span class="highlight">(Catholic)</span> dating advice?`,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Hi [[user.first_name]],
                    <br/> <br/>
                    To help you kickstart your online dating journey, we have a special gift for you! 
                    <br/> <br/>
                    Enroll in our popular online dating course, Matched: The Definitive Course for Catholic Online Dating, for just [insert sale price]!
                    <br/> <br/>
                    Whether you’re new to online dating or have been using it for years, we know that everyone’s goal is to STOP online dating and meet someone already! And, this course will help you do just that.
                    <br/> <br/>
                    In the course you will learn how to:
                    `,
                },
            },
            {
                type: 'image',
                props: {
                    src: images.help,
                },
            },


            {
                type: 'grid',
                props: {
                    data:[
                        {
                        text: 'Connect with other singles.',
                        image: images.peopleTalking,

                    },
                        {
                        text: 'Attract the right person.',
                        image: images.texting,

                    },
                        {
                        text: 'Set up an awesome first date',
                        image: images.dateCoffee,

                    },
                        {
                        text:  'Start planning your future.',
                        image: images.wedding,

                    },
                ]

                },
            },
            {
                type: 'title',
                props: {
                    text: `Learn more about Matched: The Definitive Course for Online Dating!`,
                    style: {
                        fontSize: 32,
                        lineHeight: '36px',
                    },
                },
            },
            {
                type: 'video',
                props: {
                    videoImg: videos.matched,
                    videoLink: `https://www.facebook.com/watch/?v=10156334148703044`,
                    roundedCorners: true,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `...and SO much more!
                    <br/> <br/>
                    We hope this course will give you the tools you need to meet someone and get offline!
                        <br/> <br/>
                        Sincerely,
                        <br/> <br/>
                        The CatholicMatch Team`,
                },
            },
        ],
    },
];
