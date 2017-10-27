const skills = {
  iOS: {
    title: 'iOS Engineering',
    description: 'In 2012, I began teaching myself iOS development. Since then, I have done both freelance and professional work. I have an interest in the iPhone’s hardware capabilities, such as the camera and sensors. My goal is to create consumer internet applications with mass appeal.',
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
        slug:'gif-camera-controller',
        url: 'https://github.com/lawrnce/GifCameraController',
        title: 'Gif Camera Controller',
        description: 'A library using AV Foundation to quickly capture consecutive photos and render them into a gif. Available as a Cocoapod.'
      },
      {
        slug:'pop-up-collection-view',
        url: 'https://github.com/lawrnce/PopUpCollectionView',
        title: 'Pop Up Collection View Controller',
        description: 'A collection view controller that vertically displays content by enlarging the cell view to fill the screen. Available as a Cocoapod.'
      },
      {
        slug:'color-masking-button',
        url: 'https://github.com/lawrnce/ColorMaskingButton',
        title: 'Color Masking Button',
        description: 'A button for a progress bar that laterally changes color as the bar progresses. Available as a Cocoapod.'
      },
      {
        slug:'twitter-stream',
        url: 'https://github.com/lawrnce/TwitterStream',
        title: 'Twitter Stream',
        description: 'Practice project that filters live tweets by type.'
      },
      {
        slug:'cake',
        url: 'https://github.com/lawrnce/Cake',
        title: 'Project Cake',
        description: 'Alpha version of Iffy Camera.'
      },
    ]
  },
  web: {
    title: 'Frontend Development',
    description: 'I enjoy the fast pace jungle of frontend development. Learning new web technologies gives a front row seat to the internet\'s evolution. Outside of my hobby projects, I also have done professional work.',
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
        title: 'AWS',
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
        slug:'portfolio',
        url: 'https://github.com/lawrnce/lawrnce.github.io/tree/source',
        title: 'This Website',
        description: 'My portfolio is written using React and statically generated with GatsbyJS.'
      },
      {
        slug:'redis-pages',
        url: 'https://github.com/lawrnce/RedisPages',
        title: 'Redis Pages',
        description: 'A small library that simplifies caching paginated content in Redis. Available on npm.'
      },
      {
        slug:'hot-score-server',
        url: 'https://github.com/lawrnce/HotScoreServer',
        title: 'Hot Score Server',
        description: 'A server that ranks posts based on the number of likes weighted by a time decay. Similar to HackerNews or Reddit.'
      },
    ]
  },
  game: {
    title: 'Mobile Game Development',
    description: 'I enjoy mobile games that feature music. Here are some of my experiments in creating interesting rhythm games.',
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
        slug: 'project-cobra-hidden',
        url: 'https://github.com/lawrnce/ProjectCobraHidden',
        title: 'Project Cobra Hidden',
        description: 'A Flappy Bird inspired rhythm game. The environment and obstacles move to the beat of the music.'
      },
      {
        slug: 'project-steady-cat',
        url: 'https://github.com/lawrnce/ProjectSteadyCat',
        title: 'Project Steady Cat',
        description: 'A 2D side-scroller featuring a robot flying through space along to the beat of the music.'
      },
      {
        slug: 'project-future-bass-gp',
        url: 'https://github.com/lawrnce/ProjectFutureBassGP',
        title: 'Project Future Bass GP',
        description: 'Experiment using touch controls to controlling a 2D spaceship.'
      },
    ]
  },
  music: {
    title: 'Music Production',
    description: 'I learned how to produce music before I learned to code. Here are some work samples.',
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
        title: 'Dynamics',
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
        title: 'Effects',
        image: require('../assets/img/music1.png')
      },
    ],
    projects: [
      {
        slug: 'sound-samples',
        url: 'https://soundcloud.com/lawrencetran/sets',
        title: 'My Soundcloud',
        description: 'Various sounds and samples',
        image: require('../assets/img/unity.png'),
      }
    ]
  },
  pixel: {
    title: 'Pixel Art',
    description: 'In order to make games, I need artwork. Pixel art seemed like a fun choice.',
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
        title: 'Del the Robot',
        description: 'A robot character I use when prototyping game ideas.',
        image: require('../assets/img/unity.png'),
        slug:'',
        url: 'https://www.behance.net/gallery/58191601/Del-The-Robot',
      },
    ]
  },
  design: {
    title: 'Product Design',
    description: 'I believe that an understanding of both engineering and design is the key to making great products. Here are some design specs of my projects.',
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
        title: 'Iffy Camera Design',
        description: 'iOS photo app that adds text over gifs.',
        image: require('../assets/img/unity.png'),
        slug:'iffy-camera-design',
        url: 'https://www.behance.net/gallery/58181975/Iffy-Camera',
      },
    ]
  }

}

export default skills

