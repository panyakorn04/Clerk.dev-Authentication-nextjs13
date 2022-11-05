import React from 'react'

type Props = {
    children: React.ReactNode
}

const template = ({ children }: Props) => {
    return (
        <div>{children}</div>
    )
}

export default template