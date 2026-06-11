import Button from "@/shared/ui/button/button";
import Link from "next/link";

const BackButton = () => {
  return (
    <div className="w-full p-10 flex justify-end">
      <Button
        variant="light"
        className="w-fit bg-primary/20 py-2 px-4 custom-shadow"
      >
        <Link href="/login">Back to Sign in</Link>
      </Button>
    </div>
  );
};

export default BackButton;
