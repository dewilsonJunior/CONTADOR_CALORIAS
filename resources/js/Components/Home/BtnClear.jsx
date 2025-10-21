import Button from "@/Components/Button";

export default function BtnClear({ setSearch }) {
  const handleClearInput = () => {
    setSearch("");
  };

  return (
    <Button
      style="text-orange-900 border border-orange-900 hover:bg-orange-900 hover:text-white"
      eventFunction={handleClearInput}
      label="Clear"
    />
  );
}
