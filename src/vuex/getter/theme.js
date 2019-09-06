const currentTheme = state => state.currentTheme;
const isMonochrome = state => state.currentTheme === '#666';

export default {
    currentTheme,
    isMonochrome
};
