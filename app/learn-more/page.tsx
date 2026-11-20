import { permanentRedirect } from "next/navigation"

export default function LearnMoreRedirect() {
  permanentRedirect("/about")
}
