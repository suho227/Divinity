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
                source: (doc: any) => doc.title?.ja,
                maxLength: 96,
                slugify: (input: string) =>
                    input
                        .toLowerCase()
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
        },

        {
            name: 'content',
            title: 'お知らせ内容',
            type: 'object',
            fields: [
                {
                    name: 'ko',
                    title: '한국어 내용',
                    type: 'array',
                    of: [{ type: 'block' }],
                },
                {
                    name: 'ja',
                    title: '日本語内容',
                    type: 'array',
                    of: [{ type: 'block' }],
                },
                {
                    name: 'en',
                    title: 'English Content',
                    type: 'array',
                    of: [{ type: 'block' }],
                },
                {
                    name: 'zh',
                    title: '中文内容',
                    type: 'array',
                    of: [{ type: 'block' }],
                },
            ],
        },

        {
            name: 'attachments',
            title: '添付ファイル',
            type: 'array',
            description: 'PDF、Word、Excelなどの書類を添付できます。',
            of: [
                {
                    type: 'file',
                    options: {
                        accept:
                            '.pdf,.doc,.docx,.xls,.xlsx,.csv,.hwp,.hwpx',
                    },
                    fields: [
                        {
                            name: 'displayName',
                            title: '表示名',
                            type: 'object',
                            fields: [
                                {
                                    name: 'ko',
                                    title: '한국어 파일명',
                                    type: 'string',
                                },
                                {
                                    name: 'ja',
                                    title: '日本語ファイル名',
                                    type: 'string',
                                },
                                {
                                    name: 'en',
                                    title: 'English File Name',
                                    type: 'string',
                                },
                                {
                                    name: 'zh',
                                    title: '中文文件名',
                                    type: 'string',
                                },
                            ],
                        },
                    ],
                },
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