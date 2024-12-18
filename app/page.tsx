import About from "@/modules/home/about";
import Bio from "@/modules/home/bio";
import Heading from "@/modules/home/heading";
import LazyVoxel from "@/modules/home/lazy-voxel";

export default function Home() {
  return (
    <>
      <LazyVoxel />
      <Heading />
      <About />
      <Bio />
    </>
  );
}
