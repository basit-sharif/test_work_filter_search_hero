import React, { FC, ReactNode } from 'react'

const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className='max-w-7xl mx-auto'>
            {children}
        </div>
    )
}

export default Wrapper