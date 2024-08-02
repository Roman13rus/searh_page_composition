/**Компонент, отвечающий за реализацию верхней части страницы**/

import React from 'react'
import HeaderNews from './HeaderNews'
import HeaderTopNews from './HeaderTopNews'

const Header = () => {
  return (
    <div className="header">
        <HeaderNews />
        <HeaderTopNews />
    </div>
  )
}

export default Header