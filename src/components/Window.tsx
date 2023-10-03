import type { JSXElement } from "solid-js";
import Clippy from "./Clippy";

export default function Window(props: { children: JSXElement }) {
  return (
    <main class="bg-zinc-300 h-screen p-1.5 flex flex-col">
      <header class="bg-zinc-300">
        <div class="bg-gradient-to-r from-blue-900 via-blue-900 to-blue-600 text-white p-1 pl-2 flex justify-between items-center">
          <h1>Untitled - Crappy Games</h1>
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
      <section class="pt-20 bg-white flex-grow border-2 border-zinc-100 border-t-black border-l-black justify-between flex flex-col">
        <div>
          {props.children}
        </div>
        <Clippy />
      </section>
      <footer class="bg-zinc-300 pt-1 flex items-center justify-between text-sm">
        <ul class="flex gap-2">
          <FooterButton>
            <img src="windows.png" alt="Windows" class="w-4" />
            Start</FooterButton>
          <FooterButton>Checkers</FooterButton>
          <FooterButton>Solitaire</FooterButton>
          <FooterButton>Chess</FooterButton>
        </ul>
        <p class="mr-1">Made with ❤️ by
          <a href="https://marioph.com" target="_blank" class="underline ml-2">
            Mario
          </a>
        </p>
      </footer>
    </main>
  );
}

function WindowButton(props: { children: JSXElement }) {
  return (
    <button class="bg-zinc-300 h-6 w-6 border-black border-2 border-t-zinc-100 border-l-zinc-100 flex items-center justify-center font-bold hover:border-t-black hover:border-l-black hover:border-zinc-100 transition">
      {props.children}
    </button>
  );
}

function FooterButton(props: { children: JSXElement }) {
  return (
    <li>
      <button class="bg-zinc-300 px-1 border-black border-2 border-t-zinc-100 border-l-zinc-100 flex items-center gap-1 hover:border-t-black hover:border-l-black hover:border-zinc-100 transition">
        {props.children}
      </button>
    </li>
  );
}
