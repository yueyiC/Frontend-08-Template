function match(str) {
    let foundA = false,
        foundB = false,
        foundC = false,
        foundD = false,
        foundE = false;
    for (let s of str) {
        if (s === 'a') {
            foundA = true;
        } else if (foundA && !foundB && s === 'b') {
            foundB = true;
        } else if (foundB && !foundC && s === 'c') {
            foundC = true;
        } else if (foundC && !foundD && s === 'd') {
            foundD = true;
        } else if (foundD && !foundE && s === 'e') {
            foundE = true;
        }  else if (foundE && s === 'f') {
            return true;
        }else {
            foundA = false;
            foundB = false;
            foundC = false;
            foundD = false;
            foundE = false;
        }
    }
    return false;
}