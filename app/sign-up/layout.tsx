import React from 'react'

type Props = {
    children: React.ReactNode
}

const SignUpLayout = ({ children }: Props) => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            {children}
        </div>
    )
}

export default SignUpLayout