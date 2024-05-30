import React from "react";

const asyncFn = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
};

const Menu = async () => {
  await asyncFn();
  return <div>Menu</div>;
};

export default Menu;
