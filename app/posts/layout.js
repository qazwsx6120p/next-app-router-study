/** 位於 posts route 裡的 Layout，只針對 posts route 內的 page 增加的共用組件 */
export default function PostLayout({ children }) {
  return (
    <div>
      <p>我是位於 posts route 裡的共用組件</p>
      {children}
    </div>
  );
}
