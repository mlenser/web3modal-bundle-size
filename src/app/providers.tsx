'use client'

import { type State, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { metadata, projectId, wagmiConfig } from "@/app/config/wagmi";
import { createWeb3Modal } from "@web3modal/wagmi/react";

const queryClient = new QueryClient()

// Create modal
createWeb3Modal({
  metadata,
  wagmiConfig,
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

export default function Providers({
  children,
  initialState,
}: Readonly<{
  children: React.ReactNode;
  initialState?: State
}>) {
  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
