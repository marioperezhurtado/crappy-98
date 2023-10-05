import { createSignal, onMount } from "solid-js";

export default function Canvas(props: { color: string, size: number }) {
  let canvas: HTMLCanvasElement | undefined;
  let context: CanvasRenderingContext2D | null;
  const [previous, setPrevious] = createSignal<{ x: number, y: number } | null>(null);

  function get_coords(e: PointerEvent) {
    if (!canvas) return { x: 0, y: 0 };

    const { clientX, clientY } = e;
    const { left, top } = canvas.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    return { x, y };
  }

  onMount(() => {
    if (!canvas) return;
    context = canvas.getContext('2d');

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
    };
  });

  return (
    <canvas
      class="border-2 border-zinc-400 flex-grow"
      ref={canvas}
      onPointerDown={(e) => {
        const coords = get_coords(e);
        if (!context) return;

        context.fillStyle = props.color;
        context.beginPath();
        context.arc(coords.x, coords.y, props.size / 2, 0, 2 * Math.PI);
        context.fill();
        setPrevious(coords);
      }}
      onPointerLeave={() => setPrevious(null)}
      onPointerUp={() => setPrevious(null)}
      onPointerMove={(e) => {
        const coords = get_coords(e);
        if (!context || !previous()) return;

        context.strokeStyle = props.color;
        context.lineWidth = props.size;
        context.lineCap = 'round';
        context.beginPath();
        context.moveTo(previous().x, previous().y);
        context.lineTo(coords.x, coords.y);
        context.stroke();
        setPrevious(coords);
      }}
    />
  );
};
