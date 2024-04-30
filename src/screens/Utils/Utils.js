
import { Dimensions} from 'react-native';

export function wordsWithOutSpace(value) {
    let regex = /^[a-zA-Z_]*$/
    console.log("regex.test(value)", regex.test(value));
    if (regex.test(value)) {
        return value
    }
}
export function wordsWithSpace(value) {
    let regex = /^[a-zA-Z_ ]*$/
    // console.log("regex.test(value)", regex.test(value));
    if (regex.test(value)) {
        return value
    }
}
export function addressCheck(value) {
    let regex = /^[a-zA-Z0-9 ]*$/
    // console.log("regex.test(value)", regex.test(value));
    if (regex.test(value)) {
        return value
    }
}
export function addressCheck1(value) {
    let regex = /^[ A-Za-z0-9_@./#&+-]*$/ ///^[a-zA-Z0-9 ]*$/
    // console.log("regex.test(value)", regex.test(value));
    if (regex.test(value)) {
        return value
    }
}
export function phoneNoCheck(value) {
    let regx = /^[0-9]*$/
    if (regx.test(value)) {
        // console.log("regx.test(value)::::", regx.test(value), value);
        return value
    }
}
export function decimalCheck(value) {
    let regx = /^\d*\.?\d*$/
    if (regx.test(value)) {
        // console.log("regx.test(value)::::", regx.test(value), value);
        return value
    }
}
export function emailCheck(value) {
    let regx = /^[^\s@]+@[^\s@.]+\.[^\s@]{2,}$/
    // console.log("regx.test(value)::::", regx.test(value), value);
    if (regx.test(value?.trim())) {
        return value
    }
}
export function email(value) {
    let regex = /^.*?$/
    if (regex.test(value?.trim())) {
        return value
    }
}
export function checkAlphaNumeric(value) {
    let regex = /^[a-zA-Z0-9_]*$/
    if (regex.test(value)) {
        return value
    }
}

export const getDimensionPercentage = dimension => {
    let height = 926;
    let width = 428;
    let percentage = (dimension / (2 * (height + width))) * 100;
    let screenHeight = Dimensions.get('screen').height;
    let screenWidth = Dimensions.get('screen').width;
    let actualDImension = 2 * (screenHeight + screenWidth) * (percentage / 100);
    return actualDImension;
};

export const heightDimen = dimension => {
    let height = 926;
    let percentage = (dimension / height) * 100;
    let screenHeight = Dimensions.get('screen').height;
    let actualDImension = screenHeight * (percentage / 100);
    return actualDImension;
};
export const widthDimen = dimension => {
    let width = 428;
    let percentage = (dimension / width) * 100;
    let screenWidth = Dimensions.get('screen').width;
    let actualDImension = screenWidth * (percentage / 100);
    return actualDImension;
};

export const dynamicFont = text => {
    const length = text?.length;
    return length > 9 && length <= 11
        ? 40
        : length > 11 && length <= 12
            ? 36
            : length > 12 && length <= 14
                ? 32
                : length > 14 && length <= 17
                    ? 28
                    : length > 17 && length <= 19
                        ? 24
                        : length > 19
                            ? 20
                            : 50;
};