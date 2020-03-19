module.exports = function createDreamTeam(members) {
 
  if (!Array.isArray(members)){return false;}

  let arr = [];  
  let res = false;
  for (let i = 0; i < members.length; i++) {    
    if (typeof (members[i]) === 'string') {
    arr.push(members[i].replace(/\s+/g, '').charAt(0).toUpperCase());    
  }  
  }
  arr.sort();
  res = arr.join('');
    return res;
};
