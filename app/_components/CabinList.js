// import { unstable_noStore as noStore } from "next/cache";
import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";

async function CabinList({ filter }) {
  // for parcial prerendring, revaledate the data otherwise the data is not refected
  // noStore();
  const cabins = await getCabins();

  if (!cabins.length) return null;

  let displayCabins;

  switch (filter) {
    case "all":
      displayCabins = cabins;
      break;
    case "small":
      displayCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
      break;
    case "medium":
      displayCabins = cabins.filter(
        (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
      );
      break;
    case "large":
      displayCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);
      break;

    default:
      displayCabins = cabins;
      break;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
