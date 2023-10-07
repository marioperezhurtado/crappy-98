import { createSignal, onCleanup } from "solid-js";
import { useLocation } from "solid-start";
import { A, type AnchorProps } from "@solidjs/router";

export default function Taskbar() {
  return (
    <footer class="bg-zinc-300 pt-1.5 flex items-center justify-between text-sm">
      <ul class="flex gap-2">
        <ProgramButton href="/" title="Start" icon="windows.png" />
        <Separator />
        <ProgramButton
          href="/checkers"
          title="Checkers"
          icon="/checkers/logo.png"
        />
        <ProgramButton
          href="/solitaire"
          title="Solitaire"
          icon="/solitaire/logo.webp"
        />
        <ProgramButton
          href="/minesweeper"
          title="MineSweeper"
          icon="/minesweeper/logo.webp"
        />
        <ProgramButton
          href="/paint"
          title="Paint"
          icon="/paint/logo.png"
        />
      </ul>
      <div class="flex gap-2 items-center">
        <Separator />
        <Time />
      </div>
    </footer>
  );
}

function ProgramButton(props: AnchorProps & { title: string, icon: string }) {
  const isActive = useLocation().pathname === props.href;

  return (
    <li>
      <A
        href={props.href}
        class="bg-zinc-300 px-1 border-black border-2 border-t-zinc-100 border-l-zinc-100 flex items-center gap-1 hover:border-t-black hover:border-l-black hover:border-zinc-100 transition"
        classList={{
          "border-zinc-100 !border-t-black !border-l-black bg-mesh": isActive
        }}>
        <img
          src={props.icon}
          alt={props.title}
          class="h-4 w-4 object-contain"
          height="16"
          width="16"
        />
        {props.title}
      </A>
    </li>
  );
}

function Separator() {
  return <span class="border-l-2 border-r-2 border-l-zinc-400 w-px h-6 bg-red-500" />;
}

function Time() {
  const [time, setTime] = createSignal(new Date());
  const interval = setInterval(() => setTime(new Date()), 1000 * 5);

  onCleanup(() => clearInterval(interval));

  return <p>{displayTime(time())}</p>;
}

// -> 8:30 PM
function displayTime(date: Date) {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  return `${(hours % 12)}:${minutes.toString().padStart(2, "0")} ${ampm}`;
}
