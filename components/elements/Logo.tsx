import Image from "next/image";
import GalsenextLogo from "@/public/galsenext.svg";

export const Logo = ({ width }: any) => {
  return (
    <div className="">
      <Image src={GalsenextLogo} alt="Galsenext Logo" width={width} />
    </div>
  );
};
