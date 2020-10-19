import {get, keys, mapValues} from 'lodash';

import Paragraph from '@/views/Paragraph/Paragraph';
import Slider from '@/views/Slider/Slider';

const Components = {
  Paragraph,
  Slider,
};

export const getComponentByName = (name) => get(Components, [name], null);

export const getComponentPropertiesByName = (name) => mapValues(
  get(getComponentByName(name), ['props'], {}),
  (prop) => get(prop, ['defaultValue'], '')
);

export const getAllViews = () => keys(Components);

export const getCompositionBase = () => []; // TODO: можно вернуть композицию по умолчанию

export default Components;