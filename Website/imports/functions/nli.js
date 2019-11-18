import {stemTokenize} from '/imports/functions/stem.js';


//if phrase match = true, then find 2 gram keywords
function findKeywords(tokenized, phraseMatch=false, invind={}, qna={}, _2gramInvInd={}){
  let dfs = [];

  if(!phraseMatch){
    tokenized.forEach(word =>{
      let docFreq = invind[word]?invind[word].length:0;
      dfs.push({key: word, docFreq});
    });
  }else{
    _2gram = []
    for(let i = 0; i<tokenized.length-1; i++){
      let phrase = tokenized[i] + ' ' + tokenized[i+1];
      let docFreq = _2gramInvInd[phrase]?_2gramInvInd[phrase].length:0;
      dfs.push({key: phrase, docFreq});
    }
  }

  const maxFreq = dfs.reduce((a, val) => a?(a.docFreq>val.docFreq?a:val):val, 0);
  const keywords = []
  dfs.forEach((ele, i) => {
    if(dfs[i].docFreq === maxFreq.docFreq){
      keywords.push(dfs[i])
    }
  })

  return keywords
}

/*
evaluates tfidf scores for all questions that contain keywords
returns: list of (_id, tdidf) pairs
if phrase match = True, uses 2gram index
*/
function findSimilarity(keywords, freq, phraseMatch=false, invind={}, qna={}, _2gramInvInd={}){
  const similarity = [];

  keywords.forEach(kw => {
    const idf = 1 / freq;
    if(!phraseMatch){
      const questions = invind[kw.key];
      questions.forEach(_id => {
        let qst = qna[_id].q;
        qst = stemTokenize(qst);
        const counts = counter(qst);
        let tfIdf = counts[kw.key]/qst.length * idf;
        similarity.push({tfIdf, _id});
      });
    }else{
      const questions = _2gramInvInd[kw.key];
      questions.forEach(_id => {
        let qst = qna[_id].q;
        let tokenized = stemTokenize(qst);
        
        const _2gram = []
        for(let i = 0; i<tokenized.length-1; i++){
          let phrase = tokenized[i] + ' ' + tokenized[i+1];
          _2gram.push(phrase);
        }

        const counts = counter(_2gram);
        const tdIdf = counts[kw.key]/_2gram.length * idf;
        similarity.push({tdIdf, _id});
      });
    }
  })

  return similarity;
}

export function getAnswer(question, phraseMatch=true){
  //load neccessary files
  import * as qna from '/imports/qna.json';
  import * as invind from '/imports/ii.json';
  import * as _2gramInvInd from '/imports/2gram.json';
  
  let tokenized = stemTokenize(question);
  console.warn('Stemmed question:', tokenized);
  keywords = findKeywords(tokenized, phraseMatch, invind, qna, _2gramInvInd);
  console.log('Question:', question, 'Keywords:', keywords);
  freq = keywords && keywords.length?keywords[0].docFreq:0;
  if(freq){
    similarity = findSimilarity(keywords, freq, phraseMatch, invind, qna, _2gramInvInd);
    const maxSim = similarity.reduce((a, val) => a?(a.tfIdf>val.tfIdf?a:val):val);
    let certainty = 1;
    if(!phraseMatch){
      top_qs = []
      similarity.forEach(q => {
        if(q.tfIdf === maxSim.tfIdf){
          top_qs.push(q);
        }
      });
      if(top_qs.length > 1){
        console.log('Uncertain Results', top_qs);
        certainty = 1 / top_qs.length
      }
    }

    answer = qna[maxSim._id].a
    console.log('Question:', question, 'Answer:', answer);
    return {answer, certainty}
  }else if(phraseMatch){
    console.log('Searching for 1gram');
    return getAnswer(question, !phraseMatch);
  }else{
    console.log('Never before seen question');
    return {}
  }
}

function counter(arr) {
  const counts = {};
  arr.forEach(ele => {
    if(counts[ele]){
      counts[ele]++;
    }else{
      counts[ele] = 1;
    }
  })

  return counts;
}