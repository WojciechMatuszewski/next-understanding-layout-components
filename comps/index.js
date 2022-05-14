import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function LayoutComponent({ children }) {
  return <div>{children}</div>;
}

export function Nav() {
  const { pathname } = useRouter();

  useEffect(() => {
    console.log("Nav mounted", "state of window", typeof window);
    return () => {
      console.log("Nav unmounted", "state of window", typeof window);
    };
  }, []);

  return (
    <ul
      style={{
        listStyle: "none",
        gap: 12,
        width: 350,
        height: 100,
        border: "1px solid red",
        overflowX: "scroll",
        padding: 0,
        margin: 0,
        alignItems: "center",
        display: "flex"
      }}
    >
      <li
        style={{
          width: 200,
          flexShrink: 0,
          height: 50,
          cursor: "pointer",
          background: pathname === "/" ? "lightblue" : "transparent"
        }}
      >
        <Link href="/" prefetch={false}>
          <a>index</a>
        </Link>
      </li>
      <li
        style={{
          width: 200,
          flexShrink: 0,
          height: 50,
          cursor: "pointer",
          background: pathname === "/second" ? "lightblue" : "transparent"
        }}
      >
        <Link href="/second" prefetch={false}>
          <a>second</a>
        </Link>
      </li>
      <li
        style={{
          width: 200,
          flexShrink: 0,
          height: 50,
          cursor: "pointer",

          background: pathname === "/third" ? "lightblue" : "transparent"
        }}
      >
        <Link href="/third" prefetch={false}>
          <a>third</a>
        </Link>
      </li>
    </ul>
  );
}
