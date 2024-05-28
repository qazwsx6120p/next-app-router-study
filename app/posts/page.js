// http://localhost:3000/posts

/** 設定不同頁的 metadata，只需要在各頁上方客製 export const metadata  */
export const metadata = {
  title: "title 我是 posts route",
  description: "description 我是 posts route",
};

const Posts = () => {
  // throw new Error("我製造的 Error")
  return <div>Posts</div>;
};

export default Posts;
