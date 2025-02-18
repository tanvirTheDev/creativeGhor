import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.png";
export function Logo() {
  return (
    <Link href="/" className="mr-6 flex items-center space-x-2">
      <Image src={logo} alt="logo" width={100} height={100} />
    </Link>
  );
}
