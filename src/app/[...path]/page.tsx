import { permanentRedirect } from "next/navigation";

export default function Home({ params }: { params: { path: string[] } }) {
  const website = process.env.WEBSITE;
  return permanentRedirect(`${website}/${params.path.join("/")}`);
}
