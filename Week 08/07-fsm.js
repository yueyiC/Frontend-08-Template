//生成部分匹配表
function generateTable(pattern){
    let table = new Array(pattern.length).fill(0);
    {
      let i = 1,
        j = 0;
      while (i < pattern.length) {
        if (pattern[i] === pattern[j]) {
          ++i, ++j;
          table[i] = j;
        } else {
          if (j > 0) {
            j = table[j];
          } else {
            ++i;
          }
        }
      }
    }
    return table;
}
//状态机
function fsm(pattern) {
    const table = generateTable(pattern);
    const states = [], len = table.length;
    states[0] = c => c === pattern[0] ? states[1] : states[0];
    for (let i = 1; i < len; i++) {
        states[i] = (c => c === pattern[i] ? states[i + 1] : states[table[i]](c));
    }
    states[len] = () => states[len];
    return [states[0], states[len]];
}
function match(source, pattern) {
    let [state, end] = fsm(pattern);
    for (const c of source) {
        state = state(c);
    }
    return state === end;
}
console.log(match('abababxxx', 'ababx'));