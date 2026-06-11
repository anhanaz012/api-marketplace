"use client";

import { useRouter } from "next/navigation";
import { Button, Icon } from "@/shared/ui/index";
interface SuccessPageProps {
  title: string;
  message: string;
  actionBtnText: string;
  onActionClick?: () => void;
  redirectPath?: string;
}
const SuccessPage = ({
  title,
  message,
  actionBtnText,
  onActionClick,
  redirectPath,
}: SuccessPageProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (onActionClick) {
      onActionClick();
    } else if (redirectPath) {
      router.push(redirectPath);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center max-w-md mx-auto p-6">
        <Icon name="Success" size={70} />

        <h1 className="text-[40px] xs:max-md:text-2xl font-medium text-text-primary mb-4">
          {title}
        </h1>
        <p className="text-md xs:max-sm:max-w-xs text-text-secondary">
          {message}
        </p>

        <Button
          onClick={handleClick}
          variant="ghost"
          className="custom-shadow py-2 mt-4 text-text-primary"
        >
          {actionBtnText}
        </Button>
      </div>
    </div>
  );
};
export default SuccessPage;
