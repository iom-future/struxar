import { useCountUp } from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

export default function StatCounter({ value, prefix = "", suffix = "", label }) {
  const countUpRef = useRef(null);
  const { ref: containerRef, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const { start } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: value,
    duration: 2.5,
    separator: ",",
    startOnMount: false,
    prefix,
    suffix,
  });

  useEffect(() => {
    if (inView) {
      start();
    }
  }, [inView, start]);

  return (
    <div ref={containerRef} className="text-center px-4 py-6">
      <div
        className="font-display font-extrabold text-blue-500"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
      >
        <span ref={countUpRef}>0</span>
      </div>
      <div
        className="font-body text-[0.8rem] uppercase tracking-[0.06em] mt-2"
        style={{ color: "rgba(255,255,255,0.55)" }}
      >
        {label}
      </div>
    </div>
  );
}
