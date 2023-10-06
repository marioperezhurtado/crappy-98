import { Title, Link } from "solid-start";
import type { JSXElement } from "solid-js";
import Taskbar from "./Taskbar";

export default function Window(props: { title: string, icon: string, children: JSXElement }) {
  return (
    <>
      <Title>{props.title} | Crappy 98</Title>
      <Link rel="icon" href={props.icon} />
      <main class="bg-zinc-300 h-screen overflow-hidden p-1.5 flex flex-col select-none">
        <header class="bg-zinc-300">
          <div class="bg-gradient-to-r from-blue-900 via-blue-900 to-blue-600 text-white p-1 pl-2 flex justify-between items-center">
            <div class="flex gap-2 items-center">
              <img src={props.icon} alt={props.title} class="h-4" />
              <h1>{props.title} - Crappy 98</h1>
            </div>
            <div class="flex gap-2 text-black">
              <WindowButton>_</WindowButton>
              <WindowButton>[]</WindowButton>
              <WindowButton>x</WindowButton>
            </div>
          </div>
          <nav class="flex gap-3 px-1 py-0.5 text-sm">
            <a><span class="underline">F</span>ile</a>
            <a><span class="underline">E</span>dit</a>
            <a><span class="underline">V</span>iew</a>
            <a><span class="underline">H</span>elp</a>
          </nav>
        </header>
        <section class="flex-grow h-full border-2 border-zinc-100 border-t-black border-l-black">
          {props.children}
        </section>
        <Taskbar />
      </main>
    </>
  );
}

function WindowButton(props: { children: JSXElement }) {
  return (
    <button class="bg-zinc-300 w-6 h-6 aspect-square border-black border-2 border-t-zinc-100 border-l-zinc-100 flex items-center justify-center font-bold">
      {props.children}
    </button>
  );
}
