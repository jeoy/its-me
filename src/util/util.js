const parseColor = (hexStr) => {
    if (Array.isArray(hexStr)) {
        return hexStr;
    }
    return hexStr.length === 4 ? hexStr.substr(1).split('').map(s => {
        return 0x11 * parseInt(s, 16);
    }) : [hexStr.substr(1, 2), hexStr.substr(3, 2), hexStr.substr(5, 2)].map(s => {
        return parseInt(s, 16);
    });
};

const colorRGBtoHex = (color) => {
    if (typeof color === 'string') {
        return color;
    }
    var [r, g, b] = color;
    function uniform(val) {
        if (val > 255) {
            return 255;
        } else if (val < 0) {
            return 0;
        } else {
            return val;
        }
    }
    [r, g, b] = [uniform(r), uniform(g), uniform(b)];
    var hex = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    return hex;
};

const HexToHSL = (color) => {
    return RGBToHSL(parseColor(color));
};

const HSLToHex = (color) => {
    return colorRGBtoHex(HSLToRGB(color));
};

const RGBToHSL = (color) => {
    // Make r, g, and b fractions of 1
    let [r, g, b] = color;
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    const cmin = Math.min(r, g, b);
    const cmax = Math.max(r, g, b);
    const delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;

    if (delta === 0) {
        h = 0;
    } else if (cmax === r) {
        h = ((g - b) / delta) % 6;
    } else if (cmax === g) {
        h = (b - r) / delta + 2;
    } else {
        h = (r - g) / delta + 4;
    }

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0) {
        h += 360;
    }

    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return [h, s, l];
};

function HSLToRGB(color) {
    // Must be fractions of 1
    let [h, s, l] = color;
    if (h > 360) {
        h = 360;
    } else if (h < 0) {
        h = 0;
    }

    if (s > 100) {
        s = 100;
    } else if (s < 0) {
        s = 0;
    }

    if (l > 100) {
        l = 100;
    } else if (l < 0) {
        l = 0;
    }
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    let r = 0;
    let g = 0;
    let b = 0;

    if (h >= 0 && h < 60) {
        r = c;
        g = x;
        b = 0;
    } else if (h >= 60 && h < 120) {
        r = x;
        g = c;
        b = 0;
    } else if (h >= 120 && h < 180) {
        r = 0;
        g = c;
        b = x;
    } else if (h >= 180 && h < 240) {
        r = 0;
        g = x;
        b = c;
    } else if (h >= 240 && h < 300) {
        r = x;
        g = 0;
        b = c;
    } else if (h >= 300 && h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return [r, g, b];
}

const colorAdd = (color1, color2) => {
    const colorArr1 = parseColor(color1);
    const colorArr2 = parseColor(color2);
    return colorRGBtoHex(colorArr1.map((item, index) => item + colorArr2[index]));
};

const colorMinus = (color1, color2) => {
    const colorArr1 = parseColor(color1);
    const colorArr2 = parseColor(color2);
    return colorRGBtoHex(colorArr1.map((item, index) => item - colorArr2[index]));
};

const HSLRotate = (color1, distance) => {
    const colorArr1 = HexToHSL(color1);
    const colorArr2 = distance;
    return colorRGBtoHex(HSLToRGB(colorArr1.map((item, index) => {
        return item + colorArr2[index];
    })));
};

const getGradientColors = (color, datas) => {
    if (!datas) {
        return [];
    }
    const steps = datas.length;
    const range = Math.max(...datas) - Math.min(...datas);
    if (steps === 1) {
        return [color];
    }
    // zero-pad 1 digit to 2
    var pad = (s) => {
        return (s.length === 1) ? '0' + s : s;
    };
    const _start = HexToHSL(HSLRotate(color, [5, 0, 5]));
    const _end = HexToHSL(HSLRotate(color, [-10, -25, 30]));
    const colorsArr = [];
    datas.forEach(data => {
        const ratio = range === 0 ? 0 : ((data - Math.min(...datas)) / range);
        const color = [];
        ['h', 's', 'l'].forEach((type, index) => {
            color.push(pad(Math.round((ratio * _end[index] + (1 - ratio) * _start[index]))));
        });
        colorsArr.push(HSLToHex(color));
    });
    return colorsArr;
};

export {
    getGradientColors,
    colorAdd,
    HexToHSL,
    HSLRotate,
    colorMinus
};
