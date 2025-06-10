import SignUpForm from "@/components/SignUpForm";
import { CloudUpload } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-violet-50 to-violet-100">
      {/* Use the unified Navbar component */}
      <Navbar />

      <main className="flex-1 flex justify-center items-center p-6">
        <SignUpForm />
      </main>

      {/* Footer with purple theme */}
      <footer className="bg-violet-50 border-t border-violet-200 py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} FileNest. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}