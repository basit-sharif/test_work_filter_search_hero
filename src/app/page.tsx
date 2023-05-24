import Wrapper from "@/components/shared/Wrapper";
import basePath from "@/components/shared/basepath";
import Search from "@/components/views/Search";

async function fetchVillaHouseData() {
  const res = await fetch(`${basePath}/api/products`, {
    next: {
      revalidate: 120
    }
  })

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json()
}

export default async function Home() {
  const villaHouseDataArray = await fetchVillaHouseData();
  return (
    <Search villaHouseDataArray={villaHouseDataArray} />
  )
}
