import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function manifest(): MetadataRoute.Manifest {
  return { name: "Sixth Lens Technology", short_name: "Sixth Lens", description: "Connected digital systems for ambitious businesses in Qatar, across the GCC and internationally.", start_url: "/", display: "standalone", background_color: "#102240", theme_color: "#EC3F29" };
}
