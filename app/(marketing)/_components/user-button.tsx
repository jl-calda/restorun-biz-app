import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useConvexAuth } from "convex/react";

const UserAvatar = () => {
  const { user } = useUser();
  const { isLoading, isAuthenticated } = useConvexAuth();

  return (
    <>
      <div className="flex items-center gap-x-2">
        {isAuthenticated ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <SignInButton mode="modal" />
        )}
        <span className="text-xs font-semibold">{user?.fullName}</span>
      </div>
    </>
  );
};

export default UserAvatar;
