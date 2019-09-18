import { shallowMount } from '@vue/test-utils';
import mainPage from 'src/components/main-page.vue';

describe('Counter', () => {
    // 现在挂载组件，你便得到了这个包裹器
    const wrapper = shallowMount(mainPage);

    it('is a Vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('get projects data', () => {
        expect(wrapper.vm.projects.length).toBeGreaterThan(0);
    });
});
