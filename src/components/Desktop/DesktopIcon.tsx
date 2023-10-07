import { Show } from "solid-js";

type DesktopIconProps = {
  icon: string;
  title: string;
  href?: string;
}

export default function DesktopIcon(props: DesktopIconProps) {
  return (
    <a href={props.href} class="relative flex flex-col items-center w-20">
      <img
        src={props.icon}
        alt={props.title}
        class="h-8 w-10 object-contain"
        height="32"
        width="40"
        draggable={false}
      />
      <p class="text-sm text-white text-center">{props.title}</p>
      <Show when={props.href}>
        <img
          src="/desktop/shortcut.png"
          alt="Shortcut"
          class="h-10 w-10 absolute -top-2.5 left-3"
          height="40"
          width="40"
          draggable={false}
        />
      </Show>
    </a>
  );
}
