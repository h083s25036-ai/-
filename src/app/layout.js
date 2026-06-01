export const metadata = { title: "스터디 플래너", description: "나만의 주간 학습 플래너" };
export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;600;700;800&display=swap" rel="stylesheet" />
        <style>{`* { box-sizing: border-box; margin: 0; padding: 0; } body { font-family: 'Noto Sans KR', sans-serif; }`}</style>
      </head>
      <body>{children}</body>
    </html>
  );
}
