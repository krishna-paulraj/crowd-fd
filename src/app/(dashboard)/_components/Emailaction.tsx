import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const EmailAction = () => {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the Newsletter
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          By subscribing to our newsletter, you’ll receive exclusive updates on
          new projects and success stories. You&apos;ll also get insider tips on
          how to make the most out of your crowdfunding experience. Learn about
          inspiring creators and contributors in our community and receive
          special offers and opportunities available only to our subscribers.
        </p>
        <div className="flex w-full max-w-sm items-center space-x-2 relative z-10 mt-4 mx-auto">
          <Input
            className="bg-neutral-950 placeholder:text-neutral-700 text-white"
            type="email"
            placeholder="Email"
          />
          <Button type="submit" variant={"secondary"}>
            Subscribe
          </Button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};
