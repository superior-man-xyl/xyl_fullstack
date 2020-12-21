function DNAStrand(dna){
    dna=dna.split("");
    for(var i=0;i<dna.length;i++){
        if(dna[i]=="A"){
            dna[i]="T";
        }else if(dna[i]=="T"){
            dna[i]="A";
        }else if(dna[i]=="G"){
            dna[i]="C";
        }else{
            dna[i]="G";
        }
    }
    return dna.join("");
  }
  console.log(DNAStrand("ATTGC"));