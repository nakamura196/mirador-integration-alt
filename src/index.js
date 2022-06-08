import Mirador from 'mirador/dist/es/src/index';
import { miradorImageToolsPlugin } from 'mirador-image-tools';

const integration = {
  Mirador,
  miradorImageToolsPlugin
}

export default {
  ...integration
}