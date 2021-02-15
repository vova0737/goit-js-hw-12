
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';

const { defaults } = require('@pnotify/core');

defaults.styling = 'material';
defaults.delay = 1500;

export default error;
