function f([exp]) {
    let a = exp.split(/[\s\(\),;\.]+/)
    let b = filter(w => w != '').join('\n')
    return b;
};

console.log(f(['let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}']));