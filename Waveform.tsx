export default function Waveform({ playing }: { playing: boolean }) {
  return (
    <div className="flex items-end gap-[2px] h-3.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={playing ? "wf-bar" : ""}
          style={{
            width: 2.5,
            borderRadius: 2,
            background: "linear-gradient(180deg, #C1442A, #D8A248)",
            height: playing ? undefined : 4,
            animationDelay: `${i * 0.12}s`,
          }}
        />
      ))}
    </div>
  );
}
