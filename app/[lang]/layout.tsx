import "../global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { I18nProvider, type Translations } from "fumadocs-ui/i18n";

const cn: Partial<Translations> = {
  search: "搜索",
  lastUpdate: "上次更新",
  previousPage: "上一页",
  nextPage: "下一页",
  chooseLanguage: "选择语言",
  chooseTheme: "选择主题",
  editOnGithub: "在 GitHub 上编辑",
  toc: "目录",
  tocNoHeadings: "没有找到标题",
  searchNoResult: "没有找到结果",
  // other translations
};

const inter = Inter({
  subsets: ["latin"],
});

const locales = [
  {
    name: "English",
    locale: "en",
  },
  {
    name: "中文",
    locale: "cn",
  },
];

export default async function Layout({
  params,
  children,
}: { params: Promise<{ lang: string }>; children: ReactNode }) {
  const lang = (await params).lang;
  return (
    <html lang={lang} className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <I18nProvider
          locale={lang}
          locales={locales}
          translations={{ cn }[lang]}
        >
          <RootProvider>{children}</RootProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
