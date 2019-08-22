import {
    generate
} from '@ant-design/colors';

const generateColors = primary => {
    const colorsArr = generate(primary);
    const colors = {
        primary
    };
    colorsArr.forEach((item, index) => {
        colors['light-' + index] = item;
    });
    return colors;
};

export default generateColors;
