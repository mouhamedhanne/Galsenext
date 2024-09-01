import { Logo } from "../elements/Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#18181B]">
      <div className="max-w-4xl flex-wrap w-full flex gap-4 m-auto px-4 pb-24">
        <div className="w-full flex justify-between max-lg:flex-col">
          <div className="flex flex-col gap-4">
            <div className="space-y-1">
              <Logo width="60" />
            </div>
            <p className="text-sm text-muted-foreground italic">
              © 2024 Galsenext
            </p>
          </div>
          <div className="flex flex-col items-start mt-4 lg:mt-0 lg:items-end gap-4">
            <p className="text-lg text-white font-semibold">Legal</p>
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:underline"
            >
              Terms
            </Link>
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:underline"
            >
              Privacy
            </Link>
          </div>

          <div className="flex flex-col items-start mt-4 lg:mt-0 lg:items-end gap-4">
            <p className="text-lg text-white font-semibold">Social</p>
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:underline"
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.linkedin.com/in/mouhamed-el-malick-hanne-99199a2a6/"
              target="_blank"
              className="text-sm text-muted-foreground hover:underline"
            >
              Twitter
            </Link>
            <Link
              href=""
              className="text-sm text-muted-foreground hover:underline"
            >
              Instagram
            </Link>
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:underline"
            >
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
