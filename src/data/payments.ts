type payment = {
  paymentId: number;
  bought: {
    productName: string;
    productId: number;
    productAmount: number;
    productPrice: number;
    quantity: number;
  }[];
  userInfo: {
    name: string;
    id: number;
    phoneNumber: number;
    shippingMArk: string;
    shippingAddress: {
      address: string;
      commune: string;
      district: string;
      province: string;
      postCode: string;
    };
  };
};
