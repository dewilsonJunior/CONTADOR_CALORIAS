export default function ContainerAlert({ message }) {
  if (!message) return null;

  return (
    <div className="mt-5 bg-orange-300 w-full flex justify-center p-5 rounded">
      <h2 className="text-orange-900 text-center font-semibold">{message}</h2>
    </div>
  );
}
