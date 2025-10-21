import ContainerAlert from "@/Components/ContainerAlert";

export default function Table({ result }) {
  return result?.length ? (
    <div className="overflow-x-auto w-full mt-5 rounded-md">
      <table className="w-full rounded-md shadow-xl bg-orange-300">
        <thead className="bg-orange-900 text-orange-300 uppercase text-sm">
          <tr className="text-center">
            <th className="py-3 px-4 border-b">Name</th>
            <th className="py-3 px-4 border-b">Portion</th>
            <th className="py-3 px-4 border-b">Calories</th>
          </tr>
        </thead>

        <tbody className="text-orange-700 divide-y divide-gray-200">
          {result.map((food) => (
            <tr className="hover:bg-gray-50 text-center">
              <td className="py-3 px-4">{food.Display_Name}</td>
              <td className="py-3 px-4">{food.Portion_Display_Name}</td>
              <td className="py-3 px-4">
                {parseFloat(food.Calories).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <ContainerAlert message="NO RECORD FOUND" />
  );
}
