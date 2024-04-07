import Image from "next/image";

interface TweetCard {
  handle: string;
  quote: string | React.ReactNode;
  img_url: string;
}

export function TweetCard(props: TweetCard) {
  return (
    <div
      className="
      bg-surface-100 border-overlay
      rounded-2xl border p-6
      drop-shadow-sm
    "
    >
      <div className="relative">
        <div className="flex items-center gap-2">
          {props.img_url ? (
            <div className="h-10 w-10 overflow-hidden rounded-full border border-control">
              <Image
                src={props.img_url}
                width="64"
                height="64"
                alt={`${props.handle} twitter image`}
              />
            </div>
          ) : (
            <div className="w-6" />
          )}
          <p className="text-foreground text-sm font-medium">{props.handle}</p>
        </div>
      </div>

      <p className="text-foreground-muted mt-3 text-base">"{props.quote}"</p>
    </div>
  );
}
