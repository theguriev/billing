import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const getFallbackAvatar = (name: string) => {
  const [firstName, lastName] = name.split(" ");
  if (!firstName) {
    return "XX";
  }
  if (firstName && lastName) {
    return `${firstName[0]}${lastName[0]}`;
  }
  return `${name[0]}${name[1]}`;
};

export const getTwitterProps = (meta: Record<string, never>) => {
  const defaultMe = {
    name: "",
    profileImageUrl: "",
    description: "",
    username: "",
    followersCount: 0,
    followingCount: 0,
    likeCount: 0,
    listedCount: 0,
    tweetCount: 0,
  };
  if (!meta || !("me" in meta) || !("data" in meta.me)) {
    return defaultMe;
  }
  const { data } = meta.me as {
    data: {
      name: string;
      profile_image_url: string;
      description: string;
      username: string;
      public_metrics: {
        followers_count: number;
        following_count: number;
        like_count: number;
        listed_count: number;
        tweet_count: number;
      };
    };
  };
  return {
    name: data.name,
    profileImageUrl: data.profile_image_url,
    description: data.description,
    username: data.username,
    followersCount: data.public_metrics.followers_count,
    followingCount: data.public_metrics.following_count,
    likeCount: data.public_metrics.like_count,
    listedCount: data.public_metrics.listed_count,
    tweetCount: data.public_metrics.tweet_count,
  };
};

const TwitterBlock = ({
  name,
  profileImageUrl,
  description,
  username,
  followersCount,
  followingCount,
  likeCount,
  listedCount,
  tweetCount,
}: {
  name: string;
  profileImageUrl: string;
  description: string;
  username: string;
  followersCount: number;
  followingCount: number;
  likeCount: number;
  listedCount: number;
  tweetCount: number;
}) => {
  const fallbackAvatar = getFallbackAvatar(name);
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <Avatar className="size-9">
          <AvatarImage src={profileImageUrl} alt={`@${username}`} />
          <AvatarFallback>{fallbackAvatar}</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <Button
            variant="link"
            asChild
            className="h-auto p-0 text-sm font-medium leading-none"
          >
            <Link href={`https://twitter.com/${username}`} target="_blank">
              {name}
            </Link>
          </Button>
          <p className="text-sm text-muted-foreground">@{username}</p>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center gap-2">
        <div className="text-sm font-medium leading-none">{description}</div>
        <div className="flex gap-2 text-sm text-muted-foreground">
          <div>
            <span className="font-bold">{followingCount}</span>
            <span> Following</span>
          </div>
          <div>
            <span className="font-bold">{followersCount}</span>
            <span> Followers</span>
          </div>
          <div>
            <span className="font-bold">{likeCount}</span>
            <span> Likes</span>
          </div>
          <div>
            <span className="font-bold">{listedCount}</span>
            <span> Listed</span>
          </div>
          <div>
            <span className="font-bold">{tweetCount}</span>
            <span> Tweets</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterBlock;
