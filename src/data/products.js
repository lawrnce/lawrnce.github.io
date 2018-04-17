const products = [
  {
    title: 'Rocket Buddies',
    description: 'Casual mobile game made in Unity. Features dancing characters that fly around the sky. I also created all the music.',
    icon: require('../assets/img/rocket_buddies_icon.png'),
    badges: [
      // {
      //   icon: require('../assets/img/appstore.png'),
      //   url: 'https://itunes.apple.com/us/app/iffy-camera/id1300464164?ls=1&mt=8'
      // },
      {
        icon: require('../assets/img/googleplay.png'),
        url: 'https://play.google.com/store/apps/details?id=co.lawrencetran.rocketpals'
      },
    ],
    slug: 'rocket-buddies',
    url: 'https://play.google.com/store/apps/details?id=co.lawrencetran.rocketpals',
  },
  {
    title: 'Iffy Camera',
    description: 'A camera app that uses AV Foundation to capture a gif. The user then can add text to the frames of the gif. The gifs can be shared via an iMessage App Extension.',
    icon: require('../assets/img/iffy_camera_icon.png'),
    badges: [
      {
        icon: require('../assets/img/appstore.png'),
        url: 'https://itunes.apple.com/us/app/iffy-camera/id1300464164?ls=1&mt=8'
      },
    ],
    slug: 'iffy-camera',
    url: 'https://itunes.apple.com/us/app/iffy-camera/id1300464164?ls=1&mt=8',
  },
  // {
  //   title: 'Random Emoji',
  //   description: 'The last keyboard you need. Nullam thats the shizzle velizzle, aliquet boom shackalack, rizzle quis, yippiyo vel, arcu. Pellentesque eget own yo. Sizzle erizzle. ',
  //   icon: require('../assets/img/random_emoji_icon.png'),
  //   appStoreIcon: require('../assets/svg/app_store.svg'),
  //   slug: 'random-emoji',
  //   url: 'https://www.reddit.com'
  // }
]

export default products

