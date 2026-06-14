import { Link } from '@/navigation';

const processRows = [
    ['신학과 학부 과정', 'B.Th. 과정', '주·야간', '00명'],
    ['신학 석·박사 과정', 'M.Div. / Th.M. / Ph.D.', '협력 과정', '00명'],
    ['일본어 학과', '일본어 집중 과정', '주간', '00명'],
];

const documentRows = [
    ['공통 서류', '입학원서, 개인정보 수집·이용 동의서, 서약서'],
    ['학력 증빙', '최종학교 졸업증명서 및 성적증명서'],
    ['신앙 확인', '세례증명서 또는 교회 출석 확인서, 목회자 추천서'],
    ['외국인 지원자', '여권 사본, 체류자격 관련 서류, 학력 인증 서류'],
];

const scheduleRows = [
    ['원서 접수', '상시 접수', '방문·우편·이메일 접수'],
    ['서류 심사', '접수 후 개별 안내', '제출 서류 확인'],
    ['면접 전형', '개별 통보', '신앙 고백 및 학업 계획 확인'],
    ['합격 발표', '개별 통보', '등록 절차 안내'],
];

export default function AdmissionPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="bg-[#f5f6f8] border-b border-gray-200 px-6 py-16">
                <div className="mx-auto max-w-6xl">
                    <p className="mb-3 text-sm font-bold tracking-[0.35em] text-brand-orange uppercase">Admissions</p>
                    <h1 className="text-4xl font-black text-[#1f2937] md:text-5xl">입학안내</h1>
                    <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-600">
                        도쿄국제신학교의 모집 과정, 지원 자격, 제출 서류 및 전형 절차를 안내합니다.
                    </p>
                </div>
            </section>

            <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[240px_1fr]">
                <aside className="hidden lg:block">
                    <nav className="sticky top-32 overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm">
                        <div className="bg-brand-navy px-6 py-5 text-xl font-black text-white">입학정보</div>
                        {['모집과정', '지원자격', '전형일정', '제출서류', '유의사항'].map((item) => (
                            <a key={item} href={`#${item}`} className="block border-b border-gray-100 px-6 py-4 text-sm font-bold text-gray-600 transition hover:bg-[#f7f7f7] hover:text-brand-orange">
                                {item}
                            </a>
                        ))}
                    </nav>
                </aside>

                <div className="space-y-14">
                    <section id="모집과정">
                        <SectionTitle title="모집과정 및 인원" />
                        <ResponsiveTable
                            headers={['구분', '모집과정', '수업방법', '모집인원']}
                            rows={processRows}
                        />
                    </section>

                    <section id="지원자격">
                        <SectionTitle title="지원자격" />
                        <div className="rounded-sm border border-gray-200 bg-[#fbfbfb] p-7 leading-8 text-gray-700">
                            <ul className="list-disc space-y-2 pl-5">
                                <li>고등학교 졸업 또는 이와 동등 이상의 학력이 인정되는 자</li>
                                <li>본교의 교육 이념과 신앙 훈련에 성실히 참여할 의지가 있는 자</li>
                                <li>목회자·선교사·평신도 지도자 등 복음 사역자로 준비되기를 원하는 자</li>
                                <li>외국인 지원자는 일본 체류 및 학업에 필요한 자격을 갖추어야 합니다.</li>
                            </ul>
                        </div>
                    </section>

                    <section id="전형일정">
                        <SectionTitle title="전형방법 및 일정" />
                        <ResponsiveTable
                            headers={['절차', '일정', '내용']}
                            rows={scheduleRows}
                        />
                    </section>

                    <section id="제출서류">
                        <SectionTitle title="제출서류" />
                        <ResponsiveTable
                            headers={['구분', '제출 서류']}
                            rows={documentRows}
                        />
                    </section>

                    <section id="유의사항">
                        <SectionTitle title="지원자 유의사항" />
                        <div className="border-t-2 border-brand-navy">
                            {[
                                '지원자는 면접 당일 지정된 시간까지 본교가 안내한 면접 장소에 입실해야 합니다.',
                                '제출 서류의 내용이 사실과 다를 경우 합격 또는 입학이 취소될 수 있습니다.',
                                '제출된 서류와 전형료는 반환되지 않습니다.',
                                '모집 일정과 세부 전형 내용은 학교 사정에 따라 변경될 수 있으며, 변경 사항은 공지사항으로 안내합니다.',
                            ].map((notice, index) => (
                                <div key={notice} className="flex gap-4 border-b border-gray-200 px-5 py-4 text-gray-700">
                                    <span className="font-black text-brand-orange">{index + 1}</span>
                                    <p>{notice}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="rounded-sm bg-brand-navy px-8 py-10 text-white md:flex md:items-center md:justify-between">
                        <div>
                            <h2 className="text-2xl font-black">입학 관련 문의</h2>
                            <p className="mt-3 text-white/75">상세 모집 요강 및 최신 일정은 공지사항에서 확인해 주세요.</p>
                        </div>
                        <Link href="/notice" className="mt-6 inline-block bg-brand-orange px-8 py-3 font-black text-white transition hover:bg-white hover:text-brand-navy md:mt-0">
                            공지사항 보기
                        </Link>
                    </section>
                </div>
            </div>
        </main>
    );
}

function SectionTitle({ title }: { title: string }) {
    return (
        <div className="mb-6 flex items-center gap-4">
            <span className="h-8 w-1.5 bg-brand-orange" />
            <h2 className="text-2xl font-black text-[#1f2937] md:text-3xl">{title}</h2>
        </div>
    );
}

function ResponsiveTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
    return (
        <div className="overflow-hidden rounded-sm border-t-2 border-brand-navy">
            <table className="w-full border-collapse text-left text-sm md:text-base">
                <thead>
                    <tr className="bg-[#f3f4f6] text-center text-gray-800">
                        {headers.map((header) => (
                            <th key={header} className="border border-gray-200 px-4 py-4 font-black">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.join('-')} className="bg-white even:bg-[#fbfbfb]">
                            {row.map((cell, index) => (
                                <td key={`${cell}-${index}`} className="border border-gray-200 px-4 py-4 text-gray-700">
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
