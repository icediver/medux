import { headers } from "next/headers";

export async function getPathname() {
  const headersList = headers();
  const domain = headersList.get("host") || "";
  const fullUrl = headersList.get("referer") || "";
  const [, pathname] =
    fullUrl.match(new RegExp(`https?:\/\/${domain}(.*)`)) || [];
  return pathname;
}

export function getPath() {
  // get the current file path on the server
  const currentFile = __filename;

  // get the string after ".next/server/app"
  let result = currentFile.split(".next/server/app")[1];

  // remove everything after the last "/"
  result = result.substring(0, result.lastIndexOf("/"));
  return result;
}
