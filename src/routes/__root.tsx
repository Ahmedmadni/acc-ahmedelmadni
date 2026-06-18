import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
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
      { title: "أحمد المدني | محاسب أول - Senior Accountant" },
      {
        name: "description",
        content:
          "محاسب ذو خبرة عملية متقدمة في المحاسبة وإعداد التقارير المالية وتحليل التكاليف وإدارة الحسابات داخل المملكة العربية السعودية.",
      },
      { name: "author", content: "Ahmed Elmadani" },
      { name: "keywords", content: "محاسب, محاسب أول, محاسب تكاليف, تقارير مالية, الرياض, السعودية, ZATCA, IFRS, زكاة, ضريبة القيمة المضافة, accountant, senior accountant" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "theme-color", content: "#04101f" },
      { property: "og:site_name", content: "Ahmed Elmadani | أحمد المدني" },
      { property: "og:locale", content: "ar_SA" },
      { property: "og:locale:alternate", content: "en_US" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "أحمد المدني | محاسب أول - Senior Accountant" },
      {
        property: "og:description",
        content:
          "محاسب ذو خبرة عملية متقدمة في المحاسبة وإعداد التقارير المالية وتحليل التكاليف وإدارة الحسابات داخل المملكة العربية السعودية.",
      },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/sHg6QnS04TcmbXVlhYYOOD3JhZB2/social-images/social-1779447091919-1000508481.webp" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "أحمد المدني | محاسب أول - Senior Accountant" },
      {
        name: "twitter:description",
        content:
          "محاسب ذو خبرة عملية متقدمة في المحاسبة وإعداد التقارير المالية وتحليل التكاليف وإدارة الحسابات داخل المملكة العربية السعودية.",
      },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/sHg6QnS04TcmbXVlhYYOOD3JhZB2/social-images/social-1779447091919-1000508481.webp" },
      // { name: "google-site-verification", content: "PASTE_GSC_TOKEN_HERE" },
      { name: "msvalidate.01", content: "D911CDA6F8A617A485931393AAD13064" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Cairo:wght@600;700;800&family=Inter:wght@600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cairo:wght@600;700;800&family=Inter:wght@600;700&display=swap",
      },
      // Font Awesome loaded non-blocking via media="print" + script swap
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
        media: "print",
      },
    ],
    scripts: [
      {
        children: `(function(){var l=document.querySelectorAll('link[media="print"]');l.forEach(function(x){x.media="all"});})();`,
      },
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-5ZZTMPFCS1",
        async: true,
      },
      {
        children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date());
gtag('config', 'G-5ZZTMPFCS1', { anonymize_ip: true });`,
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://ahmedelmadni.com/#website",
              url: "https://ahmedelmadni.com/",
              name: "Ahmed Elmadani | أحمد المدني",
              inLanguage: "ar-SA",
              publisher: { "@id": "https://ahmedelmadni.com/#person" },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://ahmedelmadni.com/knowledge?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": ["Person", "Organization"],
              "@id": "https://ahmedelmadni.com/#person",
              name: "Ahmed Elmadani",
              alternateName: "أحمد المدني",
              url: "https://ahmedelmadni.com/",
              jobTitle: "Senior Accountant",
              email: "mailto:elmadnim@gmail.com",
              image: "https://storage.googleapis.com/gpt-engineer-file-uploads/sHg6QnS04TcmbXVlhYYOOD3JhZB2/social-images/social-1779447091919-1000508481.webp",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Riyadh",
                addressRegion: "Riyadh",
                addressCountry: "SA",
              },
              knowsAbout: [
                "Financial Accounting",
                "Cost Accounting",
                "Financial Reporting",
                "IFRS",
                "ZATCA",
                "VAT",
                "Zakat",
              ],
            },
            {
              "@type": "LocalBusiness",
              "@id": "https://ahmedelmadni.com/#business",
              name: "Ahmed Elmadani — Senior Accountant",
              image: "https://storage.googleapis.com/gpt-engineer-file-uploads/sHg6QnS04TcmbXVlhYYOOD3JhZB2/social-images/social-1779447091919-1000508481.webp",
              url: "https://ahmedelmadni.com/",
              priceRange: "$$",
              areaServed: { "@type": "Country", name: "Saudi Arabia" },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Riyadh",
                addressCountry: "SA",
              },
            },
          ],
        }),
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
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

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalControls />
      <Outlet />
    </QueryClientProvider>
  );
}
