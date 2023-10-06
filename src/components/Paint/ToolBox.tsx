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
    <aside class="bg-zinc-300 h-full border-r-2 p-2 border-zinc-200 min-w-fit">
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
      class="bg-zinc-300 px-1 border-black aspect-square border-2 border-t-zinc-100 border-l-zinc-100 flex items-center justify-center transition w-9"
      classList={{
        "!border-zinc-100 !border-t-black !border-l-black bg-mesh": props.selected
      }}
    >
      {props.children}
    </button>
  );
}
