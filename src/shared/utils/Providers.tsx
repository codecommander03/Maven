"use client";
import { NextUIProvider } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import DashboardSideBar from "../widgets/dashboard/sidebar/dashboard.sidebar";
import { Toaster } from "react-hot-toast";
import { addStripe } from "@/actions/add.stripe";

interface ProviderProps {
    children: React.ReactNode;
}

export default function Providers({ children }: ProviderProps) {
    const pathName = usePathname();
    const { isLoaded, user } = useUser();

    const isStripeCustomerIdHas = async () => {
        await addStripe();
    };

    if (!isLoaded) {
        return null;
    } else {
        if (user) {
            isStripeCustomerIdHas();
        }
    }

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
            <Toaster position="top-center" reverseOrder={false} />
        </NextUIProvider>
    );
}