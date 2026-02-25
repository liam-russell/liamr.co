'use client';

import { QueryClientProvider as QCP, QueryClient } from "@tanstack/react-query";
import { PropsWithChildren, useState } from "react";

export default function QueryClientProvider(props: PropsWithChildren) {
    const [queryClient] = useState(() => new QueryClient());

    return <QCP client={queryClient}>
        {props.children}
    </QCP>;
}