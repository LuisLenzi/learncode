export async function Product() {
  return [
    {
      id: 1,
      productName: 'iPhone 13 Pro',
      description: 'Tela de 6,1 polegadas',
      price: 9499,
      colors: [
        {
          colorName: 'Azul-Sierra',
          backgroundColor: '#9ab5cd',
        },
        {
          colorName: 'Prateado',
          backgroundColor: '#f7f7f0',
        },
        {
          colorName: 'Dourado',
          backgroundColor: '#fbe9d0',
        },
        {
          colorName: 'Grafite',
          backgroundColor: '#6a6864',
        },
      ],
      style: {
        titleColor: 'var(--white-solid)',
        backgroundColor: '#123990',
        image: 'iphone.png',
      },
    },
    {
      id: 2,
      productName: 'Samsung S20 FE',
      description: 'Tela de 6,2 polegadas',
      price: 2199,
      colors: [
        {
          colorName: 'Cloud Mint',
          backgroundColor: '#8bcfba',
        },
        {
          colorName: 'Cloud Navy',
          backgroundColor: '#283344',
        },
        {
          colorName: 'Cloud Orange',
          backgroundColor: '#ffc189',
        },
        {
          colorName: 'Cloud White',
          backgroundColor: '#f6f2f1',
        },
      ],
      style: {
        titleColor: 'var(--white-solid)',
        backgroundColor: '#56b798',
        image: 's20fe.png',
      },
    },
    {
      id: 3,
      productName: 'Samsung S21 Ultra',
      description: 'Tela de 6,8 polegadas',
      price: 7199,
      colors: [
        {
          colorName: 'Prata',
          backgroundColor: '#c4d1da',
        },
        {
          colorName: 'Preto',
          backgroundColor: '#0d0d0d',
        },
      ],
      style: {
        titleColor: 'var(--gray-solid)',
        backgroundColor: '#becdd7',
        image: 's21ultra.png',
      },
    },
    {
      id: 4,
      productName: 'Galaxy Z Flip3 5G',
      description: 'Tela de 6,7 polegadas',
      price: 6299.1,
      colors: [],
      style: {
        titleColor: 'var(--gray-solid)',
        backgroundColor: '#dfd1ee',
        image: 'zflip.png',
      },
    },
    {
      id: 5,
      productName: 'Apple Watch Serie 6 GPS 44MM',
      description: '6ª Geração',
      price: 3846.99,
      colors: [],
      style: {
        titleColor: 'var(--gray-solid)',
        backgroundColor: '#e54149',
        image: 'applewatch.png',
      },
    },
    {
      id: 6,
      productName: 'Headset Razer Blackshark',
      description: 'Tecnologia 7.1',
      price: 799.9,
      colors: [],
      style: {
        titleColor: '#17ed17',
        backgroundColor: '#000000',
        image: 'blackshark.png',
      },
    },
    {
      id: 7,
      productName: 'Amazon Kindle',
      description: '10ª Geração',
      price: 379.05,
      colors: [],
      style: {
        titleColor: 'var(--white-solid)',
        backgroundColor: '#5e5c62',
        image: 'kindle.png',
      },
    },
    {
      id: 8,
      productName: 'Amazon Echo dot',
      description: '4ª Geração + Alexa',
      price: 474.05,
      colors: [],
      style: {
        titleColor: 'var(--gray-solid)',
        backgroundColor: '#cbcdce',
        image: 'echodot.png',
      },
    },
    {
      id: 9,
      productName: 'Vector robot',
      description:
        "Diga 'Hey Vector'. Companheiros de robôs agora são uma realidade!",
      price: 4499,
      colors: [],
      style: {
        titleColor: 'var(--white-solid)',
        backgroundColor: '#1f1f1f',
        image: 'vector.png',
      },
    },
  ]
}
