import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17352741033"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17352741033');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Sam-Meows",
                "url": "https://sam-meows.com/"
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "SamMeows Inc.",
                "alternateName": "삼냥이즈",
                "url": "https://sam-meows.com/",
                "logo": "https://sam-meows.com/favicon.png",
                "email": "contact@sam-meows.com",
                "sameAs": [
                  "https://www.linkedin.com/company/104854511/",
                  "https://www.instagram.com/ritty_makers/",
                  "https://www.youtube.com/@ritty_cat",
                  "https://discord.com/invite/wghaFYCkCV"
                ],
                "founder": [
                  {
                    "@type": "Person",
                    "name": "Sojeong Choi",
                    "jobTitle": "Co-Founder & CEO",
                    "sameAs": "https://www.linkedin.com/in/%EC%86%8C%EC%A0%95%EC%B5%9C-525792231/"
                  },
                  {
                    "@type": "Person",
                    "name": "Changjun Mun",
                    "jobTitle": "Co-Founder & CTO",
                    "sameAs": "https://www.linkedin.com/in/changjun-mun/"
                  }
                ]
              }
            ]),
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
