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
        {name: 'ko', title: '한국어 제목', type: 'string'},
        {name: 'ja', title: '日本語タイトル', type: 'string'},
        {name: 'en', title: 'English Title', type: 'string'},
        {name: 'zh', title: '中文标题', type: 'string'},
      ],
      validation: (Rule: any) => Rule.required(),
    },

    {
      name: 'slug',
      title: '주소(Slug)',
      type: 'slug',
      options: {
        source: (doc: any) =>
          doc.title?.ko ||
          doc.title?.ja ||
          doc.title?.en ||
          doc.title?.zh,

        maxLength: 96,

        slugify: (input: string) =>
          input
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
        {
          name: 'ko',
          title: '한국어 내용',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                {
                  title: '일반',
                  value: 'normal',
                },
              ],
              lists: [],
              marks: {
                decorators: [],
                annotations: [],
              },
            },
          ],
        },

        {
          name: 'ja',
          title: '日本語内容',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                {
                  title: '通常',
                  value: 'normal',
                },
              ],
              lists: [],
              marks: {
                decorators: [],
                annotations: [],
              },
            },
          ],
        },

        {
          name: 'en',
          title: 'English Content',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                {
                  title: 'Normal',
                  value: 'normal',
                },
              ],
              lists: [],
              marks: {
                decorators: [],
                annotations: [],
              },
            },
          ],
        },

        {
          name: 'zh',
          title: '中文内容',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [
                {
                  title: '正文',
                  value: 'normal',
                },
              ],
              lists: [],
              marks: {
                decorators: [],
                annotations: [],
              },
            },
          ],
        },
      ],
    },

    {
      name: 'attachments',
      title: '첨부 파일',
      type: 'array',
      description: 'PDF, Word, Excel 등의 문서를 첨부할 수 있습니다.',
      of: [
        {
          type: 'file',
          options: {
            accept:
              '.pdf,.doc,.docx,.xls,.xlsx,.csv,.hwp,.hwpx',
          },
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