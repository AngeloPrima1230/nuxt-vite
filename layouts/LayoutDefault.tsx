import "./style.css";

import "./tailwind.css";
import logoUrl from "../assets/logo.svg";
import { Link } from "../components/Link.js";

export default function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <div className={"min-h-screen flex flex-col"}>
      <Header />
      <div className={"flex flex-1"}>
        <Sidebar>
          <Logo />
          <Link href="/">Welcome</Link>
          <Link href="/todo">Todo</Link>
          <Link href="/star-wars">Data Fetching</Link>
        </Sidebar>
        <DrawingArea>{children}</DrawingArea>
      </div>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className={"bg-gray-800 text-white p-4 shadow-lg"}>
      <div className={"flex items-center justify-between"}>
        <h1 className={"text-xl font-bold"}>My Vike App</h1>
        <nav className={"flex space-x-4"}>
          <Link href="/" className={"text-white hover:text-gray-300"}>Home</Link>
          <Link href="/todo" className={"text-white hover:text-gray-300"}>Todo</Link>
          <Link href="/star-wars" className={"text-white hover:text-gray-300"}>Data Fetching</Link>
        </nav>
      </div>
    </header>
  );
}

function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div id="sidebar" className={"w-64 p-5 flex flex-col shrink-0 border-r-2 border-r-gray-200 bg-gray-50"}>
      {children}
    </div>
  );
}

function DrawingArea({ children }: { children: React.ReactNode }) {
  return (
    <div className={"flex-1 flex"}>
      <div className={"flex-1 p-5"}>
        <div id="page-content" className={"h-full"}>
          {children}
        </div>
      </div>
      <PropertyPanel />
    </div>
  );
}

function PropertyPanel() {
  return (
    <div className={"w-80 p-4 bg-gray-100 border-l-2 border-l-gray-200"}>
      <h3 className={"text-lg font-semibold mb-4"}>Properties</h3>
      <div className={"space-y-4"}>
        <div>
          <label className={"block text-sm font-medium text-gray-700 mb-1"}>Width</label>
          <input
            type="number"
            className={"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}
            placeholder="Enter width"
          />
        </div>
        <div>
          <label className={"block text-sm font-medium text-gray-700 mb-1"}>Height</label>
          <input
            type="number"
            className={"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}
            placeholder="Enter height"
          />
        </div>
        <div>
          <label className={"block text-sm font-medium text-gray-700 mb-1"}>Color</label>
          <input
            type="color"
            className={"w-full h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"}
          />
        </div>
        <div>
          <label className={"block text-sm font-medium text-gray-700 mb-1"}>Opacity</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            className={"w-full"}
          />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className={"bg-gray-800 text-white p-4 text-center"}>
      <p className={"text-sm"}>© 2024 My Vike App. All rights reserved.</p>
    </footer>
  );
}

function Logo() {
  return (
    <div className={"p-5 mb-2"}>
      <a href="/">
        <img src={logoUrl} height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}
