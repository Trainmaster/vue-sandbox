import BootstrapVue from 'bootstrap-vue';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex';

import Collapse from '../src/Collapse.vue';

describe('Collapse', () => {
  let collapseWrapper;

  beforeEach(() => {
    const localVue = createLocalVue();
    localVue.use(BootstrapVue);

    const customComponentMock = {
      render: () => {},
      methods: {
        helloWorld: jasmine.createSpy().and.callFake(() => console.log('Spy was called.'))
      }
    };

    const options = {
      localVue,
      stubs: {
        'custom-component': customComponentMock
      }
    };

    collapseWrapper = shallowMount(Collapse, options);
  });

  describe('test', () => {
    it('should call helloWorld()', () => {
      collapseWrapper.vm.doSomething();
      expect(collapseWrapper.vm.$refs.customComponent.helloWorld).toHaveBeenCalled();
    });
  });
});
