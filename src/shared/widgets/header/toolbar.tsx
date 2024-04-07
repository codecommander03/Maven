"use client";

import { Button } from "@nextui-org/react";
import Link from "next/link";

type Props = {}

const Toolbar = (props: Props) => {
    return (
        <>
            <Button color="primary" className="text-lg">
                Start Trial
            </Button>
            <Link href={"/sign-up"}>
                Login
            </Link>
        </>
    )
}

export default Toolbar