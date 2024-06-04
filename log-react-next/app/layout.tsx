import type { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';


export const metadata: Metadata = {
  title: "日志管理应用",
  description: "日志管理应用",
};

const RootLayout = ({ children }: React.PropsWithChildren) => {

  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
