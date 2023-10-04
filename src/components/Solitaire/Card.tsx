import { Show } from "solid-js";

type Suit = "spades" | "hearts" | "clubs" | "diamonds";

const SUIT_ICONS = {
  spades: "♠",
  hearts: "♥",
  clubs: "♣",
  diamonds: "♦",
};

export default function Card(props: { suit: Suit, rank: number }) {
  const icon = SUIT_ICONS[props.suit];

  return (
    <div
      class="relative w-32 aspect-[2.5/3.5] bg-white border-black border-2 rounded-lg font-bold shadow-md"
      classList={{ "text-red-500": props.suit === "hearts" || props.suit === "diamonds" }}
    >
      <RankLabel {...props} icon={icon} />
      <DisplayCard {...props} icon={icon} />
    </div>
  );
};

const SPECIAL_LABELS = [
  { rank: 1, label: "A" },
  { rank: 11, label: "J" },
  { rank: 12, label: "Q" },
  { rank: 13, label: "K" },
];

function RankLabel(props: { suit: Suit, rank: number, icon: string }) {
  const label = SPECIAL_LABELS.find((l) => l.rank === props.rank)?.label ?? props.rank;

  return (
    <>
      <div class="absolute top-0 left-0.5 text-center">
        <p>{label}</p>
        {props.icon}
      </div>
      <div class="absolute bottom-0 right-0.5 rotate-180 text-center">
        <p>{label}</p>
        {props.icon}
      </div>
    </>
  );
}

function DisplayCard(props: { suit: Suit, rank: number, icon: string }) {
  return (
    <div class="text-xl">
      {/* center */}
      <Show when={props.rank % 2 !== 0 && props.rank <= 10}>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {props.icon}
        </div>
      </Show>
      {/* top & bottom center */}
      <Show when={props.rank === 2 || props.rank === 3}>
        <div class="absolute top-2 left-1/2 -translate-x-1/2">
          {props.icon}
        </div>
        <div class="absolute bottom-2 left-1/2 -translate-x-1/2">
          {props.icon}
        </div>
      </Show>
      {/* corners */}
      <Show when={props.rank >= 4 && props.rank <= 10}>
        <div class="absolute top-4 left-6">
          {props.icon}
        </div>
        <div class="absolute bottom-4 left-6">
          {props.icon}
        </div>
        <div class="absolute top-4 right-6">
          {props.icon}
        </div>
        <div class="absolute bottom-4 right-6">
          {props.icon}
        </div>
      </Show>
      {/* sides center */}
      <Show when={props.rank >= 6 && props.rank <= 8}>
        <div class="absolute top-1/2 left-6 -translate-y-1/2">
          {props.icon}
        </div>
        <div class="absolute top-1/2 right-6 -translate-y-1/2">
          {props.icon}
        </div>
      </Show>
      {/* double center */}
      <Show when={props.rank === 8 || props.rank === 10}>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4">
          <div>{props.icon}</div>
          <div>{props.icon}</div>
        </div>
      </Show>
      {/* double sides */}
      <Show when={props.rank === 9 || props.rank === 10}>
        <div class="absolute top-1/2 left-6 -translate-y-1/2 flex flex-col gap-4">
          <div>{props.icon}</div>
          <div>{props.icon}</div>
        </div>
        <div class="absolute top-1/2 right-6 -translate-y-1/2 flex flex-col gap-4">
          <div>{props.icon}</div>
          <div>{props.icon}</div>
        </div>
      </Show>
      {/* Jack */}
      <Show when={props.rank === 11}>
        <img
          src="/jack.webp"
          class="border-2 w-[84px] h-36 border-black object-cover
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          width="84"
        />
        <div class="absolute right-6 top-5">
          {props.icon}
        </div>
        <div class="absolute left-6 bottom-5">
          {props.icon}
        </div>
      </Show>
      {/* Queen */}
      <Show when={props.rank === 12}>
        <img
          src="/queen.webp"
          class="border-2 w-[84px] h-36 border-black object-cover
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          width="84"
        />
        <div class="absolute right-6 top-5">
          {props.icon}
        </div>
        <div class="absolute left-6 bottom-5">
          {props.icon}
        </div>
      </Show>
      {/* King */}
      <Show when={props.rank === 13}>
        <img
          src="/king.webp"
          class="border-2 w-[84px] h-36 border-black object-cover
          absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          width="84"
        />
        <div class="absolute left-6 top-5">
          {props.icon}
        </div>
        <div class="absolute right-6 bottom-5">
          {props.icon}
        </div>
      </Show>
    </div>
  );
};
