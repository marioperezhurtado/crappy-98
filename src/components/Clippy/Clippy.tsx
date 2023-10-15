import { createSignal, onMount, onCleanup } from "solid-js";
import styles from "./Clippy.module.css";

export default function Clippy() {
  const [mousePos, setMousePos] = createSignal({ x: 0, y: 0 });
  const [rekt, setRekt] = createSignal({ left: 0, top: 0, width: 0, height: 0 });
  const anchorX = () => rekt().left + rekt().width / 2 - 5;
  const anchorY = () => rekt().top + rekt().height / 2 - 16;
  const rotation = () => calculateRotation();

  let clippy: HTMLImageElement | undefined = undefined;

  function handleMouseMove(e: MouseEvent) {
    setMousePos({ x: e.clientX, y: e.clientY });
  }

  function angle(cx: number, cy: number, ex: number, ey: number) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = rad * (180 / Math.PI);
    return deg;
  }

  function calculateRotation() {
    return angle(anchorX(), anchorY(), mousePos().x, mousePos().y);
  };

  onMount(() => {
    if (clippy) {
      setRekt(clippy.getBoundingClientRect());
    }

    if (typeof document !== "undefined") {
      document.addEventListener("mousemove", handleMouseMove);
    }
  });
  onCleanup(() => {
    if (typeof document !== "undefined") {
      document.removeEventListener("mousemove", handleMouseMove);
    }
  });

  return (
    <div class="fixed right-5 bottom-12">
      <div class="relative w-20 h-20">
        <img
          ref={clippy}
          src="/clippy/clippy.webp"
          alt="Clippy"
          class="absolute top-0 z-20 w-20"
        />
        <img
          src="/clippy/eye.webp"
          alt="Clippy's eye"
          class="absolute z-20 w-3 top-[0.9rem] left-[1rem]"
          style={{ transform: `rotate(${rotation()}deg)` }}
        />
        <img
          src="/clippy/eye.webp"
          alt="Clippy's eye"
          class="absolute z-20 w-3 top-[1.1rem] right-[2.1rem]"
          style={{ transform: `rotate(${rotation()}deg)` }}
        />
        <div class="absolute right-0 -top-full p-2 w-44 bg-yellow-100 rounded-md border border-black shadow-md translate-y-3">
          <p class="text-xs">
            Hi! It's me, Clippy. It's been a while, hasn't it? I'm glad to see you again!
          </p>
          <div class={`absolute -bottom-3 left-24 ${styles.triangle}`} />
        </div>
      </div>
    </div>
  );
}
