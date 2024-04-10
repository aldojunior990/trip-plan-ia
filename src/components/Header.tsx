import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full h-16 flex items-center justify-start py-16 border-b border-gray-300">
      <Logo />
    </header>
  );
}
