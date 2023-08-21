'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { ReactNode, useState } from 'react'

interface Props {
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