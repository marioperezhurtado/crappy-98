import { A, type AnchorProps } from "@solidjs/router";
import { useLocation } from "solid-start";

export default function Taskbar() {
  return (
    <footer class="bg-zinc-300 pt-1.5 flex items-center justify-between text-sm">
      <ul class="flex gap-2">
        <ProgramButton href="/" title="Start" icon="windows.png"/>
        <ProgramButton href="/checkers" title="Checkers" icon="/checkers/logo.png"/>
        <ProgramButton href="/solitaire" title="Solitaire" icon="/solitaire/logo.webp"/>
        <ProgramButton href="/paint" title="Paint" icon="/paint/logo.png"/>
      </ul>
      <p class="mr-1">Made with ❤️ by
        <A href="https://marioph.com" target="_blank" class="underline ml-2">
          Mario
        </A>
      </p>
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
        <img src={props.icon} alt={props.title} class="h-4" />
        {props.title}
      </A>
    </li>
  );
}
