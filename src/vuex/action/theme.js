const updateCurrentTheme = ({
    commit
}, theme) => {
    commit('UPDATE_CURRENT_THEME', theme);
};

export default {
    updateCurrentTheme
};
