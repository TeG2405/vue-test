import {get, keys} from 'lodash';

import Paragraph from '@/views/Paragraph/Paragraph';
import Slider from '@/views/Slider/Slider';

const Components = {
  Paragraph,
  Slider,
};

export const getComponentByName = (name) => get(Components, [name], null);

export const getAllViews = () => keys(Components);

export const getCompositionBase = () => []; // TODO: можно вернуть композицию по умолчанию

export default Components;