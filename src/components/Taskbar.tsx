import { createSignal, onCleanup, For } from "solid-js";
import { useLocation } from "solid-start";
import { A, type AnchorProps } from "@solidjs/router";
import { programs } from "~/data/programs";

export default function Taskbar() {
  return (
    <footer class="flex justify-between items-center pt-1.5 text-sm bg-zinc-300">
      <ul class="flex gap-2">
        <ProgramButton href="/" title="Start" icon="windows.png" />
        <Separator />
        <For each={programs}>
          {(program) => <ProgramButton {...program} />}
        </For>
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
        class="flex gap-1 items-center px-1 border-2 border-black transition bg-zinc-300 border-t-zinc-100 border-l-zinc-100 hover:border-t-black hover:border-l-black hover:border-zinc-100"
        classList={{
          "border-zinc-100 !border-t-black !border-l-black bg-mesh": isActive
        }}>
        <img
          src={props.icon}
          alt={props.title}
          class="object-contain w-4 h-4"
          height="16"
          width="16"
        />
        {props.title}
      </A>
    </li>
  );
}

function Separator() {
  return <span class="w-px h-6 bg-red-500 border-r-2 border-l-2 border-l-zinc-400" />;
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
