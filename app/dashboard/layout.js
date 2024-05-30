/** @header @menu 為 Parallel Routes 傳遞來的組件 */
export default function DashboardLayout({ children, header, menu }) {
  return (
    <div>
      <div> 我是解構的 {header}</div>
      <hr />
      <div> 我是解構的 {menu}</div>
      <hr />
      <div> 我是 Layout 的 children {children}</div>
      <hr />
    </div>
  );
}
