/** 此 route 為動態獲取 url 上特定商品的 id
 *  http://localhost:3000/posts/1 => 1 即為特定商品的 id */

export function generateMetadata({ params }) {
  return {
    title: `Post ${params.post_id}`,
    description: ` ${params.post_id}`,
  };
}

/** @prams 為灌進此組件的參數*/
const Post = ({ params }) => {
  /** 獲取 url 上特定商品的 id，變數命名與參數取得必須跟資料夾命名一樣
   *  EX :
   *  資料夾名稱    : [post_id]
   *  特定商品的 id : prams.post_id */
  const post_id = params.post_id;

  return <div>Post {post_id}</div>;
};

export default Post;
