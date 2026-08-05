import { getTranslations } from "next-intl/server";
import { ChevronRight, Home } from "lucide-react";
import { client } from "@/sanity/client";
import { Link } from "@/navigation";

type PageProps = {
  params: Promise<{ locale: string }>;
};

type AdmissionFormNotice = {
  _id: string;
  title?: Record<string, string>;
  slug?: string;
  publishedAt?: string;
  isImportant?: boolean;
};

function getLocalizedText(
  value: Record<string, string> | undefined,
  locale: string,
) {
  return (
    value?.[locale] || value?.ko || value?.ja || value?.en || value?.zh || ""
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "AdmissionForms",
  });

  return {
    title: `${t("title")} | 도쿄국제신학교`,
    description: t("description"),
  };
}

export default async function AdmissionFormsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "AdmissionForms",
  });

  const notices = await client.fetch<AdmissionFormNotice[]>(`
    *[_type == "admissionFormNotice"] | order(publishedAt desc) {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      isImportant
    }
  `);

  return (
    <main className="min-h-screen bg-[#f3f4f9] px-4 py-16 md:py-24">
      <section className="mx-auto max-w-5xl rounded-3xl bg-white px-6 py-10 shadow-sm md:px-10 lg:px-12">
        <div className="min-w-0 pt-2">
          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-2xl font-black text-slate-950">
                {t("title")}
              </h2>

              <p className="mt-6 text-sm text-slate-500">
                <span className="font-bold text-[#2d6fdf]">
                  {t("newLabel")} {" "}
                  {notices.filter((notice) => notice.isImportant).length}
                </span>
                <span className="mx-1">/</span>
                <span>{notices.length}</span>
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Home aria-hidden="true" className="size-4 text-[#1b3f91]" />
              <span>{t("sidebarTitle")}</span>
              <ChevronRight aria-hidden="true" className="size-3" />
              <span>{t("title")}</span>
            </div>
          </div>

          <div className="border-t-2 border-[#2d6fdf]">
            {notices.length > 0 ? (
              <ol className="divide-y divide-slate-200">
                {notices.map((notice, index) => {
                  const number = notices.length - index;
                  const title = getLocalizedText(notice.title, locale);
                  const hrefSlug = encodeURIComponent(notice._id);

                  return (
                    <li key={notice._id}>
                      <Link
                        href={`/admission/forms/${hrefSlug}`}
                        className="grid gap-3 px-2 py-5 text-sm transition-colors hover:bg-slate-50 sm:grid-cols-[56px_1fr_120px] sm:items-center md:px-7"
                      >
                        <span className="text-center text-slate-500">
                          {number}
                        </span>

                        <span className="break-keep font-medium text-slate-900">
                          {title}
                          {notice.isImportant && (
                            <span className="ml-2 rounded bg-[#2d6fdf] px-2 py-0.5 text-[10px] font-bold text-white">
                              NEW
                            </span>
                          )}
                        </span>

                        <time
                          className="text-slate-500 sm:text-right"
                          dateTime={notice.publishedAt}
                        >
                          {notice.publishedAt
                            ? new Date(notice.publishedAt).toLocaleDateString(
                                locale,
                              )
                            : ""}
                        </time>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            ) : (
              <p className="py-20 text-center text-sm text-slate-500">
                {t("empty")}
              </p>
            )}
          </div>

          <div className="mt-10 flex justify-center">
            <span className="inline-flex size-11 items-center justify-center border border-[#2d6fdf] text-sm font-medium text-[#2d6fdf]">
              1
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}