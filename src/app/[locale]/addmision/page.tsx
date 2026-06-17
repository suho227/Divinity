import { Link } from '@/navigation';

const localizedAdmissionContent = {
    ko: {
        eyebrow: 'Admissions',
        title: '입학안내',
        description: '도쿄국제신학교의 모집 과정, 지원 자격, 학비, 시간표 및 전형 절차를 안내합니다.',
        sideTitle: '입학정보',
        nav: ['모집과정', '지원자격', '전형일정', '제출서류', '학비안내', '시간표', '유의사항'],
        sections: {
            process: '모집과정 및 인원',
            eligibility: '지원자격',
            schedule: '전형방법 및 일정',
            documents: '제출서류',
            tuition: '학비 안내',
            timetable: '시간표',
            notices: '지원자 유의사항',
        },
        processHeaders: ['구분', '모집과정', '수업방법', '모집인원'],
        processRows: [
            ['신학과 학부 과정', 'B.Th. 과정', '야간', '00명'],
            ['신학연구과', 'M.Div. / Th.M. / Ph.D.', '주간', '00명'],
            ['일본어 학과', '일본어 집중 과정', '주간', '00명'],
        ],
        eligibility: [
            '고등학교 졸업 또는 이와 동등 이상의 학력이 인정되는 자',
            '본교의 교육 이념과 신앙 훈련에 성실히 참여할 의지가 있는 자',
            '목회자·선교사·평신도 지도자 등 복음 사역자로 준비되기를 원하는 자',
            '외국인 지원자는 일본 체류 및 학업에 필요한 자격을 갖추어야 합니다.',
        ],
        scheduleHeaders: ['절차', '일정', '내용'],
        scheduleRows: [
            ['원서 접수', '상시 접수', '방문·우편·이메일 접수'],
            ['서류 심사', '접수 후 개별 안내', '제출 서류 확인'],
            ['면접 전형', '개별 통보', '신앙 고백 및 학업 계획 확인'],
            ['합격 발표', '개별 통보', '등록 절차 안내'],
        ],
        documentHeaders: ['구분', '제출 서류'],
        documentRows: [
            ['공통 서류', '입학원서, 개인정보 수집·이용 동의서, 서약서'],
            ['학력 증빙', '최종학교 졸업증명서 및 성적증명서'],
            ['신앙 확인', '세례증명서 또는 교회 출석 확인서, 목회자 추천서'],
            ['외국인 지원자', '여권 사본, 체류자격 관련 서류, 학력 인증 서류'],
        ],
        bankTitle: '계좌 정보',
        bankHeaders: ['은행명', '지점명', '계좌번호', '명의'],
        bankRows: [['키라보시은행', '042 긴시초', '5027969', '아자부복음교회 도쿄국제신학교']],
        theologyTitle: '신학과',
        graduateTitle: '신학연구과',
        tuitionHeaders: ['항목', '1년차 입학 수속 시', '1년차 후기', '2년차 전기', '2년차 후기', '3년차 전기', '3년차 후기', '4년차 전기', '4년차 후기'],
        graduateHeaders: ['항목', '1년차 입학 수속 시', '1년차 후기', '2년차 전기', '2년차 후기', '3년차 전기', '3년차 후기'],
        theologyRows: [
            ['입학금', '50,000', '-', '-', '-', '-', '-', '-', '-'],
            ['수업료', '150,000', '150,000', '150,000', '150,000', '150,000', '150,000', '150,000', '150,000'],
            ['시설설비비', '50,000', '-', '50,000', '-', '50,000', '-', '50,000', '-'],
            ['소계', '250,000', '150,000', '200,000', '150,000', '200,000', '150,000', '200,000', '150,000'],
        ],
        graduateRows: [
            ['입학금', '50,000', '-', '-', '-', '-', '-'],
            ['수업료', '180,000', '180,000', '180,000', '180,000', '180,000', '180,000'],
            ['시설설비비', '50,000', '-', '50,000', '-', '50,000', '-'],
            ['소계', '280,000', '180,000', '230,000', '180,000', '230,000', '180,000'],
        ],
        timetableHeaders: ['과정', '요일', '교시', '시간'],
        timetableRows: [
            ['신학과 (야간)', '화', '1교시', '19:00 - 19:50'],
            ['신학과 (야간)', '화', '2교시', '20:00 - 20:50'],
            ['신학과 (야간)', '화', '3교시', '21:00 - 21:50'],
            ['신학연구과', '화', '1교시', '9:00 - 9:50'],
            ['신학연구과', '화', '2교시', '10:00 - 10:50'],
            ['신학연구과', '화', '3교시', '11:00 - 11:50'],
            ['신학연구과', '화', '점심', '12:00 - 13:00'],
            ['신학연구과', '화', '4교시', '13:00 - 13:50'],
            ['신학연구과', '화', '5교시', '14:00 - 14:50'],
            ['신학연구과', '화', '6교시', '15:00 - 15:50'],
        ],
        notices: [
            '지원자는 면접 당일 지정된 시간까지 본교가 안내한 면접 장소에 입실해야 합니다.',
            '제출 서류의 내용이 사실과 다를 경우 합격 또는 입학이 취소될 수 있습니다.',
            '제출된 서류와 전형료는 반환되지 않습니다.',
            '모집 일정과 세부 전형 내용은 학교 사정에 따라 변경될 수 있으며, 변경 사항은 공지사항으로 안내합니다.',
        ],
        ctaTitle: '입학 관련 문의',
        ctaDesc: '상세 모집 요강 및 최신 일정은 공지사항에서 확인해 주세요.',
        ctaButton: '공지사항 보기',
    },
    ja: {
        eyebrow: 'Admissions', title: '入学案内', description: '東京国際神学校の募集課程、出願資格、学費、時間割、選考手続きをご案内します。', sideTitle: '入学情報', nav: ['募集課程', '出願資格', '選考日程', '提出書類', '学費案内', '時間割', '注意事項'], sections: { process: '募集課程・定員', eligibility: '出願資格', schedule: '選考方法・日程', documents: '提出書類', tuition: '学費案内', timetable: '時間割', notices: '出願上の注意' }, processHeaders: ['区分', '募集課程', '授業形態', '募集人数'], processRows: [['神学科 学部課程', 'B.Th. 課程', '夜間', '00名'], ['神学研究科', 'M.Div. / Th.M. / Ph.D.', '昼間', '00名'], ['日本語学科', '日本語集中課程', '昼間', '00名']], eligibility: ['高等学校卒業または同等以上の学力が認められる方', '本校の教育理念と信仰訓練に誠実に参加する意思のある方', '牧会者・宣教師・信徒リーダーなど福音宣教者として備えられることを望む方', '外国籍の出願者は、日本での滞在および学業に必要な資格を備えている必要があります。'], scheduleHeaders: ['手続', '日程', '内容'], scheduleRows: [['願書受付', '随時受付', '持参・郵送・メール受付'], ['書類審査', '受付後個別案内', '提出書類確認'], ['面接選考', '個別通知', '信仰告白および学業計画確認'], ['合格発表', '個別通知', '入学手続案内']], documentHeaders: ['区分', '提出書類'], documentRows: [['共通書類', '入学願書、個人情報収集・利用同意書、誓約書'], ['学歴証明', '最終学校の卒業証明書および成績証明書'], ['信仰確認', '洗礼証明書または教会出席確認書、牧会者推薦書'], ['外国籍出願者', 'パスポート写し、在留資格関連書類、学歴認証書類']], bankTitle: '口座情報', bankHeaders: ['銀行名', '店舗名', '口座番号', '名義'], bankRows: [['きらぼし銀行', '042 錦糸町', '5027969', '麻布福音教会東京国際神学校']], theologyTitle: '神学科', graduateTitle: '神学研究科', tuitionHeaders: ['項目', '1年次 入学手続時', '1年次 後期', '2年次 前期', '2年次 後期', '3年次 前期', '3年次 後期', '4年次 前期', '4年次 後期'], graduateHeaders: ['項目', '1年次 入学手続時', '1年次 後期', '2年次 前期', '2年次 後期', '3年次 前期', '3年次 後期'], theologyRows: [['入学金', '50,000', '-', '-', '-', '-', '-', '-', '-'], ['授業料', '150,000', '150,000', '150,000', '150,000', '150,000', '150,000', '150,000', '150,000'], ['施設設備費', '50,000', '-', '50,000', '-', '50,000', '-', '50,000', '-'], ['小計', '250,000', '150,000', '200,000', '150,000', '200,000', '150,000', '200,000', '150,000']], graduateRows: [['入学金', '50,000', '-', '-', '-', '-', '-'], ['授業料', '180,000', '180,000', '180,000', '180,000', '180,000', '180,000'], ['施設設備費', '50,000', '-', '50,000', '-', '50,000', '-'], ['小計', '280,000', '180,000', '230,000', '180,000', '230,000', '180,000']], timetableHeaders: ['課程', '曜日', '時限', '時間'], timetableRows: [['神学科（夜間）', '火', '1時限', '19:00 - 19:50'], ['神学科（夜間）', '火', '2時限', '20:00 - 20:50'], ['神学科（夜間）', '火', '3時限', '21:00 - 21:50'], ['研究科', '火', '1時限', '9:00 - 9:50'], ['研究科', '火', '2時限', '10:00 - 10:50'], ['研究科', '火', '3時限', '11:00 - 11:50'], ['研究科', '火', '昼食', '12:00 - 13:00'], ['研究科', '火', '4時限', '13:00 - 13:50'], ['研究科', '火', '5時限', '14:00 - 14:50'], ['研究科', '火', '6時限', '15:00 - 15:50']], notices: ['出願者は面接当日、指定時間までに本校が案内する面接会場へ入室してください。', '提出書類の内容が事実と異なる場合、合格または入学を取り消すことがあります。', '提出された書類および選考料は返還されません。', '募集日程および選考内容は学校事情により変更される場合があり、変更事項はお知らせで案内します。'], ctaTitle: '入学に関するお問い合わせ', ctaDesc: '詳細な募集要項および最新日程はお知らせをご確認ください。', ctaButton: 'お知らせを見る'
    },
    en: {
        eyebrow: 'Admissions', title: 'Admissions Guide', description: 'Explore Tokyo International Seminary programs, eligibility, tuition, timetable, and admissions process.', sideTitle: 'Admissions', nav: ['Programs', 'Eligibility', 'Schedule', 'Documents', 'Tuition', 'Timetable', 'Notes'], sections: { process: 'Programs and Capacity', eligibility: 'Eligibility', schedule: 'Admissions Process and Schedule', documents: 'Required Documents', tuition: 'Tuition Information', timetable: 'Timetable', notices: 'Applicant Notes' }, processHeaders: ['Category', 'Program', 'Class Type', 'Capacity'], processRows: [['Department of Theology', 'B.Th. Program', 'Evening', '00'], ['Graduate Department of Theology', 'M.Div. / Th.M. / Ph.D.', 'Daytime', '00'], ['Japanese Department', 'Intensive Japanese Program', 'Daytime', '00']], eligibility: ['Applicants who graduated from high school or have equivalent academic qualifications.', 'Applicants willing to participate faithfully in the school’s educational philosophy and faith training.', 'Applicants preparing for gospel ministry as pastors, missionaries, or lay leaders.', 'International applicants must hold the qualifications required for residence and study in Japan.'], scheduleHeaders: ['Step', 'Schedule', 'Details'], scheduleRows: [['Application', 'Rolling admission', 'In person, postal mail, or email'], ['Document Review', 'Individually notified after submission', 'Review of submitted documents'], ['Interview', 'Individually notified', 'Faith testimony and study plan review'], ['Result Announcement', 'Individually notified', 'Enrollment procedure guidance']], documentHeaders: ['Category', 'Required Documents'], documentRows: [['Common Documents', 'Application form, personal information consent form, pledge'], ['Academic Records', 'Graduation certificate and transcript from the last school attended'], ['Faith Confirmation', 'Baptism certificate or church attendance confirmation, pastor recommendation'], ['International Applicants', 'Passport copy, residence status documents, academic credential documents']], bankTitle: 'Bank Account', bankHeaders: ['Bank', 'Branch', 'Account No.', 'Account Name'], bankRows: [['Kiraboshi Bank', '042 Kinshicho', '5027969', 'Azabu Gospel Church Tokyo International Seminary']], theologyTitle: 'Department of Theology', graduateTitle: 'Graduate Department of Theology', tuitionHeaders: ['Item', 'Year 1 Upon enrolling', 'Year 1 2nd Sem', 'Year 2 1st Sem', 'Year 2 2nd Sem', 'Year 3 1st Sem', 'Year 3 2nd Sem', 'Year 4 1st Sem', 'Year 4 2nd Sem'], graduateHeaders: ['Item', 'Year 1 Upon enrolling', 'Year 1 2nd Sem', 'Year 2 1st Sem', 'Year 2 2nd Sem', 'Year 3 1st Sem', 'Year 3 2nd Sem'], theologyRows: [['Admission Fee', '50,000', '-', '-', '-', '-', '-', '-', '-'], ['Tuition', '150,000', '150,000', '150,000', '150,000', '150,000', '150,000', '150,000', '150,000'], ['Facility Fee', '50,000', '-', '50,000', '-', '50,000', '-', '50,000', '-'], ['Total', '250,000', '150,000', '200,000', '150,000', '200,000', '150,000', '200,000', '150,000']], graduateRows: [['Admission Fee', '50,000', '-', '-', '-', '-', '-'], ['Tuition', '180,000', '180,000', '180,000', '180,000', '180,000', '180,000'], ['Facility Fee', '50,000', '-', '50,000', '-', '50,000', '-'], ['Total', '280,000', '180,000', '230,000', '180,000', '230,000', '180,000']], timetableHeaders: ['Program', 'Day', 'Period', 'Time'], timetableRows: [['Department of Theology (Evening)', 'Tue', 'Period 1', '19:00 - 19:50'], ['Department of Theology (Evening)', 'Tue', 'Period 2', '20:00 - 20:50'], ['Department of Theology (Evening)', 'Tue', 'Period 3', '21:00 - 21:50'], ['Graduate Department', 'Tue', 'Period 1', '9:00 - 9:50'], ['Graduate Department', 'Tue', 'Period 2', '10:00 - 10:50'], ['Graduate Department', 'Tue', 'Period 3', '11:00 - 11:50'], ['Graduate Department', 'Tue', 'Lunch', '12:00 - 13:00'], ['Graduate Department', 'Tue', 'Period 4', '13:00 - 13:50'], ['Graduate Department', 'Tue', 'Period 5', '14:00 - 14:50'], ['Graduate Department', 'Tue', 'Period 6', '15:00 - 15:50']], notices: ['Applicants must arrive at the interview venue designated by the school by the appointed time.', 'Admission may be cancelled if submitted documents contain false information.', 'Submitted documents and screening fees are non-refundable.', 'Schedules and details may change according to school circumstances; updates will be posted in notices.'], ctaTitle: 'Admissions Inquiry', ctaDesc: 'Please check notices for detailed guidelines and the latest schedule.', ctaButton: 'View Notices'
    },
};
const admissionContent = {
    ...localizedAdmissionContent,
    zh: {
        ...localizedAdmissionContent.en,
        title: '入学指南',
        description: '介绍东京国际神学校的招生课程、申请资格、学费、课程时间表和录取流程。',
        sideTitle: '入学信息',
        nav: ['招生课程', '申请资格', '选考日程', '提交文件', '学费指南', '课程时间表', '注意事项'],
        sections: { process: '招生课程与名额', eligibility: '申请资格', schedule: '选考方法与日程', documents: '提交文件', tuition: '学费指南', timetable: '课程时间表', notices: '申请注意事项' },
        processHeaders: ['类别', '招生课程', '授课方式', '招生人数'],
        processRows: [['神学科本科课程', 'B.Th. 课程', '夜间', '00名'], ['神学研究科', 'M.Div. / Th.M. / Ph.D.', '日间', '00名'], ['日语学科', '日语集中课程', '日间', '00名']],
        eligibility: ['高中毕业或被认可具有同等以上学历者', '愿意诚实参与本校教育理念与信仰训练者', '希望预备成为牧会者、宣教士、平信徒领袖等福音事工者', '外国籍申请者须具备在日本居留及学习所需资格。'],
        scheduleHeaders: ['步骤', '日程', '内容'],
        scheduleRows: [['申请受理', '随时受理', '到校、邮寄或电子邮件申请'], ['资料审核', '受理后个别通知', '确认提交文件'], ['面试选考', '个别通知', '确认信仰告白及学习计划'], ['合格发表', '个别通知', '入学手续指南']],
        documentHeaders: ['类别', '提交文件'],
        documentRows: [['共同文件', '入学申请书、个人信息收集与使用同意书、誓约书'], ['学历证明', '最终学校毕业证明书及成绩证明书'], ['信仰确认', '洗礼证明或教会出席确认书、牧会者推荐书'], ['外国籍申请者', '护照复印件、在留资格相关文件、学历认证文件']],
        bankTitle: '账户信息',
        bankHeaders: ['银行名', '支店名', '账号', '户名'],
        bankRows: [['Kiraboshi银行', '042 锦糸町', '5027969', '麻布福音教会东京国际神学校']],
        theologyTitle: '神学科',
        graduateTitle: '神学研究科',
        tuitionHeaders: ['项目', '第1年 入学手续时', '第1年 后期', '第2年 前期', '第2年 后期', '第3年 前期', '第3年 后期', '第4年 前期', '第4年 后期'],
        graduateHeaders: ['项目', '第1年 入学手续时', '第1年 后期', '第2年 前期', '第2年 后期', '第3年 前期', '第3年 后期'],
        theologyRows: [['入学金', '50,000', '-', '-', '-', '-', '-', '-', '-'], ['学费', '150,000', '150,000', '150,000', '150,000', '150,000', '150,000', '150,000', '150,000'], ['设施设备费', '50,000', '-', '50,000', '-', '50,000', '-', '50,000', '-'], ['小计', '250,000', '150,000', '200,000', '150,000', '200,000', '150,000', '200,000', '150,000']],
        graduateRows: [['入学金', '50,000', '-', '-', '-', '-', '-'], ['学费', '180,000', '180,000', '180,000', '180,000', '180,000', '180,000'], ['设施设备费', '50,000', '-', '50,000', '-', '50,000', '-'], ['小计', '280,000', '180,000', '230,000', '180,000', '230,000', '180,000']],
        timetableHeaders: ['课程', '星期', '节次', '时间'],
        timetableRows: [['神学科（夜间）', '周二', '第1节', '19:00 - 19:50'], ['神学科（夜间）', '周二', '第2节', '20:00 - 20:50'], ['神学科（夜间）', '周二', '第3节', '21:00 - 21:50'], ['研究科', '周二', '第1节', '9:00 - 9:50'], ['研究科', '周二', '第2节', '10:00 - 10:50'], ['研究科', '周二', '第3节', '11:00 - 11:50'], ['研究科', '周二', '午餐', '12:00 - 13:00'], ['研究科', '周二', '第4节', '13:00 - 13:50'], ['研究科', '周二', '第5节', '14:00 - 14:50'], ['研究科', '周二', '第6节', '15:00 - 15:50']],
        notices: ['申请者须于面试当天在指定时间前到达本校通知的面试地点。', '提交文件内容如与事实不符，可能取消合格或入学资格。', '已提交的文件及选考费不予退还。', '招生日程和具体选考内容可能因学校情况而变更，变更事项将在公告中通知。'],
        ctaTitle: '入学咨询',
        ctaDesc: '详细招生简章及最新日程请查看公告。',
        ctaButton: '查看公告',
    },
};
type Locale = keyof typeof admissionContent;

export default async function AdmissionPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const content = admissionContent[(locale as Locale) in admissionContent ? (locale as Locale) : 'ko'];
    const ids = content.nav;
     return (
        <main className="min-h-screen bg-[#f7f3ec]">
            <section className="relative overflow-hidden border-b border-[#e7dccd] bg-gradient-to-br from-brand-navy via-[#243654] to-[#14233d] px-6 py-20 text-white">
                <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(236,126,45,0.35),transparent_35%),linear-gradient(135deg,transparent_35%,rgba(255,255,255,0.08)_35%)] lg:block" />
                <div className="relative mx-auto max-w-6xl">
                    <p className="mb-4 text-sm font-bold tracking-[0.35em] text-brand-orange uppercase">{content.eyebrow}</p>
                    <h1 className="text-4xl font-black md:text-6xl">{content.title}</h1>
                    <p className="mt-6 max-w-3xl text-lg leading-8 text-white/80">{content.description}</p>
                </div>
            </section>
            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[250px_1fr]">
                <aside className="hidden lg:block">
                     <nav className="sticky top-32 overflow-hidden rounded-2xl border border-[#e7dccd] bg-white shadow-sm">
                        <div className="bg-brand-orange px-6 py-5 text-xl font-black text-white">{content.sideTitle}</div>
                        {content.nav.map((item) => (
                            <a key={item} href={`#${item}`} className="block border-b border-gray-100 px-6 py-4 text-sm font-bold text-gray-600 transition hover:bg-[#fff7ef] hover:text-brand-orange">{item}</a>
                        ))}
                    </nav>
                </aside>

                <div className="space-y-14">
                    <ContentCard id={ids[0]}><SectionTitle title={content.sections.process} /><ResponsiveTable headers={content.processHeaders} rows={content.processRows} /></ContentCard>
                    <ContentCard id={ids[1]}><SectionTitle title={content.sections.eligibility} /><ul className="grid gap-3 text-gray-700 md:grid-cols-2">{content.eligibility.map((item) => <li key={item} className="rounded-xl bg-[#fbfaf8] p-4 leading-7 before:mr-2 before:text-brand-orange before:content-['•']">{item}</li>)}</ul></ContentCard>
                    <ContentCard id={ids[2]}><SectionTitle title={content.sections.schedule} /><ResponsiveTable headers={content.scheduleHeaders} rows={content.scheduleRows} /></ContentCard>
                    <ContentCard id={ids[3]}><SectionTitle title={content.sections.documents} /><ResponsiveTable headers={content.documentHeaders} rows={content.documentRows} /></ContentCard>
                    <ContentCard id={ids[4]}><SectionTitle title={content.sections.tuition} /><div className="space-y-8"><div><h3 className="mb-3 text-xl font-black text-brand-navy">{content.bankTitle}</h3><ResponsiveTable headers={content.bankHeaders} rows={content.bankRows} /></div><TuitionBlock title={content.theologyTitle} headers={content.tuitionHeaders} rows={content.theologyRows} /><TuitionBlock title={content.graduateTitle} headers={content.graduateHeaders} rows={content.graduateRows} /></div></ContentCard>
                    <ContentCard id={ids[5]}><SectionTitle title={content.sections.timetable} /><ResponsiveTable headers={content.timetableHeaders} rows={content.timetableRows} /></ContentCard>
                    <ContentCard id={ids[6]}><SectionTitle title={content.sections.notices} /><div className="border-t-2 border-brand-navy">{content.notices.map((notice, index) => (<div key={notice} className="flex gap-4 border-b border-gray-200 px-5 py-4 text-gray-700"><span className="font-black text-brand-orange">{index + 1}</span><p>{notice}</p></div>))}</div></ContentCard>
                      <section className="rounded-2xl bg-brand-navy px-8 py-10 text-white shadow-lg md:flex md:items-center md:justify-between">
                        <div><h2 className="text-2xl font-black">{content.ctaTitle}</h2><p className="mt-3 text-white/75">{content.ctaDesc}</p></div>
                        <Link href="/notice" className="mt-6 inline-block rounded-full bg-brand-orange px-8 py-3 font-black text-white transition hover:bg-white hover:text-brand-navy md:mt-0">{content.ctaButton}</Link>
                    </section>
                </div>
            </div>
        </main>
    );
}

function ContentCard({ id, children }: { id: string; children: React.ReactNode }) {
    return <section id={id} className="scroll-mt-28 rounded-2xl border border-[#e7dccd] bg-white p-6 shadow-sm md:p-8">{children}</section>;
}

function TuitionBlock({ title, headers, rows }: { title: string; headers: string[]; rows: string[][] }) {
    return <div><h3 className="mb-3 text-xl font-black text-brand-navy">{title}</h3><ResponsiveTable headers={headers} rows={rows} highlightLastRow /></div>;
}

function SectionTitle({ title }: { title: string }) {
       return <div className="mb-6 flex items-center gap-4"><span className="h-9 w-1.5 rounded-full bg-brand-orange" /><h2 className="text-2xl font-black text-[#1f2937] md:text-3xl">{title}</h2></div>;
}
function ResponsiveTable({ headers, rows, highlightLastRow = false }: { headers: string[]; rows: string[][]; highlightLastRow?: boolean }) {
    return (
         <div className="overflow-x-auto rounded-xl border-t-4 border-brand-navy shadow-sm">
            <table className="w-full min-w-[720px] border-collapse bg-white text-left text-sm md:text-base">
                <thead><tr className="bg-[#f3eee7] text-center text-gray-900">{headers.map((header) => <th key={header} className="border border-[#e1d8ce] px-4 py-4 font-black whitespace-nowrap">{header}</th>)}</tr></thead>
                <tbody>{rows.map((row, rowIndex) => <tr key={row.join('-')} className={`${rowIndex % 2 ? 'bg-[#fffaf4]' : 'bg-white'} ${highlightLastRow && rowIndex === rows.length - 1 ? 'font-black text-brand-navy' : 'text-gray-700'}`}>{row.map((cell, index) => <td key={`${cell}-${index}`} className="border border-[#e1d8ce] px-4 py-4 whitespace-nowrap">{cell}</td>)}</tr>)}</tbody>
            </table>
        </div>
    );
}
                    