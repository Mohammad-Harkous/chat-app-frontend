import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <Input
    type="email"
    placeholder="Email"
    className="w-1/2 mx-auto mt-10 text-center bg-primary-400 dark:bg-primary-800 rounded-lg focus:border-sky-500 focus:outline focus:outline-sky-500 focus:ring-2 focus:ring-opacity-50"
  />
  );
}
