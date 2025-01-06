import React from 'react'

export function Space(props: { size?: number; horizontal?: boolean }) {
  if (props.horizontal) {
    return <div style={{ width: props.size || 20 }}></div>
  }
  return <div style={{ height: props.size || 20 }} />
}
