// import { shallowMount } from '@vue/test-utils'
import { keys } from 'lodash';
import Components, { getAllViews } from '@/views'

describe('views/index.js', () => {
  it('getComponentByName get all views', () => {
    expect(JSON.stringify(keys(Components)))
      .toMatch(JSON.stringify(getAllViews()))
  })
});

