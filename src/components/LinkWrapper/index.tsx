import Link from 'next/link'
import * as S from './styles'

//@styled-icons/fluentui-system-filled/BookInformation
import { ReactNode } from 'react'

type LinkWrapperProps = {
  href: string
  children: ReactNode
}

export const LinkWrapper = ({ href, children }: LinkWrapperProps) => (
  <S.Wrapper>
    <Link href={href}>{children}</Link>
  </S.Wrapper>
)
