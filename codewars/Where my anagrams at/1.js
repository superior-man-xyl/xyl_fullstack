function anagrams(word, words) {
    word=word.split('').sort().join('');
    var w=[];
    var j=0;
    for(const i of words){
        if(word==i.split('').sort().join('')){
            w[j]=i;
            j++;
        }
    }
    return w;
}
console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));