import { Show } from "solid-js";
import Taskbar from "~/components/Taskbar";

export default function Home() {
  return (
    <main class="h-screen overflow-hidden flex flex-col select-none">
      <div class="p-1.5 bg-[#008280] h-full">
        <div class="flex flex-col gap-3 items-center w-fit">
          <DesktopIcon icon="/desktop/bin.png" title="Recycle Bin" />
          <DesktopIcon icon="/desktop/computer.png" title="Computer" />
          <DesktopIcon icon="/desktop/documents.png" title="Documents" />
          <DesktopIcon icon="/desktop/internet.png" title="Internet Explorer" />
          <DesktopIcon 
            icon="/checkers/logo.png"
            title="Checkers" 
            href="/checkers"
          />
          <DesktopIcon 
            icon="/solitaire/logo.webp"
            title="Solitaire" 
            href="/solitaire"
          />
          <DesktopIcon
            icon="/paint/logo.png"
            title="Paint"
            href="/paint"
          />
        </div>
      </div>
      <div class="p-1.5 pt-0 bg-zinc-300 border-t-2">
        <Taskbar />
      </div>
    </main>
  );
}

type DesktopIconProps = {
  icon: string;
  title: string;
  href?: string;
}

function DesktopIcon(props: DesktopIconProps) {
  return (
    <a href={props.href} class="relative flex flex-col items-center w-20">
      <img
        src={props.icon}
        alt={props.title}
        class="h-8 w-10 object-contain object-top"
        draggable={false}
      />
      <p class="text-xs text-white text-center">{props.title}</p>
      <Show when={props.href}>
        <img
          src="/desktop/shortcut.png"
          alt="Shortcut"
          class="h-10 w-10 absolute -top-2.5 left-3"
          draggable={false}
        />
      </Show>
    </a>
  );
}
