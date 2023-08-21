"use client"
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import React, { useState, ReactNode } from 'react'

interface Props{
    children: ReactNode
}
function ReactQueryProvider({children}:Props) {
  const [queryClient] = useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default ReactQueryProvider