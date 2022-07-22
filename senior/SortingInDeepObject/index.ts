const area = {
  name: "DKI Jakarta",
  children: [
    {
      name: "Jakarta Timur"
    },
    {
      name: "Jakarta Selatan"
    },
    {
      name: "Jakarta Pusat",
      children: [
        {
          name: "Cempaka Putih"
        },
        {
          name: "Gambir"
        },
        {
          name: "Tanah Abang"
        },
        {
          name: "Johar Baru"
        },
        {
          name: "Kemayoran",
          children: [
            {
              name: "Gunung Sahari Selatan"
            },
            {
              name: "Kemayoran"
            },
            {
              name: "Harapan Mulya"
            },
            {
              name: "Cempaka Baru"
            },
            {
              name: "Kebon Kosong"
            },
            {
              name: "Sumur Batu"
            },
            {
              name: "Serdang"
            },
            {
              name: "Utan Panjang"
            }
          ]
        },
        {
          name: "Senen"
        },
        {
          name: "Menteng"
        },
        {
          name: "Sawah Besar"
        }
      ]
    },
    {
      name: "Jakarta Barat"
    },
    {
      name: "Jakarta Utara"
    }
  ]
};

export const sorter = args => {
  if (!!args.children && !!args.children.length) {
    args.children.sort((a, b) => a.name < b.name ? -1 : 1)
  }
  return args
};