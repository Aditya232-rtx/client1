import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { RootLayout } from "@/components/site/RootLayout";
import { registerSunilWaysTools } from "@/lib/webmcp";
import { useEffect } from "react";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4 py-20">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground hover:bg-accent transition"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SunilWays Exports Pvt Ltd — Agricultural & Engineering Goods Exports" },
      {
        name: "description",
        content:
          "SunilWays Exports, based in Talere, Kankavli, Sindhudurg Konkan, handles Indian product sourcing, imports and exports for global buyers.",
      },
      { name: "author", content: "SunilWays Exports Pvt Ltd" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "SunilWays Exports Pvt Ltd" },
      { property: "og:title", content: "SunilWays Exports Pvt Ltd" },
      {
        property: "og:description",
        content:
          "Indian agricultural products, engineering goods and industrial supplies — sourced for global markets.",
      },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "llms", href: "/llms.txt", type: "text/markdown" },
      { rel: "ard", href: "/.well-known/ard.json", type: "application/json" },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/inter-latin.woff2",
        crossOrigin: "",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/poppins-latin.woff2",
        crossOrigin: "",
      },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png" },
      { rel: "icon", type: "image/png", href: "/favicon-32.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "shortcut icon", href: "/favicon-32.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://www.sunilwaysexports.com/#organization",
          name: "SunilWays Exports Pvt Ltd",
          url: "https://www.sunilwaysexports.com/",
          logo: "https://www.sunilwaysexports.com/sunilways-logo.webp",
          email: "office@sunilwaysexports.com",
          telephone: "+918208802554",
        }).replace(/</g, "\\u003c") }} />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useEffect(() => registerSunilWaysTools(), []);

  return (
    <QueryClientProvider client={queryClient}>
      <RootLayout>
        <Outlet />
      </RootLayout>
    </QueryClientProvider>
  );
}
