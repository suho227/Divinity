export default {
    name: 'notice',
    title: 'お知らせ',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'お知らせタイトル',
            type: 'object',
            description: '日本語タイトルを優先して入力してください。',
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
                // 🌟 문자열 'title.ko' 대신, 아래와 같이 함수를 사용해야 정확히 값을 가져옵니다.
                source: (doc: any) => doc.title?.ja,
                maxLength: 96,
                // 🌟 제목이 없을 때 에러가 나지 않도록 설정을 추가할 수 있습니다.
                slugify: (input: string) => input
                    .toLowerCase()
                    .replace(/\s+/g, '-') // 공백을 하이픈으로 변경
                    .slice(0, 96)
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'publishedAt',
            title: '登録日時',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
        },
        {
            name: 'content',
            title: 'お知らせ内容',
            type: 'object',
            fields: [
                { name: 'ko', title: '한국어 내용', type: 'array', of: [{ type: 'block' }] },
                { name: 'ja', title: '日本語内容', type: 'array', of: [{ type: 'block' }] },
                { name: 'en', title: 'English Content', type: 'array', of: [{ type: 'block' }] },
                { name: 'zh', title: '中文内容', type: 'array', of: [{ type: 'block' }] },
            ],
        },
        {
            name: 'isImportant',
            title: '重要なお知らせ',
            type: 'boolean',
            initialValue: false,
        },
    ],
};