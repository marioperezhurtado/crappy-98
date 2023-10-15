import { Show } from "solid-js";

type DesktopIconProps = {
  icon: string;
  title: string;
  href?: string;
}

export default function DesktopIcon(props: DesktopIconProps) {
  return (
    <a href={props.href} class="flex relative flex-col items-center w-20">
      <img
        src={props.icon}
        alt={props.title}
        class="object-contain w-10 h-8"
        height="32"
        width="40"
        draggable={false}
      />
      <p class="text-sm text-center text-white">{props.title}</p>
      <Show when={props.href}>
        <img
          src="/desktop/shortcut.png"
          alt="Shortcut"
          class="absolute -top-2.5 left-3 w-10 h-10"
          height="40"
          width="40"
          draggable={false}
        />
      </Show>
    </a>
  );
}
