import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export const EmailAction = () => {
  const { toast } = useToast();
  const onSubmitHandler = () => {
    toast({
      title: "Email Submited!",
    });
  };
  return (
    <div className="relative flex h-[40rem] w-full flex-col items-center justify-center rounded-md bg-neutral-950 antialiased">
      <div className="mx-auto max-w-2xl p-4">
        <h1 className="relative z-10 bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-center font-sans text-lg font-bold text-transparent md:text-7xl">
          Join the Newsletter
        </h1>
        <p></p>
        <p className="relative z-10 mx-auto my-2 max-w-lg text-center text-sm text-neutral-500">
          By subscribing to our newsletter, you’ll receive exclusive updates on
          new projects and success stories. You&apos;ll also get insider tips on
          how to make the most out of your crowdfunding experience. Learn about
          inspiring creators and contributors in our community and receive
          special offers and opportunities available only to our subscribers.
        </p>
        <div className="relative z-10 mx-auto mt-4 flex w-full max-w-sm items-center space-x-2">
          <Input
            className="bg-neutral-950 text-white placeholder:text-neutral-700"
            type="email"
            placeholder="Email"
          />
          <Button
            type="submit"
            onClick={() => {
              onSubmitHandler();
            }}
          >
            Subscribe
          </Button>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};
