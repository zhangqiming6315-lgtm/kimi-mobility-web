import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

        <div>
          <Image
            src="/logo/KIMI_Master_Lockup.svg"
            alt="KIMI Mobility"
            width={160}
            height={60}
          />
        </div>


        <nav className="hidden md:flex gap-10 text-sm font-medium">

          <a href="#">Products</a>

          <a href="#">Technology</a>

          <a href="#">Company</a>

          <a href="#">Partners</a>

          <a href="#">Contact</a>

        </nav>


        <button
          className="
          rounded-full
          bg-black
          px-6
          py-3
          text-white
          text-sm
          "
        >
          Request Quote
        </button>


      </div>
    </header>
  );
}