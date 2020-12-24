function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }
  console.log(duplicateCount("Indivisibilities"));