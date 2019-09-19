import { shallowMount, createLocalVue } from '@vue/test-utils';
import mainPage from 'src/components/base-info.vue';
import Vuex from 'vuex';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('baseInfo', () => {
    const getters = {
        currentTheme: () => 'red',
        isMonochrome: () => true
    };
    const store = new Vuex.Store({
        getters
    });

    const wrapper = shallowMount(mainPage, { store, localVue });

    it('is a Vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('get projects data', () => {
        expect(wrapper.vm.resumeData).toEqual(
            expect.objectContaining({
                name: expect.any(String),
                bascialEducation: expect.any(Object)
            })
        );
    });

    it('get information detail', () => {
        expect(wrapper.find('.education p').text()).toEqual(expect.any(String));
        expect(wrapper.find('.name p').text()).toEqual(expect.any(String));
    });
});
