import userData from '../data/user.json';
import ProfileHeader from '../components/ProfileHeader';
import ProfileInfo from '../components/ProfileInfo';
import Tweet from '../components/Tweet';
import Sidebar from '../components/Sidebar';

const Profile = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="md:ml-72 pb-16 md:pb-0">
        <ProfileHeader
          coverImage={userData.coverImage}
          avatar={userData.avatar}
          displayName={userData.displayName}
          username={userData.username}
        />
        
        <ProfileInfo
          bio={userData.bio}
          location={userData.location}
          website={userData.website}
          joinedDate={userData.joinedDate}
          stats={userData.stats}
        />

        <div className="px-4 mb-4">
          <div className="border-t border-gray-800">
            <h2 className="text-xl font-bold py-4">Posts</h2>
            <div className="space-y-4">
              {userData.posts.map(post => (
                <Tweet
                  key={post.id}
                  content={post.content}
                  date={post.date}
                  likes={post.likes}
                  reposts={post.reposts}
                  replies={post.replies}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 