"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

/** 設置所有 Link 的內容 */
const navLinks = [
  {
    id: 1,
    href: "/posts",
    name: "Posts",
  },
  {
    id: 1,
    href: "/product",
    name: "Product",
  },
];
const Header = () => {
  /** 使用 usePathname 確認當前的 Link 為何? */
  const pathname = usePathname();
  return (
    <div>
      {navLinks.map((link, i) => {
        const isActive = pathname.startsWith(link.href);
        const linkStyle = {
          color: isActive ? "red" : "white",
          margin: "0 10px",
        };
        return (
          <Link href={link.href} style={linkStyle} key={i}>
            {link.name}
          </Link>
        );
      })}
      <hr />
    </div>
  );
};

export default Header;
