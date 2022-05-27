import React from 'react'

export default ({
  bg = 'transparent',
  color = 'primary',
  height = '32',
  strokeWidth = 2.5,
  width = '32',
  ...props
}) => (
  <svg
    fill={bg}
    height={`${height}px`}
    viewBox={`0 0 ${width} ${height}`}
    width={`${width}px`}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M24.554 2.521c-9.013-.016-18.484-.033-19.29-.033-1.807 0-3.764 1.25-3.764 3.508V28.22c0 1.759 1.54 3.268 3.393 3.268h22.055c2.182 0 3.552-1.264 3.552-3.31v-14.03"
      strokeLinecap="round"
      style={{ stroke: color, strokeWidth: strokeWidth }}
    />
    <circle
      cx="14.522"
      cy="19"
      r="5.75"
      style={{ stroke: color, strokeWidth: strokeWidth }}
    />
    <path
      d="M19.576 15.47l8.066-7.83"
      strokeLinecap="round"
      style={{ stroke: color, strokeWidth: strokeWidth }}
    />
  </svg>
)
