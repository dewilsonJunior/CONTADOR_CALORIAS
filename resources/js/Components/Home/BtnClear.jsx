import Button from "@/Components/Button";

export default function BtnClear({ setSearch, setShowTable }) {
  const handleClearInput = () => {
    setSearch("");
    setShowTable(false);
  };

  return (
    <Button
      style="text-orange-900 border border-orange-900 hover:bg-orange-900 hover:text-white"
      eventFunction={handleClearInput}
      label="Clear"
    />
  );
}
