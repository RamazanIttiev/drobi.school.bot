import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Figure out whether we're running from `src` or `dist`
const isDev = existsSync(resolve(__dirname, '../replies'));
const repliesBase = isDev
    ? resolve(__dirname, '../replies') // dev mode (src/replies)
    : resolve(__dirname, './replies'); // prod build (dist/replies)

export const REPLIES_PATH = repliesBase;
export const WELCOME_FILE = resolve(REPLIES_PATH, 'welcome.html');
export const RATES_FILE = resolve(REPLIES_PATH, 'rates.html');
export const GUIDE_FILE = resolve(REPLIES_PATH, 'guide.html');
export const FLOW_FILE = resolve(REPLIES_PATH, 'flow.html');
export const RULES_FILE = resolve(REPLIES_PATH, 'rules.html');
export const SITE_URL = 'https://drobi.school/'
