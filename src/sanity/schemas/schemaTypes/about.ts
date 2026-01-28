export const about = {
    name: 'about',
    title: '대학 소개 관리',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: '페이지 제목',
            type: 'object', // 언어별로 묶어주는 상자 역할을 합니다.
            fields: [
                { name: 'ko', title: '한국어', type: 'string' },
                { name: 'ja', title: '일본어', type: 'string' },
                { name: 'en', title: '영어', type: 'string' },
            ],
            options: { columns: 3 } // 관리자 화면에서 가로로 3줄 배치 (더 깔끔함)
        },
        {
            name: 'content',
            title: '소개 내용',
            type: 'object',
            fields: [
                { name: 'ko', title: '한국어 본문', type: 'text' },
                { name: 'ja', title: '일본어 본문', type: 'text' },
                { name: 'en', title: '영어 본문', type: 'text' },
            ]
        }
    ]
}