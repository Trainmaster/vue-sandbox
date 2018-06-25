import BootstrapVue from 'bootstrap-vue';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';

import Collapse from '../src/Collapse.vue';

describe('Collapse', () => {
  let collapseWrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);
    localVue.use(Vuex);

    collapseWrapper = shallowMount(Collapse, { localVue, });
  });

  describe('test', () => {
    it('should do something', () => {
      console.log(collapseWrapper.html());
    });
  });
});
