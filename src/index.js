import Mirador from 'mirador/dist/es/src/index';
import { miradorImageToolsPlugin } from 'mirador-image-tools';
import { MiradorCopyWindowPlugin } from 'mirador-copy-window-plugin';
import { MiradorComparePlugin } from 'mirador-compare-plugin';


const integration = {
  Mirador,
  miradorImageToolsPlugin,
  MiradorCopyWindowPlugin,
  MiradorComparePlugin
}

export default integration