"use client";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from "next/navigation";

interface ProviderProps {
    children: React.ReactNode;
}

export default function Providers({ children }: ProviderProps) {
    const pathName = usePathname();

    return (
        <NextUIProvider>
            {pathName !== "/dashboard/new-email" &&
            pathName !== "/" &&
            pathName !== "/sign-up" &&
            pathName !== "/sign-in" &&
            pathName !== "/subscribe" &&
            pathName !== "/success" ? (
                <div className="w-full flex">
                    <div className="w-[290px] h-screen overflow-y-scroll">
                        <></> {/* Dashboard Sidebar */}
                    </div>
                </div>
            ) : (
                <>{children}</>
            )}
        </NextUIProvider>
    );
}