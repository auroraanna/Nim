/* Generated by the Nim Compiler v1.7.3 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI134217749 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217751 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217741 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217743 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554435 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI33555841 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI33555171 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555179 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554450 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI33555178 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33555175 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555176 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI134217745 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554449 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NNI134217745 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217745.node = NNI134217745;
var NNI33555176 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555176.node = NNI33555176;
NTI33555178.base = NTI33555175;
NTI33555179.base = NTI33555175;
var NNI33555175 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI33555178, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI33554450, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI33554449, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI33554449, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI33555179, name: "up", sons: null}]};
NTI33555175.node = NNI33555175;
var NNI33555171 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555171.node = NNI33555171;
NTI33555175.base = NTI33555171;
NTI33555176.base = NTI33555175;
NTI134217745.base = NTI33555176;
var NNI33555841 = {kind: 2, len: 3, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "Field0", len: 0, typ: NTI33554450, name: "Field0", sons: null}, 
{kind: 1, offset: "Field1", len: 0, typ: NTI33554435, name: "Field1", sons: null}, 
{kind: 1, offset: "Field2", len: 0, typ: NTI33554450, name: "Field2", sons: null}]};
NTI33555841.node = NNI33555841;
var NNI134217743 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217743.node = NNI134217743;
var NNI134217741 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217741.node = NNI134217741;
NTI134217741.base = NTI33555176;
NTI134217743.base = NTI134217741;
var NNI134217751 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217751.node = NNI134217751;
NTI134217751.base = NTI33555176;
var NNI134217749 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI134217749.node = NNI134217749;
NTI134217749.base = NTI33555176;

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_33557101, src_33557102, ti_33557103) {
  var result_33557112 = null;

    switch (ti_33557103.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557092(ti_33557103))) {
      result_33557112 = src_33557102;
      }
      else {
        result_33557112 = [src_33557102[0], src_33557102[1]];
      }
      
      break;
    case 19:
            if (dest_33557101 === null || dest_33557101 === undefined) {
        dest_33557101 = {};
      }
      else {
        for (var key in dest_33557101) { delete dest_33557101[key]; }
      }
      for (var key in src_33557102) { dest_33557101[key] = src_33557102[key]; }
      result_33557112 = dest_33557101;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557103.base == null))) {
      result_33557112 = nimCopy(dest_33557101, src_33557102, ti_33557103.base);
      }
      else {
      if ((ti_33557103.kind == 17)) {
      result_33557112 = (dest_33557101 === null || dest_33557101 === undefined) ? {m_type: ti_33557103} : dest_33557101;
      }
      else {
        result_33557112 = (dest_33557101 === null || dest_33557101 === undefined) ? {} : dest_33557101;
      }
      }
      nimCopyAux(result_33557112, src_33557102, ti_33557103.node);
      break;
    case 4:
    case 16:
            if(ArrayBuffer.isView(src_33557102)) { 
        if(dest_33557101 === null || dest_33557101 === undefined || dest_33557101.length != src_33557102.length) {
          dest_33557101 = new src_33557102.constructor(src_33557102);
        } else {
          dest_33557101.set(src_33557102, 0);
        }
        result_33557112 = dest_33557101;
      } else {
        if (src_33557102 === null) {
          result_33557112 = null;
        }
        else {
          if (dest_33557101 === null || dest_33557101 === undefined || dest_33557101.length != src_33557102.length) {
            dest_33557101 = new Array(src_33557102.length);
          }
          result_33557112 = dest_33557101;
          for (var i = 0; i < src_33557102.length; ++i) {
            result_33557112[i] = nimCopy(result_33557112[i], src_33557102[i], ti_33557103.base);
          }
        }
      }
    
      break;
    case 24:
    case 27:
            if (src_33557102 === null) {
        result_33557112 = null;
      }
      else {
        if (dest_33557101 === null || dest_33557101 === undefined || dest_33557101.length != src_33557102.length) {
          dest_33557101 = new Array(src_33557102.length);
        }
        result_33557112 = dest_33557101;
        for (var i = 0; i < src_33557102.length; ++i) {
          result_33557112[i] = nimCopy(result_33557112[i], src_33557102[i], ti_33557103.base);
        }
      }
    
      break;
    case 28:
            if (src_33557102 !== null) {
        result_33557112 = src_33557102.slice(0);
      }
    
      break;
    default: 
      result_33557112 = src_33557102;
      break;
    }

  return result_33557112;

}

function arrayConstr(len_33557140, value_33557141, typ_33557142) {
        var result = new Array(len_33557140);
    for (var i = 0; i < len_33557140; ++i) result[i] = nimCopy(null, value_33557141, typ_33557142);
    return result;
  

  
}

function mnewString(len_33556854) {
        return new Array(len_33556854);
  

  
}

function addInt(a_33556901, b_33556902) {
        var result = a_33556901 + b_33556902;
    checkOverflowInt(result);
    return result;
  

  
}

function chckRange(i_33557150, a_33557151, b_33557152) {
  var result_33557153 = 0;

  BeforeRet: {
    if (((a_33557151 <= i_33557150) && (i_33557150 <= b_33557152))) {
    result_33557153 = i_33557150;
    break BeforeRet;
    }
    else {
    raiseRangeError();
    }
    
  };

  return result_33557153;

}

function chckIndx(i_33557145, a_33557146, b_33557147) {
  var result_33557148 = 0;

  BeforeRet: {
    if (((a_33557146 <= i_33557145) && (i_33557145 <= b_33557147))) {
    result_33557148 = i_33557145;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_33557145, a_33557146, b_33557147);
    }
    
  };

  return result_33557148;

}

function cstrToNimstr(c_33556765) {
      var ln = c_33556765.length;
  var result = new Array(ln);
  var r = 0;
  for (var i = 0; i < ln; ++i) {
    var ch = c_33556765.charCodeAt(i);

    if (ch < 128) {
      result[r] = ch;
    }
    else {
      if (ch < 2048) {
        result[r] = (ch >> 6) | 192;
      }
      else {
        if (ch < 55296 || ch >= 57344) {
          result[r] = (ch >> 12) | 224;
        }
        else {
            ++i;
            ch = 65536 + (((ch & 1023) << 10) | (c_33556765.charCodeAt(i) & 1023));
            result[r] = (ch >> 18) | 240;
            ++r;
            result[r] = ((ch >> 12) & 63) | 128;
        }
        ++r;
        result[r] = ((ch >> 6) & 63) | 128;
      }
      ++r;
      result[r] = (ch & 63) | 128;
    }
    ++r;
  }
  return result;
  

  
}

function toJSStr(s_33556768) {
  var result_33556769 = null;

    var res_33556803 = newSeq_33556786((s_33556768).length);
    var i_33556804 = 0;
    var j_33556805 = 0;
    Label1: {
        Label2: while (true) {
        if (!(i_33556804 < (s_33556768).length)) break Label2;
          var c_33556806 = s_33556768[i_33556804];
          if ((c_33556806 < 128)) {
          res_33556803[j_33556805] = String.fromCharCode(c_33556806);
          i_33556804 += 1;
          }
          else {
            var helper_33556818 = newSeq_33556786(0);
            Label3: {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556819 = c_33556806.toString(16);
                  if ((((code_33556819) == null ? 0 : (code_33556819).length) == 1)) {
                  helper_33556818.push("%0");;
                  }
                  else {
                  helper_33556818.push("%");;
                  }
                  
                  helper_33556818.push(code_33556819);;
                  i_33556804 += 1;
                  if ((((s_33556768).length <= i_33556804) || (s_33556768[i_33556804] < 128))) {
                  break Label3;
                  }
                  
                  c_33556806 = s_33556768[i_33556804];
                }
            };
++excHandler;
            try {
            res_33556803[j_33556805] = decodeURIComponent(helper_33556818.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            res_33556803[j_33556805] = helper_33556818.join("");
            lastJSError = prevJSError;
            } finally {
            }
          }
          
          j_33556805 += 1;
        }
    };
    if (res_33556803.length < j_33556805) { for (var i = res_33556803.length ; i < j_33556805 ; ++i) res_33556803.push(null); }
               else { res_33556803.length = j_33556805; };
    result_33556769 = res_33556803.join("");

  return result_33556769;

}

function raiseException(e_33556628, ename_33556629) {
    e_33556628.name = ename_33556629;
    if ((excHandler == 0)) {
    unhandledException(e_33556628);
    }
    
    e_33556628.trace = nimCopy(null, rawWriteStackTrace_33556592(), NTI33554449);
    throw e_33556628;

  
}

function makeNimstrLit(c_33556762) {
      var result = [];
  for (var i = 0; i < c_33556762.length; ++i) {
    result[i] = c_33556762.charCodeAt(i);
  }
  return result;
  

  
}
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/js/jsconsole.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole_examples_2", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsconsole_examples_2.nim", line: 0};
framePtr = F;
framePtr = F.prev;

function isFatPointer_33557092(ti_33557093) {
  var result_33557094 = false;

  BeforeRet: {
    result_33557094 = !((ConstSet1[ti_33557093.base.kind] != undefined));
    break BeforeRet;
  };

  return result_33557094;

}

function nimCopyAux(dest_33557105, src_33557106, n_33557107) {
    switch (n_33557107.kind) {
    case 0:
      break;
    case 1:
            dest_33557105[n_33557107.offset] = nimCopy(dest_33557105[n_33557107.offset], src_33557106[n_33557107.offset], n_33557107.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557107.sons.length; i++) {
      nimCopyAux(dest_33557105, src_33557106, n_33557107.sons[i]);
    }
    
      break;
    case 3:
            dest_33557105[n_33557107.offset] = nimCopy(dest_33557105[n_33557107.offset], src_33557106[n_33557107.offset], n_33557107.typ);
      for (var i = 0; i < n_33557107.sons.length; ++i) {
        nimCopyAux(dest_33557105, src_33557106, n_33557107.sons[i][1]);
      }
    
      break;
    }

  
}

function add_33556405(x_33556406, x_33556406_Idx, y_33556407) {
          if (x_33556406[x_33556406_Idx] === null) { x_33556406[x_33556406_Idx] = []; }
      var off = x_33556406[x_33556406_Idx].length;
      x_33556406[x_33556406_Idx].length += y_33556407.length;
      for (var i = 0; i < y_33556407.length; ++i) {
        x_33556406[x_33556406_Idx][off+i] = y_33556407.charCodeAt(i);
      }
    

  
}

function raiseOverflow() {
    raiseException({message: [111,118,101,114,45,32,111,114,32,117,110,100,101,114,102,108,111,119], parent: null, m_type: NTI134217743, name: null, trace: [], up: null}, "OverflowDefect");

  
}

function checkOverflowInt(a_33556899) {
        if (a_33556899 > 2147483647 || a_33556899 < -2147483648) raiseOverflow();
  

  
}

function raiseRangeError() {
    raiseException({message: [118,97,108,117,101,32,111,117,116,32,111,102,32,114,97,110,103,101], parent: null, m_type: NTI134217751, name: null, trace: [], up: null}, "RangeDefect");

  
}

function raiseIndexError(i_33556715, a_33556716, b_33556717) {
    var Temporary1;

    if ((b_33556717 < a_33556716)) {
    Temporary1 = [105,110,100,101,120,32,111,117,116,32,111,102,32,98,111,117,110,100,115,44,32,116,104,101,32,99,111,110,116,97,105,110,101,114,32,105,115,32,101,109,112,116,121];
    }
    else {
    Temporary1 = ([105,110,100,101,120,32] || []).concat(HEX24_352321544(i_33556715) || [],[32,110,111,116,32,105,110,32] || [],HEX24_352321544(a_33556716) || [],[32,46,46,32] || [],HEX24_352321544(b_33556717) || []);
    }
    
    raiseException({message: nimCopy(null, Temporary1, NTI33554449), parent: null, m_type: NTI134217749, name: null, trace: [], up: null}, "IndexDefect");

  
}

function addChars_285212847(result_285212849, result_285212849_Idx, x_285212850, start_285212851, n_285212852) {
  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 43;
    var old_285212853 = (result_285212849[result_285212849_Idx]).length;
    F.line = 44;
    (result_285212849[result_285212849_Idx].length = chckRange(addInt(old_285212853, n_285212852), 0, 2147483647));
    Label1: {
      F.line = 46;
      var iHEX60gensym4_285212867 = 0;
      F.line = 119;
      var i_637534243 = 0;
      Label2: {
        F.line = 120;
          Label3: while (true) {
          if (!(i_637534243 < n_285212852)) break Label3;
            F.line = 49;
            iHEX60gensym4_285212867 = i_637534243;
            F.line = 49;
            result_285212849[result_285212849_Idx][chckIndx(addInt(old_285212853, iHEX60gensym4_285212867), 0, (result_285212849[result_285212849_Idx]).length - 1)] = x_285212850.charCodeAt(chckIndx(addInt(start_285212851, iHEX60gensym4_285212867), 0, (x_285212850).length - 1));
            F.line = 122;
            i_637534243 = addInt(i_637534243, 1);
          }
      };
    };
  framePtr = F.prev;

  
}

function addChars_285212843(result_285212845, result_285212845_Idx, x_285212846) {
  var F = {procname: "addChars.addChars", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 55;
    addChars_285212847(result_285212845, result_285212845_Idx, x_285212846, 0, ((x_285212846) == null ? 0 : (x_285212846).length));
  framePtr = F.prev;

  
}

function addInt_285212868(result_285212869, result_285212869_Idx, x_285212870) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 113;
    addChars_285212843(result_285212869, result_285212869_Idx, ((x_285212870) + ""));
  framePtr = F.prev;

  
}

function addInt_285212889(result_285212890, result_285212890_Idx, x_285212891) {
  var F = {procname: "digitsutils.addInt", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/private/digitsutils.nim", line: 0};
  framePtr = F;
    F.line = 117;
    addInt_285212868(result_285212890, result_285212890_Idx, x_285212891);
  framePtr = F.prev;

  
}

function HEX24_352321544(x_352321545) {
  var result_352321546 = [[]];

  var F = {procname: "dollars.$", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/dollars.nim", line: 0};
  framePtr = F;
    F.line = 18;
    addInt_285212889(result_352321546, 0, x_352321545);
  framePtr = F.prev;

  return result_352321546[0];

}

function auxWriteStackTrace_33556520(f_33556521) {
  var result_33556522 = [[]];

    var it_33556530 = f_33556521;
    var i_33556531 = 0;
    var total_33556532 = 0;
    var tempFrames_33556533 = arrayConstr(64, {Field0: null, Field1: 0, Field2: null}, NTI33555841);
    Label1: {
        Label2: while (true) {
        if (!(!((it_33556530 == null)) && (i_33556531 <= 63))) break Label2;
          tempFrames_33556533[i_33556531].Field0 = it_33556530.procname;
          tempFrames_33556533[i_33556531].Field1 = it_33556530.line;
          tempFrames_33556533[i_33556531].Field2 = it_33556530.filename;
          i_33556531 += 1;
          total_33556532 += 1;
          it_33556530 = it_33556530.prev;
        }
    };
    Label3: {
        Label4: while (true) {
        if (!!((it_33556530 == null))) break Label4;
          total_33556532 += 1;
          it_33556530 = it_33556530.prev;
        }
    };
    result_33556522[0] = nimCopy(null, [], NTI33554449);
    if (!((total_33556532 == i_33556531))) {
    result_33556522[0].push.apply(result_33556522[0], [40]);;
    result_33556522[0].push.apply(result_33556522[0], HEX24_352321544((total_33556532 - i_33556531)));;
    result_33556522[0].push.apply(result_33556522[0], [32,99,97,108,108,115,32,111,109,105,116,116,101,100,41,32,46,46,46,10]);;
    }
    
    Label5: {
      var j_33556563 = 0;
      var colontmp__637534235 = 0;
      colontmp__637534235 = (i_33556531 - 1);
      var res_637534237 = colontmp__637534235;
      Label6: {
          Label7: while (true) {
          if (!(0 <= res_637534237)) break Label7;
            j_33556563 = res_637534237;
            result_33556522[0].push.apply(result_33556522[0], cstrToNimstr(tempFrames_33556533[j_33556563].Field2));;
            if ((0 < tempFrames_33556533[j_33556563].Field1)) {
            result_33556522[0].push.apply(result_33556522[0], [40]);;
            addInt_285212889(result_33556522, 0, tempFrames_33556533[j_33556563].Field1);
            if (false) {
            result_33556522[0].push.apply(result_33556522[0], [44,32]);;
            addInt_285212889(result_33556522, 0, 0);
            }
            
            result_33556522[0].push.apply(result_33556522[0], [41]);;
            }
            
            result_33556522[0].push.apply(result_33556522[0], [32,97,116,32]);;
            add_33556405(result_33556522, 0, tempFrames_33556533[j_33556563].Field0);
            result_33556522[0].push.apply(result_33556522[0], [10]);;
            res_637534237 -= 1;
          }
      };
    };

  return result_33556522[0];

}

function rawWriteStackTrace_33556592() {
  var result_33556593 = [];

    if (!((framePtr == null))) {
    result_33556593 = nimCopy(null, ([84,114,97,99,101,98,97,99,107,32,40,109,111,115,116,32,114,101,99,101,110,116,32,99,97,108,108,32,108,97,115,116,41,10] || []).concat(auxWriteStackTrace_33556520(framePtr) || []), NTI33554449);
    }
    else {
      result_33556593 = nimCopy(null, [78,111,32,115,116,97,99,107,32,116,114,97,99,101,98,97,99,107,32,97,118,97,105,108,97,98,108,101,10], NTI33554449);
    }
    

  return result_33556593;

}

function newSeq_33556786(len_33556788) {
  var result_33556789 = [];

  var F = {procname: "newSeq.newSeq", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system.nim", line: 0};
  framePtr = F;
    F.line = 604;
    result_33556789 = new Array(len_33556788); for (var i = 0 ; i < len_33556788 ; ++i) { result_33556789[i] = null; }  framePtr = F.prev;

  return result_33556789;

}

function unhandledException(e_33556624) {
    var buf_33556625 = [[]];
    if (!(((e_33556624.message).length == 0))) {
    buf_33556625[0].push.apply(buf_33556625[0], [69,114,114,111,114,58,32,117,110,104,97,110,100,108,101,100,32,101,120,99,101,112,116,105,111,110,58,32]);;
    buf_33556625[0].push.apply(buf_33556625[0], e_33556624.message);;
    }
    else {
    buf_33556625[0].push.apply(buf_33556625[0], [69,114,114,111,114,58,32,117,110,104,97,110,100,108,101,100,32,101,120,99,101,112,116,105,111,110]);;
    }
    
    buf_33556625[0].push.apply(buf_33556625[0], [32,91]);;
    add_33556405(buf_33556625, 0, e_33556624.name);
    buf_33556625[0].push.apply(buf_33556625[0], [93,10]);;
    buf_33556625[0].push.apply(buf_33556625[0], rawWriteStackTrace_33556592());;
    var cbuf_33556626 = toJSStr(buf_33556625[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_33556626);
  }
  else {
    throw cbuf_33556626;
  }
  

  
}

function sysFatal_251658274(message_251658277) {
  var F = {procname: "sysFatal.sysFatal", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/system/fatal.nim", line: 0};
  framePtr = F;
    F.line = 53;
    raiseException({message: nimCopy(null, message_251658277, NTI33554449), m_type: NTI134217745, parent: null, name: null, trace: [], up: null}, "AssertionDefect");
  framePtr = F.prev;

  
}

function raiseAssert_251658272(msg_251658273) {
  var F = {procname: "assertions.raiseAssert", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/assertions.nim", line: 0};
  framePtr = F;
    F.line = 34;
    sysFatal_251658274(msg_251658273);
  framePtr = F.prev;

  
}

function failedAssertImpl_251658296(msg_251658297) {
  var F = {procname: "assertions.failedAssertImpl", prev: framePtr, filename: "/home/runner/work/Nim/Nim/lib/std/assertions.nim", line: 0};
  framePtr = F;
    F.line = 44;
    raiseAssert_251658272(msg_251658297);
  framePtr = F.prev;

  
}
var F = {procname: "module jsconsole_examples_2", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsconsole_examples_2.nim", line: 0};
framePtr = F;
F.line = 101;
console.assert(true, "[jsAssert] /home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsconsole_examples_2.nim(8, 10)","42 == 42");
F.line = 101;
console.assert(false, "[jsAssert] /home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsconsole_examples_2.nim(9, 10)","42 != 42");
F.line = 101;
console.assert(false, "[jsAssert] /home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsconsole_examples_2.nim(10, 10)","\'`\' == \'\\n\' and \'\\t\' == \'\\x00\'");
if (false) {
F.line = 101;
failedAssertImpl_251658296(makeNimstrLit("/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsconsole_examples_2.nim(11, 10) `42 == 42` "));
}

framePtr = F.prev;
var F = {procname: "module jsconsole_examples_2", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsconsole_examples_2.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole_examples_2", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsconsole_examples_2.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole_group1_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsconsole_group1_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
var F = {procname: "module jsconsole_group1_examples", prev: framePtr, filename: "/home/runner/work/Nim/Nim/doc/html/nimcache/runnableExamples/jsconsole_group1_examples.nim", line: 0};
framePtr = F;
framePtr = F.prev;
