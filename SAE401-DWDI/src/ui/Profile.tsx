import userData from '../data/user.json';
import ProfileHeader from '../components/ProfileHeader';
import ProfileInfo from '../components/ProfileInfo';
import Tweet from '../components/Tweet';
import ProfileTabs from '../components/ProfileTabs';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

interface Post {
  id: string;
  author: {
    name: string;
    username: string;
    avatar: string;
  };
  content: string;
  date: string;
  likes: number;
  reposts: number;
  replies: number;
  media?: {
    type: string;
    url: string;
  };
}

const Profile = () => {
  const [activeTab, setActiveTab] = useState('posts');

  // Tous les posts incluant ceux avec média
  const allPosts = [
    ...userData.posts,
    ...(userData.mediaPost || []),
    ...((userData.likedPosts || []).filter(post => post.author.username === userData.username))
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()) as Post[];

  // Tous les posts avec média
  const mediaPosts = allPosts.filter(post => post.media);

  // Tous les reposts
  const allReposts = userData.reposts || [];

  // Tous les likes (incluant les posts de l'utilisateur)
  const allLikes = userData.likedPosts || [];

  // Obtenir les IDs des posts likés et repostés
  const likedPostIds = new Set(allLikes.map(post => post.id));
  const repostedPostIds = new Set(allReposts.map(post => post.id));

  const renderTabContent = () => {
    switch (activeTab) {
      case 'posts':
        return allPosts.map(post => (
          <Tweet
            key={post.id}
            id={post.id}
            author={post.author}
            content={post.content}
            date={post.date}
            likes={post.likes}
            reposts={post.reposts}
            replies={post.replies}
            media={post.media}
            isRepost={repostedPostIds.has(post.id)}
            isLiked={likedPostIds.has(post.id)}
          />
        ));
      case 'reposts':
        return allReposts.map(repost => (
          <Tweet
            key={repost.id}
            id={repost.id}
            author={repost.author}
            content={repost.content}
            date={repost.date}
            likes={repost.likes}
            reposts={repost.reposts}
            replies={repost.replies}
            isRepost
          />
        ));
      case 'media':
        return mediaPosts.map(post => (
          <Tweet
            key={post.id}
            id={post.id}
            author={post.author}
            content={post.content}
            date={post.date}
            likes={post.likes}
            reposts={post.reposts}
            replies={post.replies}
            media={post.media}
          />
        ));
      case 'likes':
        return allLikes.map(post => (
          <Tweet
            key={post.id}
            id={post.id}
            author={post.author}
            content={post.content}
            date={post.date}
            likes={post.likes}
            reposts={post.reposts}
            replies={post.replies}
            isLiked={true}
          />
        ));
      default:
        return null;
    }
  };

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

        <ProfileTabs
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className="px-4">
          <div className="space-y-4 py-4">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 