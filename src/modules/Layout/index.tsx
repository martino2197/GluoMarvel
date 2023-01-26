import React from 'react'
import MarvelHero from '../../utils/response_marvel.json'

interface Props {
    children?: React.ReactNode
  };

const Layout: React.FC<Props> = ({children}) => {
    const heros = localStorage.getItem('heros');
    if (!heros) {
        localStorage.setItem('heros', JSON.stringify(MarvelHero.data.results))
    }
    return (
    <>
        <div>
            {children}
        </div>
    </>
    )
}

export default Layout;