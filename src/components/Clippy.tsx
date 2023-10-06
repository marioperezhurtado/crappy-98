import { createSignal, onMount, onCleanup } from "solid-js";

export default function Clippy() {
  const [mousePos, setMousePos] = createSignal({ x: 0, y: 0 });
  const [rekt, setRekt] = createSignal({ left: 0, top: 0, width: 0, height: 0 });
  const anchorX = () => rekt().left + rekt().width / 2;
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
    <div class="fixed right-7 bottom-12">
      <div class="relative">
        <img
          ref={clippy}
          src="/clippy/clippy.webp"
          alt="Clippy"
          class="w-10"
        />
        <img 
          src="/clippy/eye.webp"
          alt="Clippy's eye"
          class="w-3.5 absolute top-4 left-0.5"
          style={{ transform: `rotate(${rotation()}deg)` }}
        />
        <img
          src="/clippy/eye.webp"
          alt="Clippy's eye"
          class="w-3.5 absolute top-5 right-1"
          style={{ transform: `rotate(${rotation()}deg)` }}
        />
      </div>
    </div>
  );
}
