interface TweetProps {
  content: string;
  date: string;
  likes: number;
  reposts: number;
  replies: number;
}

const Tweet = ({ content, likes, reposts, replies }: TweetProps) => {
  return (
    <div className="border-b border-gray-800 pb-4">
      <p className="mb-2">{content}</p>
      <div className="flex gap-6 text-gray-500">
        <span className="flex items-center gap-2 hover:text-blue-400 cursor-pointer">
          <i className="far fa-comment"></i>
          {replies}
        </span>
        <span className="flex items-center gap-2 hover:text-green-400 cursor-pointer">
          <i className="fas fa-retweet"></i>
          {reposts}
        </span>
        <span className="flex items-center gap-2 hover:text-red-400 cursor-pointer">
          <i className="far fa-heart"></i>
          {likes}
        </span>
      </div>
    </div>
  );
};

export default Tweet; 