"use client"

import React from 'react'

type ErrorPageRrop={
    error: Error
}

const ErrorPage : React.FC<ErrorPageRrop> = ({error}) => {
  return (
    <div>{error.message}</div>
  )
}

export default ErrorPage     