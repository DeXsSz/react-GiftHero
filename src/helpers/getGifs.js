export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=eN9BaAUlosVG5hnMhc8DtlzsFbSELlWu&q=${encodeURI(category)}&limit=10`

    const res = await fetch(url);
    const { data } = await res.json()
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}