"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import Tweets from "@/config/Tweets.json";
import { useState } from "react";
import { TweetCard } from "./tweetcard";

const Community = () => {
  const [tweets, setTweets] = useState(Tweets.slice(0, 10));
  const [showButton, setShowButton] = useState(true);

  const handleShowMore = () => {
    setTweets((prevTweets) => [
      ...prevTweets,
      ...Tweets.slice(prevTweets.length, prevTweets.length + 10),
    ]);

    if (tweets.length >= Tweets.length) {
      setShowButton(false);
    }
  };
  return (
    <div className="container relative">
      <div className="flex flex-col items-center justify-center py-12">
        <h2 className="text-4xl font-bold">Join the Community</h2>
        <p className="text-lg mt-4">
          Join the community to stay updated on the latest news, events, and
          resources.
        </p>
        <div className="flex gap-6 items-center mt-8">
          <Button variant="outline">
            Github discussion <Icons.gitHub className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline">Discord</Button>
        </div>
      </div>
      <div className="">
        <div
          className={`columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 overflow-hidden relative transition-all`}
        >
          {showButton && (
            <div
              className={`absolute bottom-0 left-0 z-10 w-full h-[400px] bg-gradient-to-t from-background via-background`}
            />
          )}
          {tweets.map((tweet: any, i: number) => (
            <div className="mb-4 z-0 break-inside-avoid-column" key={i}>
              <Link href={tweet.url} target="_blank">
                <TweetCard
                  handle={`@${tweet.handle}`}
                  quote={tweet.text}
                  img_url={`${tweet.img_url}`}
                />
              </Link>
            </div>
          ))}
          {showButton && (
            <div className="absolute flex justify-center bottom-0 left-0 right-0 z-20 mb-10">
              <Button onClick={() => handleShowMore()}>Show More</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Community;
