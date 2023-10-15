import { createSignal, For } from "solid-js";
import type { JSX } from "solid-js";

const TOOLS = [
  {
    name: "Pencil",
    icon: "/paint/pencil.webp",
    cursor: "/paint/pencil-cursor.webp",
    size: 2,
  },
  {
    name: "Brush",
    icon: "/paint/brush.webp",
    cursor: "/paint/brush-cursor.webp",
    size: 5,
  },
  {
    name: "Eraser",
    icon: "/paint/eraser.webp",
    cursor: "/paint/eraser-cursor.webp",
    size: 20,
  },
] as const;

export const [tool, setTool] = createSignal<typeof TOOLS[number]>(TOOLS[0]);

export default function ToolBox() {
  return (
    <aside class="p-2 h-full border-r-2 bg-zinc-300 border-zinc-200 min-w-fit">
      <div class="grid grid-cols-2 gap-1 h-fit">
        <For each={TOOLS}>
          {(t) => (
            <ToolButton onClick={() => setTool(t)} selected={tool().name === t.name}>
              <img src={t.icon} alt={t.name} draggable={false} />
            </ToolButton>
          )}
        </For>
      </div>
    </aside>
  );
}

function ToolButton(props: { selected: boolean } & JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      class="flex justify-center items-center px-1 w-9 border-2 border-black transition bg-zinc-300 aspect-square border-t-zinc-100 border-l-zinc-100"
      classList={{
        "!border-zinc-100 !border-t-black !border-l-black bg-mesh": props.selected
      }}
    >
      {props.children}
    </button>
  );
}
