import React from 'react'
import GifGridItem from './GifGridItem'
import PropTypes from 'prop-types'
import { useFecthGifs } from '../hooks/useFetchGifs'

const GifGrid = ({ category }) => {
    const { data: images, loading } = useFecthGifs(category);
    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {
                loading && <p>Loadingg...</p>
            }
            <div className="cardGrid">

                {
                    images.map(item => {
                        return <GifGridItem key={item.id}
                            {...item}
                        />
                    })
                }
            </div>
        </>
    )
}
GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
