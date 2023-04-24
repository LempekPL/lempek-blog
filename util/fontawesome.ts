// import the library
// using require instead of import somehow fixes hydration error??????
const { library } = require("@fortawesome/fontawesome-svg-core");

// import icons
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(
    fas,
    fab,
    far
);