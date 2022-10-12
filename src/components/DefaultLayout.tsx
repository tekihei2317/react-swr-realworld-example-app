import React from 'react'
import { PageFooter } from './PageFooter'
import { PageHeader } from './PageHeader'

type DefaultLayoutProps = {
  children: React.ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <PageHeader />
      {children}
      <PageFooter />
    </>
  )
}
