import Button from "@/Components/Button";
import { router } from "@inertiajs/react";

export default function BtnSearch({ search }) {
  const handleSearchFood = () => {
    if (!search) {
      alert("Enter some food");
      return;
    }

    router.get("/searchFood", {
      search: search,
    });
  };

  return (
    <Button
      style="bg-orange-300 text-orange-900"
      eventFunction={handleSearchFood}
      label="Search"
    />
  );
}
