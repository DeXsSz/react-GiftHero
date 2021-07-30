import React from 'react'
import AddCategory from './component/AddCategory';
import GifGrid from './component/GifGrid';

const GiftHeroApp = () => {
    const [categories, setCategories] = React.useState(['One Punch']);
    // const handleAdd = (e) => {
    //     e.preventDefault()
    //     setCategories([...categories, 'Hunter'])
    // }
    return (
        <>
            <h2>GiftHeroApp</h2>
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}
            <AddCategory setCategories={setCategories} />
            <ol>
                {
                    categories.map((category) => {
                        return <GifGrid key={category} category={category} />
                    })
                }
            </ol>
        </>
    )
}

export default GiftHeroApp
