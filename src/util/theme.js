import {
    HSLRotate,
    colorAdd
} from './color-util';

function generateTheme(primaryColor) {
    return {
        '--primary-color': primaryColor,
        '--primary-color-background': primaryColor,
        '--dark-primary-color': HSLRotate(primaryColor, [0, 10, -20]),
        '--darkest-primary-color': HSLRotate(primaryColor, [0, 15, -25]),
        '--light-primary-color': HSLRotate(primaryColor, [0, -20, 30]),
        '--light-color': HSLRotate(primaryColor, [0, 10, 50]),
        '--right-pannel-text': primaryColor,
        '--icon-color': HSLRotate(primaryColor, [0, 10, 50]),
        '--tag-bg-color': primaryColor,
        '--circle-icon-color': primaryColor,
        '--ability-cloud-start': HSLRotate(primaryColor, [5, 0, 5]),
        '--skill-progress2': colorAdd(primaryColor, '#383838')
    };
}

export {
    generateTheme
};
