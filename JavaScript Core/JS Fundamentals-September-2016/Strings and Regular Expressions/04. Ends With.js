function exec([string, substring]) {
    console.log((string.substring(string.length, string.length-substring.length) == substring)) ;
}
exec(['The new iPhone has no headphones jack.', 'o headphones jack.']);

