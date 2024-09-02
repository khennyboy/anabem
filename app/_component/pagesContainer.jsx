import React from 'react'

const PagesContainer = ({ children }) => {
    return (
        <div className='mt-[8rem] px-16 tablet:px-8 android:px-4 android:mt-[6rem] py-8 mb-6'>{children}</div>
    )
}

export default PagesContainer