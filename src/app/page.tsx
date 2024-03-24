import { headers } from "next/headers";
import { permanentRedirect } from "next/navigation";

export default function Home() {
  const headersList = headers();
  const referer = headersList.get("referer");
  const parameters = referer ? `?utm_source=${referer}` : "";

  const website = process.env.WEBSITE;
  return permanentRedirect(`${website}${parameters}`);
}
