import { onMount, createSignal } from "solid-js";
import { Show } from "solid-js/web";

export default function Welcome(props: { onClose: () => void }) {
  const [show, setShow] = createSignal(false);
  const [showNextTime, setShowNextTime] = createSignal(true);

  function handleClose() {
    localStorage.setItem("showWelcome", showNextTime() ? "true" : "false");
    props.onClose();
  }

  onMount(() => {
    const showPreference = localStorage.getItem("showWelcome");
    showPreference === "false" ? setShow(false) : setShow(true);
  });

  return (
    <Show when={show()}>
      <div
        class="fixed top-1/3 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full max-w-xl border-2 border-r-zinc-500 border-b-zinc-500 shadow-md"

      >
        <header class="bg-gradient-to-r from-blue-900 via-blue-900 to-blue-600 px-1 py-0.5 flex justify-between items-center">
          <div class="flex gap-2 items-center text-sm">
            <img src="/windows.png" alt="Windows" class="h-4" />
            <h1 class="text-white">Welcome to Crappy 98</h1>
          </div>
          <button
            onClick={handleClose}
            class="bg-zinc-300 w-5 h-5 aspect-square border-black border-2 border-t-zinc-100 border-l-zinc-100 flex items-center justify-center font-bold">
            x
          </button>
        </header>

        <div
          class="bg-[#f4fbfd] bg-cover bg-no-repeat"
          style={{
            "background-image": "url(/welcome/welcome-2.webp), url(/welcome/welcome.webp)",
            "background-position": "right bottom, left top",
          }}>
          <div class="pt-10">
            <h2 class="ml-10 text-lg">Mario</h2>
            <div class="flex -my-1 h-0.5">
              <span class="w-full bg-red-500" />
              <span class="w-full bg-yellow-500" />
              <span class="w-full bg-green-500" />
              <span class="w-full bg-gradient-to-r from-blue-500 to-[#DCE7F6]" />
            </div>
            <h1 class="font-bold text-2xl ml-12">
              Crappy
              <span class="font-normal ml-0.5">98</span>
            </h1>
          </div>

          <div class="flex gap-5 items-start pr-3 pt-5">
            <section class="w-56 min-w-fit">
              <div class="bg-black text-white pl-4 tracking-[0.4rem] text-xs py-0.5 border-b-2 border-zinc-300">
                CONTENTS
              </div>
              <ContentItem color="#009CFF" title="Register Now" />
              <ContentItem color="#FF3100" title="Connect to the Internet" />
              <ContentItem color="#6BCE39" title="Discover Crappy 98" />
              <ContentItem color="#FFCE00" title="Maintain Your Computer" />
            </section>

            <section class="flex flex-col gap-3 leading-5">
              <h1 class="font-bold text-lg tracking-wider">Welcome</h1>
              <p>Welcome to the exciting new world of Crappy 98, where your web browser takes a nostalgic trip back in time!
              </p>
              <p>Sit back and relax as you take a brief tour of the options available on this website.</p>
              <p>If you want to explore an option, just click it.</p>
            </section>
          </div>

          <div class="pt-10 flex p-3 justify-between items-center">
            <div class="flex gap-2 items-center text-sm">
              <input
                type="checkbox"
                id="show"
                checked
                onChange={(e) => setShowNextTime(e.currentTarget.checked)}
              />
              <label for="show">Show this screen each time Crappy 98 starts.</label>
            </div>
            <button
              onClick={handleClose}
              class="bg-zinc-300 px-6 py-0.5 border-2 border-b-black border-r-black text-sm">
              <span class="underline">C</span>lose
            </button>
          </div>
        </div>
      </div>
    </Show>
  );

}

function ContentItem(props: { color: string, title: string }) {
  return (
    <div class="flex gap-3 border-b-2 pr-3 border-zinc-300">
      <span class="w-1" style={{ "background-color": props.color }} />
      <h2 class="font-bold text-sm">{props.title}</h2>
    </div>
  );
}
