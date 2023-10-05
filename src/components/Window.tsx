import { A, Title } from "solid-start";
import type { JSXElement } from "solid-js";
import type { AnchorProps } from "@solidjs/router";
import Clippy from "./Clippy";

export default function Window(props: { title: string, children: JSXElement }) {
  return (
    <>
      <Title>{props.title} | Crappy Games</Title>
      <main class="bg-zinc-300 h-screen overflow-hidden p-1.5 flex flex-col">
        <header class="bg-zinc-300">
          <div class="bg-gradient-to-r from-blue-900 via-blue-900 to-blue-600 text-white p-1 pl-2 flex justify-between items-center">
            <h1>{props.title} - Crappy Games</h1>
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
          <Clippy />
        </section>
        <footer class="bg-zinc-300 pt-1 flex items-center justify-between text-sm">
          <ul class="flex gap-2">
            <ProgramButton href="/start">
              <img src="windows.png" alt="Windows" class="w-4" />
              Start</ProgramButton>
            <ProgramButton href="/checkers">Checkers</ProgramButton>
            <ProgramButton href="/solitaire">Solitaire</ProgramButton>
            <ProgramButton href="/paint">Paint</ProgramButton>
          </ul>
          <p class="mr-1">Made with ❤️ by
            <A href="https://marioph.com" target="_blank" class="underline ml-2">
              Mario
            </A>
          </p>
        </footer>
      </main>
    </>
  );
}

function WindowButton(props: { children: JSXElement }) {
  return (
    <button class="bg-zinc-300 h-6 w-6 border-black border-2 border-t-zinc-100 border-l-zinc-100 flex items-center justify-center font-bold hover:border-t-black hover:border-l-black hover:border-zinc-100 transition">
      {props.children}
    </button>
  );
}

function ProgramButton(props: AnchorProps) {
  return (
    <li>
      <A
        href={props.href}
        class="bg-zinc-300 px-1 border-black border-2 border-t-zinc-100 border-l-zinc-100 flex items-center gap-1 hover:border-t-black hover:border-l-black hover:border-zinc-100 transition"
        activeClass="border-zinc-100 !border-t-black !border-l-black bg-mesh">
        {props.children}
      </A>
    </li>
  );
}
