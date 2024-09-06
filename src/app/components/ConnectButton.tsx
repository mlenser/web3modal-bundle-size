'use client'

import type { ReactNode } from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";

export const ConnectButton = ({ children = 'Connect', ...rest }: { children?: ReactNode }) => {
  const { open } = useWeb3Modal()

  return <button {...rest} onClick={() => open}>{children}</button>
}