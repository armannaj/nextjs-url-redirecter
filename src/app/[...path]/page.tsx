import { headers } from "next/headers";
import { permanentRedirect } from "next/navigation";

export default function Home({ params }: { params: { path: string[] } }) {
  const headersList = headers();
  const referer = headersList.get("referer");
  const parameters = referer ? `?utm_source=${referer}` : "";

  const website = process.env.WEBSITE;
  const allPaths = params.path.join("/");
  return permanentRedirect(`${website}/${allPaths}${parameters}`);
}
