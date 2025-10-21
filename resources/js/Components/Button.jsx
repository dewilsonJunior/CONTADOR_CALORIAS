export default function Button({ style, eventFunction, label }) {
  return (
    <button
      className={`p-2 rounded-md cursor-pointer ${style}`}
      onClick={eventFunction}>
      {label}
    </button>
  );
}
