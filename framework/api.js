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
  getCities: async () => {
    const response = await fetch(`https://api2.cuantoestaeldolar.pe/directory`);
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
    console.log("res", response);
    return response.json();
  },
  getDistricts: async (id, id1) => {
    const response = await fetch(
      `https://api2.cuantoestaeldolar.pe/directory/${id}/${id1}`
    );
    console.log("res", response);
    return response.json();
  },
  getHouseChange: async (id, id1, id2) => {
    const response = await fetch(
      `https://api2.cuantoestaeldolar.pe/directory/${id}/${id1}/${id2}`
    );
    console.log("res", response);
    return response.json();
  },

  getPosts: async () => {
    const response = await fetch(`https://api2.cuantoestaeldolar.pe/posts`);
    console.log("res", response);
    return response.json();
  },
  getBuy: async () => {
    const response = await fetch(`https://api2.cuantoestaeldolar.pe/bloomberg`);
    return response.json();
  },
};

export default api;
