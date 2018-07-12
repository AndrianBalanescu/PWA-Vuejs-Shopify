const shop = {
  phone: '+886777065834',
  address: 'ул. Алихана Букейхана 20А',
  shipment: 100,
  order: 400,
  workingHours: '40-60',
};

export default {
  async getShop() {
    const request = await new Object(shop);
    return request;
  },
};
