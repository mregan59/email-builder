import { links, images, videos } from '../shared/links';

const createEmail = ({ name, text, type, showUpgrade }) => {
    return {
        name: name,
        forMembers: 'random',
        content: [
            {
                type: 'title',
                props: {
                    text: `Find your <span class="highlight">love story!</span>`,
                    style: {},
                },
            },
            {
                type: 'image',
                props: {
                    src:
                        images.bike,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: text,
                },
            },
            {
                type: 'successgrid',
                props: { type: type },
            },
            {
                type: 'paragraph',
                props: {
                    text: `While each of our couples has their own unique story, they do share something in common: they went into dating with an open mind.`,
                },
            },
            {
                type: 'title',
                props: {
                    text: `Be a part of your own Success Story!`,
                    style: {
                        fontSize: 36,
                        lineHeight: '40px',
                    },
                },
            },
            {
                type: 'video',
                props: {
                    videoLink: 'https://www.youtube.com/watch?v=Vi5ODRr96CA',
                    videoImg: videos.lizJohn,
                    roundedCorners: true,
                },
            },
            {
                type: 'paragraph',
                props: {
                    text: `Today, take some time to connect with new people online, even if they don't fit your "ideal match". After all, you never know who God has planned for you!
                    <br/><br/>
                    Sincerely,
                    <br/><br/>
                    The CatholicMatch Team`,
                },
            },
            showUpgrade
                ? {
                      type: 'premiumprompt',
                      props: {
                          text: `Right now, you can upgrade to CatholicMatch Premium for $9.99! Take advantage of this offer now!`,
                          button: {
                              text: 'Upgrade your account',
                              href: links.subscribe,
                          },
                      },
                  }
                : {},
        ],
    };
};

export const emails = [
    createEmail({
        name: 'Success Stories (divorce no upgrade)',
        text: `Hi [[user.first_name]],
        <br/><br/>
        Each week we are flooded with emails from couples who met on CatholicMatch and have recently gotten engaged or married. While their stories are all different, many of them have been divorced and went through the annulment process.
        <br/><br/>
        Their stories of finding love following a divorce can provide you with inspiration as you navigate the world of online dating. They will also remind you that your love story could be just around the corner…`,
        type: 'divorced',
        showUpgrade: true,
    }),
    createEmail({
        name: 'Success Stories (divorce upgraded)',
        text: `Hi [[user.first_name]],
        <br/><br/>
        Each week we are flooded with emails from couples who met on CatholicMatch and have recently gotten engaged or married. While their stories are all different, many of them have been divorced and went through the annulment process.
        <br/><br/>
        Their stories of finding love following a divorce can provide you with inspiration as you navigate the world of online dating. They will also remind you that your love story could be just around the corner…`,
        type: 'divorced',
        showUpgrade: false,
    }),
    createEmail({
        name: 'Success Stories (seniors no upgrade)',
        text: `Hi [[user.first_name]],
        <br/><br/>
        Each week we are flooded with emails from couples who met on CatholicMatch and have recently gotten engaged or married. While their stories are all different, many of them met online in their later years.
        <br/><br/>
        Their stories of finding love as an older single can provide you with inspiration as you navigate the world of online dating. They will also remind you that your love story could be just around the corner…`,
        type: 'seniors',
        showUpgrade: true,
    }),
    createEmail({
        name: 'Success Stories (seniors upgraded)',
        text: `Hi [[user.first_name]],
        <br/><br/>
        Each week we are flooded with emails from couples who met on CatholicMatch and have recently gotten engaged or married. While their stories are all different, many of them met online in their later years.
        <br/><br/>
        Their stories of finding love as an older single can provide you with inspiration as you navigate the world of online dating. They will also remind you that your love story could be just around the corner…`,
        type: 'seniors',
        showUpgrade: false,
    }),
    createEmail({
        name: 'Success Stories (no upgrade)',
        text: `Hi [[user.first_name]],
        <br/><br/>
        Each week we are flooded with emails from couples who met on CatholicMatch and have recently gotten married.
        <br/><br/>
        Their stories can provide you with inspiration as you navigate the world of online dating. They will also remind you that your love story could be just around the corner...`,
        type: null,
        showUpgrade: true,
    }),
    createEmail({
        name: 'Success Stories (upgraded)',
        text: `Hi [[user.first_name]],
        <br/><br/>
        Each week we are flooded with emails from couples who met on CatholicMatch and have recently gotten married.
        <br/><br/>
        Their stories can provide you with inspiration as you navigate the world of online dating. They will also remind you that your love story could be just around the corner...`,
        type: null,
        showUpgrade: false,
    }),
];
