var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    
    let sMap = {};
    let tMap = {};
    
    for (let i = 0; i < s.length; i++) {
        let sChar = s.charAt(i);
        let tChar = t.charAt(i);
        
        if (sMap[sChar] === undefined && tMap[tChar] === undefined) {
            sMap[sChar] = tChar;
            tMap[tChar] = sChar;
        } else {
            if (sMap[sChar] !== tChar || tMap[tChar] !== sChar) {
                return false;
            }
        }
    }
    
    return true;
};
