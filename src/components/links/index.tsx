import Link from "next/link";
import { SiGit, SiGmail, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";


export function Links() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="[text-shadow:_0_4px_4px_rgb(0_0_0_/_15%)] text-lg font-regular text-center mt-10 md:text-2xl">
       Links
      </h2>
      <div className="flex justify-evenly items-center mt-8 w-full gap-6 mb-4 md:text-2xl">
        <Link href={""}>
          <SiLinkedin size={40} color="#244235"/>
        </Link>
        <Link href={""}>
          <FaFileDownload size={40} color="#244235" />
        </Link>
        <Link href={""}>
          <SiWhatsapp size={40} color="#244235" />
        </Link>
        <Link href={""}>
          <SiGmail size={40} color="#244235" />
        </Link>
        <Link href={""}>
          <SiGit size={40} color="#244235" />
        </Link>
      </div>
    </div>
  );
}
