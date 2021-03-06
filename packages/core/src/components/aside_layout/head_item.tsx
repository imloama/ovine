/**
 * App头部工具 ICON 按钮
 */

import { Button } from 'amis'
import { RendererProps } from 'amis/lib/factory'
import React, { cloneElement } from 'react'

import { jumpTo } from '@/routes/exports'

import { Amis } from '../amis/schema'

type HeadItemProps = {
  className?: string
  icon?: string
  faIcon?: string
  children?: any
  tip?: string
  onClick?: any
  href?: string
  blank?: boolean
  body?: any
}

type Props = Partial<RendererProps> & {
  itemProps: HeadItemProps
}

export default (props: Props) => {
  const { itemProps, theme } = props
  const { className = '', icon, faIcon, children, onClick, href, blank, tip, body } = itemProps

  const onItemClick = (e: any) => {
    if (href) {
      jumpTo(href, blank)
    }

    if (onClick) {
      onClick(e)
    }
  }

  return (
    <Button
      iconOnly
      theme={theme}
      className={`no-shadow ${className}`}
      onClick={onItemClick}
      level="link"
    >
      {!icon && !faIcon ? null : (
        <i className={`${icon || `fa fa-${faIcon}`}`} data-position="bottom" data-tooltip={tip} />
      )}
      {children &&
        (!tip
          ? children
          : cloneElement(children, { 'data-tooltip': tip, 'data-position': 'bottom' }))}
      {body && <Amis schema={body} />}
    </Button>
  )
}
