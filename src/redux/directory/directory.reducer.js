const INITIAL_STATE = {
  sections: [
    {
      title: "Pre Wedding Photoshoot",
      // imageUrl: 'https://i.ibb.co/cvpntL1/pwp.png',
      imageUrl: "images/hats.png", // local file in public/images/
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "Wedding Photoshoot",
      // imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      imageUrl: "images/jackets.png", // local file in public/images/
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "4k Recording",
      // imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      imageUrl: "images/sneakers.png", // local file in public/images/
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "Bride Side Photoshoot",
      // imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      imageUrl: "images/womens.png", // local file in public/images/
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "Groom Side Photoshoot",
      // imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      imageUrl: "images/men.png", // local file in public/images/
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
   
    
  ]
};

const directoryReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;