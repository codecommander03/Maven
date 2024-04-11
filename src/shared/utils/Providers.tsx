"use client";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import DashboardSideBar from "../widgets/dashboard/sidebar/dashboard.sidebar";

interface ProviderProps {
    children: React.ReactNode;
}

export default function Providers({ children }: ProviderProps) {
    const pathName = usePathname();
    const { isLoaded, user } = useUser();

    if(!isLoaded) return <></>;

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
                        <DashboardSideBar />
                    </div>
                    {children}
                </div>
            ) : (
                <>{children}</>
            )}
        </NextUIProvider>
    );
}