import { Task } from './task';

export let TASKS: Task[] = [
  {
    id: 1,
    title: 'Anzhumania',
    description: `In a nulla vitae risus posuere pellentesque. Integer interdum sapien lacinia, lobortis mauris sed, scelerisque nisl. In at risus a sapien dictum fermentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus vehicula, neque ut faucibus maximus, est libero faucibus tortor, ut eleifend purus dolor eu diam. Mauris placerat eget nisi nec maximus. Vivamus quis suscipit justo.
    Pellentesque vestibulum ligula sed orci rutrum, vel lacinia diam dignissim. Donec et odio neque. Mauris ullamcorper ipsum nulla, non iaculis tellus blandit sed. Praesent non neque egestas, auctor mi a, dapibus velit. Duis odio nunc, commodo quis tortor id, lacinia consequat libero. Nullam ullamcorper urna ac efficitur vehicula. Cras pretium egestas ullamcorper.`,
    isDone: false,
    create_date: new Date('2016-11-18T09:54'),
    deadline: new Date(),
  },
  {
    id: 2,
    title: 'Press ka4at',
    description: `Aenean scelerisque risus et erat vehicula porta. Duis luctus nulla quis felis porttitor porta. Mauris viverra id justo ac pretium. Quisque at euismod lacus. Vivamus at metus dignissim, fermentum urna eu, hendrerit nisl. Maecenas mollis dignissim purus ut congue. Nam feugiat bibendum odio ac cursus. Nullam feugiat vestibulum sem sit amet suscipit. Vivamus ac fermentum diam.`,
    isDone: false,
    create_date: new Date(),
    deadline: new Date(),
  },
  {
    id: 3,
    title: 'Relax',
    description: `Proin lacinia pellentesque justo. Vestibulum feugiat libero a diam elementum, sed faucibus nisi pharetra. Sed rutrum magna ornare efficitur aliquet. Aenean efficitur tincidunt lorem et ornare. `,
    isDone: false,
    create_date: new Date(),
    deadline: new Date(),
  },
  {
    id: 4,
    title: 'Berserk mode on',
    description: `Duis mattis risus placerat, euismod lacus sed, dictum diam. Pellentesque malesuada non nibh nec dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum fringilla neque et ultricies finibus.`,
    isDone: false,
    create_date: new Date(),
    deadline: new Date(),
  },
];
