
const api = {
    getmenu: async () => {
        const response = await fetch(`https://api2.cuantoestaeldolar.pe/menu`);
        return response.json();
    },
    getOnlineExchange: async () => {
        const response = await fetch(`https://api2.cuantoestaeldolar.pe/exchangehouses`);
        return response.json();
    },
    getExchange: async (type) => {
        const response = await fetch(`https://api2.cuantoestaeldolar.pe/exchangerate?entity=${type}`)
        return response.json()
    },
    getCities: async () => {
        const response = await fetch(`https://api2.cuantoestaeldolar.pe/directory`)
        return response.json()
    },
    getDistricts: async (id) => {
        const response = await fetch(`https://api2.cuantoestaeldolar.pe/directory/${id}`)
        return response.json()
    },
    getPosts: async ()=> {
        const response = await fetch(`https://api2.cuantoestaeldolar.pe/posts`)
        console.log('res', response)
        return response.json()
    },
    getBuy: async ()=> {
        const response = await fetch(`https://api2.cuantoestaeldolar.pe/bloomberg`)
        return response.json()
    }
}

export default api;