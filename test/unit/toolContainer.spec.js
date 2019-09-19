import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import {
    Button,
    Radio,
    Popover
} from 'ant-design-vue';
import container from 'src/components/tool-panel/container.vue';

Vue.use(Button);
Vue.use(Radio);
Vue.use(Popover);

describe('toolContainer', () => {
    // 现在挂载组件，你便得到了这个包裹器
    const wrapper = shallowMount(container);

    it('is a Vue instance', () => {
        expect(wrapper.isVueInstance()).toBeTruthy();
    });

    it('renders the correct markup', () => {
        expect(wrapper.html()).toContain('<a-radio-stub prefixcls="ant-radio" value="0" type="radio">下载pdf</a-radio-stub>');
    });

    it('get printOption', () => {
        expect(wrapper.vm.printOption).toBe(0);
    });
});
