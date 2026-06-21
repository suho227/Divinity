export default {
    name: 'admissionFormNotice',
    title: '入学書式のお知らせ',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'タイトル',
            type: 'object',
            fields: [
                { name: 'ko', title: '한국어 제목', type: 'string' },
                { name: 'ja', title: '日本語タイトル', type: 'string' },
                { name: 'en', title: 'English Title', type: 'string' },
                { name: 'zh', title: '中文标题', type: 'string' },
            ],
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: '주소(Slug)',
            type: 'slug',
            options: {
                source: (doc: any) => doc.title?.ko || doc.title?.ja || doc.title?.en || doc.title?.zh,
                maxLength: 96,
                slugify: (input: string) => input
                    .toLowerCase()
                    .replace(/[^\w\s-가-힣ぁ-んァ-ン一-龥]/g, '')
                    .replace(/\s+/g, '-')
                    .slice(0, 96),
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'publishedAt',
            title: '登録日時',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'content',
            title: '内容',
            type: 'object',
            fields: [
                { name: 'ko', title: '한국어 내용', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] },
                { name: 'ja', title: '日本語内容', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] },
                { name: 'en', title: 'English Content', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] },
                { name: 'zh', title: '中文内容', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] },
            ],
        },
        {
            name: 'fileUrl',
            title: '다운로드 파일 URL',
            type: 'url',
            description: '필요한 경우 외부 파일 또는 다운로드 링크를 입력하세요.',
        },
        {
            name: 'isImportant',
            title: '重要なお知らせ',
            type: 'boolean',
            initialValue: false,
        },
    ],
};