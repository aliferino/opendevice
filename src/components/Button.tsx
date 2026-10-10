import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'accent'

export interface ButtonLinkProps {
  readonly to: string
  readonly children: ReactNode
  readonly variant?: ButtonVariant
  readonly block?: boolean
  readonly small?: boolean
  readonly className?: string
  readonly ariaLabel?: string
}

export interface ButtonActionProps {
  readonly onClick: () => void
  readonly children: ReactNode
  readonly variant?: ButtonVariant
  readonly block?: boolean
  readonly small?: boolean
  readonly className?: string
  readonly ariaLabel?: string
  readonly type?: 'button' | 'submit'
}

function buildClassName(
  variant: ButtonVariant,
  block: boolean,
  small: boolean,
  className: string | undefined,
): string {
  const parts = ['button', `button--${variant}`]
  if (block) parts.push('button--block')
  if (small) parts.push('button--small')
  if (className !== undefined) parts.push(className)
  return parts.join(' ')
}

/** Tombol navigasi internal. Selalu memakai Link supaya bisa dibuka di tab baru. */
export function ButtonLink({
  to,
  children,
  variant = 'primary',
  block = false,
  small = false,
  className,
  ariaLabel,
}: ButtonLinkProps) {
  return (
    <Link to={to} className={buildClassName(variant, block, small, className)} aria-label={ariaLabel}>
      {children}
    </Link>
  )
}

/** Tombol aksi, misalnya untuk membuka panel filter atau mengosongkan input. */
export function ButtonAction({
  onClick,
  children,
  variant = 'primary',
  block = false,
  small = false,
  className,
  ariaLabel,
  type = 'button',
}: ButtonActionProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={buildClassName(variant, block, small, className)}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

export interface ButtonExtLinkProps extends Omit<ButtonLinkProps, 'to'> {
  readonly href: string
}

/** Tombol untuk tautan keluar, misalnya WhatsApp atau surel. */
export function ButtonExtLink({
  href,
  children,
  variant = 'primary',
  block = false,
  small = false,
  className,
  ariaLabel,
}: ButtonExtLinkProps) {
  return (
    <a
      href={href}
      className={buildClassName(variant, block, small, className)}
      aria-label={ariaLabel}
      rel="noreferrer noopener"
      target="_blank"
    >
      {children}
    </a>
  )
}
