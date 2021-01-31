function topThreeWords(text) {
    const cleanString = text.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase(),
          words = cleanString.match(/\S+/g) || [],
          frequencies = {};
    let word, frequency, i;
  
    for( i=0; i<words.length; i++ ) {
      if (words[i].match(/^[\\']+$/)){
          word = [] 
      }
      else {
         word = words[i];
         frequencies[word] = frequencies[word] || 0;
        frequencies[word]++;
      }
    }
    
    frequency = Object.keys(frequencies);
  
    return frequency.sort(function (a,b) { return frequencies[b] -frequencies[a];}).slice(0, 3)
  }