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
          quantity: 10,
          image: 'iphone13pro-azul-sierra.png',
        },
        {
          colorName: 'Prateado',
          backgroundColor: '#f7f7f0',
          quantity: 6,
          image: 'iphone13pro-prateado.png',
        },
        {
          colorName: 'Dourado',
          backgroundColor: '#fbe9d0',
          quantity: 3,
          image: 'iphone13pro-dourado.png',
        },
        {
          colorName: 'Grafite',
          backgroundColor: '#6a6864',
          quantity: 7,
          image: 'iphone13pro-grafite.png',
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
          quantity: 8,
          image: 's20fe.png',
        },
        {
          colorName: 'Cloud Navy',
          backgroundColor: '#283344',
          quantity: 4,
          image: 's20fe-azul.png',
        },
        {
          colorName: 'Cloud Orange',
          backgroundColor: '#ffc189',
          quantity: 5,
          image: 's20fe-laranja.png',
        },
        {
          colorName: 'Cloud White',
          backgroundColor: '#f6f2f1',
          quantity: 2,
          image: 's20fe-branco.png',
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
          quantity: 2,
          image: 's21ultra-prata.png',
        },
        {
          colorName: 'Preto',
          backgroundColor: '#0d0d0d',
          quantity: 1,
          image: 's21ultra-preto.png',
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
      colors: [
        {
          colorName: 'Preto',
          backgroundColor: '#313133',
          quantity: 5,
          image: 'zflip-preto.png',
        },
        {
          colorName: 'Creme',
          backgroundColor: '#f6f1d6',
          quantity: 5,
          image: 'zflip-creme.png',
        },
        {
          colorName: 'Lilás',
          backgroundColor: '#dfcfed',
          quantity: 5,
          image: 'zflip-lilas.png',
        },
      ],
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
      colors: [
        {
          colorName: 'Branco',
          backgroundColor: '#e7e3e2',
          quantity: 8,
          image: 'applewatch-branco.png',
        },
        {
          colorName: 'Preto',
          backgroundColor: '#363533',
          quantity: 3,
          image: 'applewatch-preto.png',
        },
        {
          colorName: 'Vermelho',
          backgroundColor: '#df3d45',
          quantity: 0,
          image: 'applewatch-vermelho.png',
        },
        {
          colorName: 'Azul-Marinho',
          backgroundColor: '#31354b',
          quantity: 0,
          image: 'applewatch-azul-marinho.png',
        },
      ],
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
      colors: [
        {
          colorName: 'Preto e Verde',
          backgroundColor:
            'linear-gradient(89.67deg, #141414 44.01%, #0BEB0B 53.02%)',
          quantity: 2,
          image: 'blackshark.png',
        },
      ],
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
      promotion: 20.0,
      colors: [
        {
          colorName: 'Branco',
          backgroundColor: '#f4f4f4',
          quantity: 4,
          image: 'kindle-branco.png',
        },
        {
          colorName: 'Preto',
          backgroundColor: '#2a2829',
          quantity: 2,
          image: 'kindle-preto.png',
        },
      ],
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
      colors: [
        {
          colorName: 'Branco',
          backgroundColor: '#f4f4f4',
          quantity: 5,
          image: 'echodot.png',
        },
        {
          colorName: 'Preto',
          backgroundColor: '#2a2829',
          quantity: 1,
          image: 'echodot-preto.png',
        },
      ],
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
      colors: [
        {
          colorName: 'Preto',
          backgroundColor: '#0f0f0f',
          quantity: 0,
          image: 'vector.png',
        },
      ],
      style: {
        titleColor: 'var(--white-solid)',
        backgroundColor: '#1f1f1f',
        image: 'vector.png',
      },
    },
  ]
}
