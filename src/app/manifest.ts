import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function manifest(): MetadataRoute.Manifest {
  return { name: "Sixth Lens Technology", short_name: "Sixth Lens", description: "Connected digital systems for ambitious businesses in Qatar.", start_url: "/", display: "standalone", background_color: "#0a0b0b", theme_color: "#f7d84a" };
}
