import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="bg-[#18181B] text-foreground">
      <div className="m-auto px-4 py-20 lg:py-28 max-w-5xl lg:flex lg:items-center lg:justify-between lg:px-8">
        <h3 className="scroll-m-20 font-caption text-xl font-semibold tracking-tight">
          <span className="scroll-m-20 text-white font-caption text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Ready to Boost your productivity ?
          </span>
          <br />
          <span className="text-gray-400 ">
            Kickstart your project with Galsenext today !
          </span>
        </h3>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          <button
            className="inline-flex items-center justify-center rounded-md text-sm font-medium 
          ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 
          focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
          bg-home_secondary text-white hover:bg-home_secondary/90 h-11 rounded-md px-8"
          >
            <Link href="https://galsenext-docs.vercel.app/docs" target="_blank">
              Get started now !
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
