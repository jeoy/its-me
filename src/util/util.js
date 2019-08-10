const parseColor = (hexStr) => {
    return hexStr.length === 4 ? hexStr.substr(1).split('').map(s => {
        return 0x11 * parseInt(s, 16);
    }) : [hexStr.substr(1, 2), hexStr.substr(3, 2), hexStr.substr(5, 2)].map(s => {
        return parseInt(s, 16);
    });
};

const getGradientColors = (start, end, datas) => {
    if (!datas) {
        return [];
    }
    const steps = datas.length;
    const range = Math.max(...datas) - Math.min(...datas);
    if (steps === 1) {
        return [start];
    }
    // zero-pad 1 digit to 2
    var pad = (s) => {
        return (s.length === 1) ? '0' + s : s;
    };
    var normalize = function(channel) {
        return channel / 255;
    };
    const _start = parseColor(start).map(normalize);
    const _end = parseColor(end).map(normalize);
    const colorsArr = [];
    datas.forEach(data => {
        const ratio = range === 0 ? 0 : ((data - Math.min(...datas)) / range);
        const color = [];
        ['r', 'g', 'b'].forEach((type, index) => {
            color.push(pad(Math.round((ratio * _end[index] + (1 - ratio) * _start[index]) * 255).toString(16)));
        });
        colorsArr.push('#' + color.join(''));
    });
    return colorsArr;
};

export {
    getGradientColors
};
