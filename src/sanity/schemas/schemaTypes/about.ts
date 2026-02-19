// src/sanity/schemas/schemaTypes/about.ts (예시)
export default {
    name: 'about',
    title: '학교 소개',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: '제목',
            type: 'object',
            fields: [
                { name: 'ko', type: 'string' },
                { name: 'ja', type: 'string' }
            ]
        },
        {
            name: 'content',
            title: '내용',
            type: 'object',
            fields: [
                { name: 'ko', type: 'array', of: [{ type: 'block' }] },
                { name: 'ja', type: 'array', of: [{ type: 'block' }] }
            ]
        }
    ]
}