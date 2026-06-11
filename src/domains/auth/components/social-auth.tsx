import { Icon } from "@/shared/ui";
import Button from "@/shared/ui/button/button";

export const SocialAuth = () => {
  return (
    <>
      {/* Divider with "Sign in with" text */}
      <div className="flex items-center gap-4">
        <div className="h-0.5 w-full bg-linear-to-r from-transparent to-[#C3C3C3]" />
        <p className="min-w-fit text-muted">Sign in with</p>
        <div className="h-0.5 w-full bg-linear-to-l from-transparent to-[#C3C3C3]" />
      </div>

      {/* Social authentication buttons */}
      <div className="grid grid-cols-2 xs:max-sm:grid-cols-1 gap-4">
        <Button
          leftIcon={<Icon name="Google" />}
          variant="ghost"
          className="w-full border-2 border-secondary"
        >
          Google
        </Button>
        <Button
          leftIcon={<Icon name="Github" />}
          variant="ghost"
          className="w-full border-2 border-secondary"
        >
          Github
        </Button>
      </div>
    </>
  );
};
