"use client";
import { Search } from "lucide-react";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-primary/80 backdrop-blur-sm border-b border-secondary px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="text-2xl font-bold text-accent">AnimeVerse</span>
        <SearchBar />
      </div>
    </nav>
  );
}