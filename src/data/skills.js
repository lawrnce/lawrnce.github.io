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
        description: 'Uses AV Foundation to quickly capture consecutive photos and render them into a gif. Available as a Cocoapod.'
      },
      {
        url: 'https://github.com/lawrnce/PopUpCollectionView',
        title: 'Pop Up Collection View Controller',
        description: 'A collection view controller that vertically displays content by enlarging the cell view to fill the screen. Available as a Cocoapod.'
      },
      {
        url: 'https://github.com/lawrnce/PopUpCollectionView',
        title: 'Color Masking Button',
        description: 'Sure we gonna chung velizzle, fo shizzle my nizzle volutpizzle, suscipit break it down, boofron vizzle, arcu. Pellentesque break it down break it down.'
      },
      {
        url: 'https://github.com/lawrnce/PopUpCollectionView',
        title: 'Twitter Stream',
        description: 'Sure we gonna chung velizzle, fo shizzle my nizzle volutpizzle, suscipit break it down, boofron vizzle, arcu. Pellentesque break it down break it down.'
      },
      {
        url: 'https://github.com/lawrnce/PopUpCollectionView',
        title: 'Birthday Snap',
        description: 'Sure we gonna chung velizzle, fo shizzle my nizzle volutpizzle, suscipit break it down, boofron vizzle, arcu. Pellentesque break it down break it down.'
      },
      {
        url: 'https://github.com/lawrnce/PopUpCollectionView',
        title: 'Project Cake',
        description: 'Alpha version of Iffy Camera.'
      },
    ]
  },
  web: {
    title: 'Web Development',
    description: 'Lorem ipsum dolizzle brizzle amizzle, dang adipiscing bizzle. Sure we gonna chung velizzle, fo shizzle my nizzle volutpizzle, suscipit break it down, boofron vizzle, arcu. Pellentesque break it down break it down. Sizzle erizzle. Fusce at dolor da bomb check out this tempizzle nizzle. Maurizzle pellentesque nibh et turpis',
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
        url: 'https://github.com/lawrnce/lawrnce.github.io',
        title: 'This Website',
        description: 'This portfolio is written using React and statically generated with GatsbyJS.'
      },
      {
        url: 'https://github.com/lawrnce/RedisPages',
        title: 'Redis Pages',
        description: 'A rethinking of the traditional collection view.'
      },
      {
        url: 'https://github.com/lawrnce/HotScoreServer',
        title: 'Hot Score Server',
        description: 'A rethinking of the traditional collection view.'
      },
    ]
  },
  game: {
    title: 'Game Development',
    description: 'Lorem ipsum dolizzle brizzle amizzle, dang adipiscing bizzle. Sure we gonna chung velizzle, fo shizzle my nizzle volutpizzle, suscipit break it down, boofron vizzle, arcu. Pellentesque break it down break it down. Sizzle erizzle. Fusce at dolor da bomb check out this tempizzle nizzle. Maurizzle pellentesque nibh et turpis',
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
        description: 'Unfinished mobile game featuring..'
      },
      {
        url: 'https://github.com/lawrnce/PopUpCollectionView',
        title: 'Project Steady Cat',
        description: 'Unfinished mobile game featuring..'
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
        image: require('../assets/img/c#.png')
      },
      {
        title: 'iZotope RX',
        image: require('../assets/img/c#.png')
      },
      {
        title: 'EQ & Compression',
        image: require('../assets/img/unity.png')
      },
      {
        title: 'Sound Design',
        image: require('../assets/img/c#.png')
      },
      {
        title: 'Sampling',
        image: require('../assets/img/c#.png')
      },
      {
        title: 'Effects & Processing',
        image: require('../assets/img/c#.png')
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
        image: require('../assets/img/c#.png')
      },
      {
        title: 'Photoshop',
        image: require('../assets/img/unity.png')
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

