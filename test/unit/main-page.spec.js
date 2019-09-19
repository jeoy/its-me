import { shallowMount } from '@vue/test-utils';
import mainPage from 'src/components/main-page.vue';

describe('mainPage', () => {
    const wrapper = shallowMount(mainPage);

    it('is a Vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('get projects data', () => {
        expect(wrapper.vm.projects.length).toBeGreaterThan(0);
    });
});
