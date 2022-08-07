import React from 'react'
import { useCan } from '../hooks/useCan';

interface ICanProps {
  children: React.ReactNode;
  permissions?: string[];
  roles?: string[];
}

export function Can({ children, permissions, roles }: ICanProps) {
  const userCanSeeComponent = useCan({ permissions, roles })

  if (!userCanSeeComponent) {
    return null;
  }

  return (
    <>
      {children}
    </>
  )
}