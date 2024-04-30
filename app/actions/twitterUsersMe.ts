const twitterUsersMe = async ({ token }: { token: string }) => {
  const query = new URLSearchParams({
    expansions: "pinned_tweet_id",
    "tweet.fields":
      "attachments,author_id,context_annotations,conversation_id,created_at,edit_controls,entities,geo,id,in_reply_to_user_id,lang,non_public_metrics,public_metrics,organic_metrics,promoted_metrics,possibly_sensitive,referenced_tweets,reply_settings,source,text,withheld",
    "user.fields":
      "created_at,description,entities,id,location,most_recent_tweet_id,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,verified_type,withheld",
  });
  const req = await fetch(`https://api.twitter.com/2/users/me?${query}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const resp = await req.json();
  return resp;
};

export default twitterUsersMe;
