import Link from "next/link";
import { useRouter } from "next/router";
import { LayoutComponent, Nav } from "../comps";

export default function Home() {
  return (
    <LayoutComponent>
      <Nav />
      <div>Third</div>
    </LayoutComponent>
  );
}
