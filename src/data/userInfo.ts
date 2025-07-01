type userInfo = {
  name: string;
  id: number;
  img: string;
  birthday: string;
  shippingDefault?: [
    {
      name: string;
      id: number;
      photo: string;
      phoneNumber: number;
      shippingMArk: string;
      shippingAddress: {
        address: string;
        commune: string;
        district: string;
        province: string;
        postCode: number;
      };
    }
  ];
};
