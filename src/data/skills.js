const skills = {
  iOS: {
    title: 'iOS Engineering',
    description: 'In 2012, I began teaching myself iOS development. Since then, I have done both freelance and professional work. I have an interest in the iPhone’s hardware capabilities, such as the camera and sensors. My goal is to create consumer internet applications with mass appeal.',
    image: require('../assets/img/ios.png'),
    items: [
      {
        title: 'Objective-C',
        image: require('../assets/img/objc.png')
      },
      {
        title: 'Swift',
        image: require('../assets/img/swift.png')
      },
      {
        title: 'CocoaPods',
        image: require('../assets/img/cocoapods.png')
      },
      {
        title: 'Interface Builder',
        image: require('../assets/img/xcode.png')
      },
      {
        title: 'iMessages',
        image: require('../assets/img/messages.png')
      },
      {
        title: 'App Extensions',
        image: require('../assets/img/app_extensions.png')
      },
      {
        title: 'UIKit',
        image: require('../assets/img/apple.png')
      },
      {
        title: 'Auto Layout',
        image: require('../assets/img/apple.png')
      },
      {
        title: 'Core Data',
        image: require('../assets/img/apple.png')
      },
      {
        title: 'AV Foundation',
        // image: require('../assets/img/av_foundation.png')
        image: require('../assets/img/apple.png')
      },
    ],
    projects: [
      {
        url: 'https://github.com/lawrnce/GifCameraController',
        title: 'Gif Camera Controller',
        description: 'A library using AV Foundation to quickly capture consecutive photos and render them into a gif. Available as a Cocoapod.'
      },
      {
        url: 'https://github.com/lawrnce/PopUpCollectionView',
        title: 'Pop Up Collection View Controller',
        description: 'A collection view controller that vertically displays content by enlarging the cell view to fill the screen. Available as a Cocoapod.'
      },
      {
        url: 'https://github.com/lawrnce/ColorMaskingButton',
        title: 'Color Masking Button',
        description: 'A button for a progress bar that laterally changes color as the bar progresses. Available as a Cocoapod.'
      },
      {
        url: 'https://github.com/lawrnce/TwitterStream',
        title: 'Twitter Stream',
        description: 'Practice project that filters live tweets by type.'
      },
      {
        url: 'https://github.com/lawrnce/PopUpCollectionView',
        title: 'Project Cake',
        description: 'Alpha version of Iffy Camera.'
      },
    ]
  },
  web: {
    title: 'Frontend Development',
    description: 'I enjoy the fast pace jungle of frontend development. In my opinion, learning new web technologies gives a front row seat to the internet\'s evolution. Outside of my hobby projects, I also have done professional work.',
    image: require('../assets/svg/npm.svg'),
    items: [
      {
        title: 'HTML',
        image: require('../assets/img/html.png')
      },
      {
        title: 'CSS',
        image: require('../assets/img/css.png')
      },
      {
        title: 'Javascript',
        image: require('../assets/img/javascript.png')
      },
      {
        title: 'Python',
        image: require('../assets/img/python.png')
      },
      {
        title: 'Amazon Web Services',
        image: require('../assets/img/aws.png')
      },
      {
        title: 'React',
        image: require('../assets/img/react.png')
      },
      {
        title: 'Vue',
        image: require('../assets/img/vue.png')
      },
      {
        title: 'GraphQL',
        image: require('../assets/img/graphql.png')
      },
      {
        title: 'Redis',
        image: require('../assets/img/redis.png')
      },
      {
        title: 'Node',
        image: require('../assets/img/node.png')
      },
      {
        title: 'Flask',
        image: require('../assets/img/flask.png')
      },
    ],
    projects: [
      {
        url: 'https://github.com/lawrnce/lawrnce.github.io/tree/source',
        title: 'This Website',
        description: 'My portfolio is written using React and statically generated with GatsbyJS.'
      },
      {
        url: 'https://github.com/lawrnce/RedisPages',
        title: 'Redis Pages',
        description: 'A small library that simplifies caching paginated content in Redis. Available on npm.'
      },
      {
        url: 'https://github.com/lawrnce/HotScoreServer',
        title: 'Hot Score Server',
        description: 'A server that ranks posts based on the number of likes weighted by a time decay. Similar to HackerNews or Reddit.'
      },
    ]
  },
  game: {
    title: 'Game Development',
    description: 'I like making mobile games. I am planning to release my first game sometime in 2018.',
    image: require('../assets/img/gdc.jpg'),
    items: [
      {
        title: 'C#',
        image: require('../assets/img/c#.png')
      },
      {
        title: 'Unity',
        image: require('../assets/img/unity.png')
      }
    ],
    projects: [
      {
        url: 'https://github.com/lawrnce/PopUpCollectionView',
        title: 'Project Cobra Hidden',
        description: 'Alpha version'
      },
      {
        url: 'https://github.com/lawrnce/PopUpCollectionView',
        title: 'Project Steady Cat',
        description: ''
      },
    ]
  },
  music: {
    title: 'Music Production',
    description: 'Lorem ipsum dolizzle brizzle amizzle, dang adipiscing bizzle. Sure we gonna chung velizzle, fo shizzle my nizzle volutpizzle, suscipit break it down, boofron vizzle, arcu. Pellentesque break it down break it down. Sizzle erizzle. Fusce at dolor da bomb check out this tempizzle nizzle. Maurizzle pellentesque nibh et turpis',
    image: require('../assets/img/gdc.jpg'),
    items: [
      {
        title: 'Ableton Live',
        image: require('../assets/img/ableton.png')
      },
      {
        title: 'iZotope RX',
        image: require('../assets/img/rx.png')
      },
      {
        title: 'EQ & Compression',
        image: require('../assets/img/music1.png')
      },
      {
        title: 'Sound Design',
        image: require('../assets/img/music2.png')
      },
      {
        title: 'Sampling',
        image: require('../assets/img/music3.png')
      },
      {
        title: 'Effects & Processing',
        image: require('../assets/img/music1.png')
      },
    ],
    projects: [
      {
        title: 'Pop Up Collection View Controller',
        description: 'A rethinking of the traditional collection view.',
        image: require('../assets/img/unity.png'),
        slug:'',
        url: 'https://github.com/lawrnce/PopUpCollectionView',
      },
    ]
  },
  pixel: {
    title: 'Pixel Art',
    description: 'Lorem ipsum dolizzle brizzle amizzle, dang adipiscing bizzle. Sure we gonna chung velizzle, fo shizzle my nizzle volutpizzle, suscipit break it down, boofron vizzle, arcu. Pellentesque break it down break it down. Sizzle erizzle. Fusce at dolor da bomb check out this tempizzle nizzle. Maurizzle pellentesque nibh et turpis',
    image: require('../assets/img/gdc.jpg'),
    items: [
      {
        title: 'Aesprite',
        image: require('../assets/img/aesprite.png')
      },
      {
        title: 'Pyxel Edit',
        image: require('../assets/img/pyxel.png')
      }
    ],
    projects: [
      {
        title: 'Pop Up Collection View Controller',
        description: 'A rethinking of the traditional collection view.',
        image: require('../assets/img/unity.png'),
        slug:'',
        url: 'https://github.com/lawrnce/PopUpCollectionView',
      },
    ]
  },
  design: {
    title: 'Product Design',
    description: 'Lorem ipsum dolizzle brizzle amizzle, dang adipiscing bizzle. Sure we gonna chung velizzle, fo shizzle my nizzle volutpizzle, suscipit break it down, boofron vizzle, arcu. Pellentesque break it down break it down. Sizzle erizzle. Fusce at dolor da bomb check out this tempizzle nizzle. Maurizzle pellentesque nibh et turpis',
    image: require('../assets/img/gdc.jpg'),
    items: [
      {
        title: 'Photoshop',
        image: require('../assets/img/photoshop.png')
      },
      {
        title: 'Sketch',
        image: require('../assets/img/sketch.png')
      },
      {
        title: 'Origami Studio',
        image: require('../assets/img/origami.png')
      },
    ],
    projects: [
      {
        title: 'Pop Up Collection View Controller',
        description: 'A rethinking of the traditional collection view.',
        image: require('../assets/img/unity.png'),
        slug:'',
        url: 'https://github.com/lawrnce/PopUpCollectionView',
      },
    ]
  }

}

export default skills

