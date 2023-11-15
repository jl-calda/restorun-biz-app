import React from "react";

type UserPageLayoutProps = {
  children: React.ReactNode;
};

const UserPageLayout: React.FC<UserPageLayoutProps> = ({ children }) => {
  return (
    <div>
      {children}
      UserPageLayout
    </div>
  );
};

export default UserPageLayout;
