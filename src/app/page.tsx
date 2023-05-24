import Wrapper from "@/components/shared/Wrapper";
import basePath from "@/components/shared/basepath";
import AlsoLookingSlider from "@/components/views/AlsoLookinSlider";
import Footer from "@/components/views/Footer";
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
    <div className="pb-8 px-3 md:px-0">
      <Search villaHouseDataArray={villaHouseDataArray} />
      <AlsoLookingSlider villaHouseDataArray={villaHouseDataArray} />
      <Footer />
    </div>
  )
}
