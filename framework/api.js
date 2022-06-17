const api = {
  getmenu: async () => {
    const response = await fetch(`https://api2.cuantoestaeldolar.pe/menu`);
    return response.json();
  },
  getOnlineExchange: async () => {
    const response = await fetch(
      `https://api2.cuantoestaeldolar.pe/exchangehouses`
    );
    return response.json();
  },
  getExchange: async (type) => {
    const response = await fetch(
      `https://api2.cuantoestaeldolar.pe/exchangerate?entity=${type}`
    );
    return response.json();
  },
  getDepartments: async () => {
    const response = await fetch(`https://api2.cuantoestaeldolar.pe/directory`);
    return response.json();
  },
  getProvinces: async (id) => {
    const response = await fetch(
      `https://api2.cuantoestaeldolar.pe/directory/${id}`
    );
    return response.json();
  },
  getDistricts: async (id, id1) => {
    const response = await fetch(
      `https://api2.cuantoestaeldolar.pe/directory/${id}/${id1}`
    );
    return response.json();
  },
  getHouseChange: async (id, id1, id2) => {
    const response = await fetch(
      `https://api2.cuantoestaeldolar.pe/directory/${id}/${id1}/${id2}`
    );
    return response.json();
  },
  getHomeChange: async (url) => {
    const response = await fetch(`https://api2.cuantoestaeldolar.pe/directory/houses/${url}`);
    return response.json();
  },
  getPosts: async () => {
    const response = await fetch(`https://api2.cuantoestaeldolar.pe/posts`);
    return response.json();
  },
  getBuy: async () => {
    const response = await fetch(`https://api2.cuantoestaeldolar.pe/bloomberg`);
    return response.json();
  },
  publicidad: async (section='home', device='desktop') => {
    const response = await fetch(`https://api2.cuantoestaeldolar.pe/advertising/${section}/${device}`);
    return response.json();
  }  
};

export default api;
