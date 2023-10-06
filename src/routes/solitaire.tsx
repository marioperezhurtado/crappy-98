import Card from "~/components/Solitaire/Card";
import Window from "~/components/Window";

export default function SolitairePage() {
  return (
      <Window title="Solitaire" icon="/solitaire/logo.webp">
        <div class="pt-20 bg-[#008003] h-full">
          <div class="flex flex-wrap gap-2 ml-5">
            <Card suit="spades" rank={1} />
            <Card suit="hearts" rank={2} />
            <Card suit="clubs" rank={3} />
            <Card suit="diamonds" rank={4} />
            <Card suit="spades" rank={5} />
            <Card suit="hearts" rank={6} />
            <Card suit="clubs" rank={7} />
            <Card suit="diamonds" rank={8} />
            <Card suit="spades" rank={9} />
            <Card suit="hearts" rank={10} />
            <Card suit="clubs" rank={11} />
            <Card suit="diamonds" rank={12} />
            <Card suit="spades" rank={13} />
          </div>
        </div>
      </Window>
  );
}
