const area = {
  name: "DKI Jakarta",
  children: [
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
          name: "Johar Baru"
        },
        {
          name: "Kemayoran",
          children: [
            {
              name: "Cempaka Baru"
            },
            {
              name: "Gunung Sahari Selatan"
            },
            {
              name: "Harapan Mulya"
            },
            {
              name: "Kebon Kosong"
            },
            {
              name: "Kemayoran"
            },
            {
              name: "Serdang"
            },
            {
              name: "Sumur Batu"
            },
            {
              name: "Utan Panjang"
            }
          ]
        },
        {
          name: "Menteng"
        },
        {
          name: "Sawah Besar"
        },
        {
          name: "Senen"
        },
        {
          name: "Tanah Abang"
        }
      ]
    },
    {
      name: "Jakarta Timur"
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

