import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { i18n } from "@/lib/i18n";
/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(locale: string): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: (
        <>
          <img
            src="https://meme-static.douni.one/bunship-logo.svg"
            alt="Bunship"
            width={24}
            height={24}
          />
          Bunship
        </>
      ),
    },
    links: [
      {
        type: "main",
        text: locale === "cn" ? "文档" : "Documentation",
        url: "/",
      },
    ],
    // different props based on `locale`
  };
}
