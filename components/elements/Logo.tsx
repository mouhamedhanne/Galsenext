import Image from "next/image";
import GalsenextLogo from "@/public/galsenext.svg";

export const Logo = ({ width }: any) => {
  return (
    <div className="flex items-center gap-[4px]">
      <Image src={GalsenextLogo} alt="Galsenext Logo" width={width} />
      <h2 className="text-3xl font-extrabold">Galsenext</h2>
    </div>
  );
};
