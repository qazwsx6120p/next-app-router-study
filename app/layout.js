import "../styles/globals.css"; // 根據您的樣式文件位置調整路徑
import Header from "./components/Header";



/** 設定不同頁的 metadata，只需要在各頁上方客製 export const metadata  */
export const metadata = {
  title: "title 我是首頁",
  description: "description 我是首頁",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 使用 comforter.className 指定字體 */}
      <body >
        <Header />
        {children}
      </body>
    </html>
  );
}
