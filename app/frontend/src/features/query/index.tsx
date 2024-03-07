/* eslint-disable react-refresh/only-export-components */
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  },
});

export function allDataMutateSuccess(name: string) {
  return {
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [`get-all-${name}`],
      });
    },
  };
}

export default function Provider({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
