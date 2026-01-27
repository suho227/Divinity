export default {
    name: 'about',
    title: '대학 소개 관리',
    type: 'document',
    fields: [
        {
            name: 'title_ko',
            title: '제목 (한국어)',
            type: 'string',
        },
        {
            name: 'title_ja',
            title: '제목 (일본어)',
            type: 'string',
        },
        {
            name: 'content_ko',
            title: '내용 (한국어)',
            type: 'text',
        },
        {
            name: 'content_ja',
            title: '내용 (일본어)',
            type: 'text',
        },
        {
            name: 'mainImage',
            title: '대표 이미지',
            type: 'image',
            options: { hotspot: true },
        },
    ],
};