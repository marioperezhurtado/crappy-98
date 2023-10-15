import { Title, Link, A } from "solid-start";
import type { JSXElement } from "solid-js";
import Taskbar from "./Taskbar";

export default function Window(props: { title: string, icon: string, children: JSXElement }) {
  return (
    <>
      <Title>{props.title} | Crappy 98</Title>
      <Link rel="icon" href={props.icon} />
      <main class="flex overflow-hidden flex-col p-1.5 h-screen select-none bg-zinc-300">
        <header class="bg-zinc-300">
          <div class="flex justify-between items-center p-1 pl-2 text-white bg-gradient-to-r from-blue-900 via-blue-900 to-blue-600">
            <div class="flex gap-2 items-center">
              <img src={props.icon} alt={props.title} class="h-4" />
              <h1>{props.title}</h1>
            </div>
            <div class="flex gap-2 items-center text-black">
              <WindowButton>
                <img src="/window/minimize.svg" alt="Minimize" class="-mt-2" />
              </WindowButton>
              <WindowButton>
                <img src="/window/maximize.svg" alt="Maximize" class="-mt-1" />
              </WindowButton>
              <WindowButton href="/">
                <img src="/window/close.svg" alt="Close" class="-mt-1" />
              </WindowButton>
            </div>
          </div>
          <nav class="flex gap-3 py-0.5 px-1 text-sm">
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

function WindowButton(props: {href?: string, children: JSXElement}) {
  return (
    <A
      href={props.href ?? "#"}
      class="flex justify-center items-center w-6 h-6 font-bold border-2 border-black bg-zinc-300 aspect-square border-t-zinc-100 border-l-zinc-100">
      {props.children}
    </A>
  );
}
