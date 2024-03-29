import React from 'react'

const AppsIcon = ({ color, width = 24, height = 24, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    {...props}
  >
    <path
      d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"
      fill={color}
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
)

export default AppsIcon
