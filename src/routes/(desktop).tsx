import { createSignal, Show, For } from "solid-js";
import { programs } from "~/data/programs";
import Taskbar from "~/components/Taskbar";
import DesktopIcon from "~/components/Desktop/DesktopIcon";
import Welcome from "~/components/Desktop/Welcome";
import Clippy from "~/components/Clippy/Clippy";

const [showWelcome, setShowWelcome] = createSignal(true);

export default function Home() {
  return (
    <>
      <main class="h-screen overflow-hidden flex flex-col select-none">
        <div class="p-1.5 bg-[#008280] h-full">
          <div class="flex flex-col gap-3 items-center w-fit">
            <DesktopIcon icon="/desktop/bin.png" title="Recycle Bin" />
            <DesktopIcon icon="/desktop/computer.png" title="Computer" />
            <DesktopIcon icon="/desktop/documents.png" title="Documents" />
            <DesktopIcon icon="/desktop/internet.png" title="Internet Explorer" />
            <For each={programs}>
              {(program) => <DesktopIcon {...program} />}
            </For>
          </div>
          <p class="fixed top-2 right-4 text-white">
            Made with ♥ by
            <a
              href="https://marioph.com"
              target="_blank"
              class="underline ml-1"
            >
              Mario
            </a>
          </p>
        </div>
        <div class="p-1.5 pt-0 bg-zinc-300 border-t-2">
          <Taskbar />
        </div>
      </main>
      <Show when={showWelcome()}>
        <Welcome onClose={() => setShowWelcome(false)} />
      </Show>
      <Clippy />
    </>
  );
}
