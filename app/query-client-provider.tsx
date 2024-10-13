'use client';

import { QueryClientProvider as QCP, QueryClient } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient()

export default function QueryClientProvider(props: PropsWithChildren) {
    return <QCP client={queryClient}>
        {props.children}
    </QCP>;
}