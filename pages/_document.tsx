import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var stored = localStorage.getItem('isDark');
            var isDark = stored === null ? true : stored === 'true';
            document.body.className = 'transition-all h-screen duration-300 ' + (isDark ? 'bg-black text-white' : 'bg-white text-black');
          })();
        `}} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
