var Qt=Object.defineProperty;var Kt=(e,t,n)=>t in e?Qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var w=(e,t,n)=>Kt(e,typeof t!="symbol"?t+"":t,n);import{H as fe,c as Y}from"./highlight-BLBngcbI.js";import{F as Jt,a as Yt,H as en,P,A as Oe,T as k,b as tn,c as nn,d as Ne,e as Ue,W as ge,f as rn,B as pt,g as D,E as ft}from"./docx-DXhDcaDh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Te(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var H=Te();function gt(e){H=e}var Q={exec:()=>null};function f(e,t=""){let n=typeof e=="string"?e:e.source;const r={replace:(a,i)=>{let o=typeof i=="string"?i:i.source;return o=o.replace(y.caret,"$1"),n=n.replace(a,o),r},getRegex:()=>new RegExp(n,t)};return r}var y={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},an=/^(?:[ \t]*(?:\n|$))+/,on=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,sn=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,J=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ln=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Re=/(?:[*+-]|\d{1,9}[.)])/,mt=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,wt=f(mt).replace(/bull/g,Re).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),cn=f(mt).replace(/bull/g,Re).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),$e=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,un=/^[^\n]+/,Le=/(?!\s*\])(?:\\.|[^\[\]\\])+/,dn=f(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Le).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),hn=f(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Re).getRegex(),ue="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Ae=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,pn=f("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Ae).replace("tag",ue).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),bt=f($e).replace("hr",J).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ue).getRegex(),fn=f(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",bt).getRegex(),Ce={blockquote:fn,code:on,def:dn,fences:sn,heading:ln,hr:J,html:pn,lheading:wt,list:hn,newline:an,paragraph:bt,table:Q,text:un},Ge=f("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",J).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ue).getRegex(),gn={...Ce,lheading:cn,table:Ge,paragraph:f($e).replace("hr",J).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Ge).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ue).getRegex()},mn={...Ce,html:f(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Ae).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Q,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:f($e).replace("hr",J).replace("heading",` *#{1,6} *[^
]`).replace("lheading",wt).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},wn=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,bn=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,kt=/^( {2,}|\\)\n(?!\s*$)/,kn=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,de=/[\p{P}\p{S}]/u,Pe=/[\s\p{P}\p{S}]/u,xt=/[^\s\p{P}\p{S}]/u,xn=f(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Pe).getRegex(),yt=/(?!~)[\p{P}\p{S}]/u,yn=/(?!~)[\s\p{P}\p{S}]/u,vn=/(?:[^\s\p{P}\p{S}]|~)/u,Sn=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,vt=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,En=f(vt,"u").replace(/punct/g,de).getRegex(),Tn=f(vt,"u").replace(/punct/g,yt).getRegex(),St="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",Rn=f(St,"gu").replace(/notPunctSpace/g,xt).replace(/punctSpace/g,Pe).replace(/punct/g,de).getRegex(),$n=f(St,"gu").replace(/notPunctSpace/g,vn).replace(/punctSpace/g,yn).replace(/punct/g,yt).getRegex(),Ln=f("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,xt).replace(/punctSpace/g,Pe).replace(/punct/g,de).getRegex(),An=f(/\\(punct)/,"gu").replace(/punct/g,de).getRegex(),Cn=f(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Pn=f(Ae).replace("(?:-->|$)","-->").getRegex(),Mn=f("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Pn).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ie=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,_n=f(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ie).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Et=f(/^!?\[(label)\]\[(ref)\]/).replace("label",ie).replace("ref",Le).getRegex(),Tt=f(/^!?\[(ref)\](?:\[\])?/).replace("ref",Le).getRegex(),In=f("reflink|nolink(?!\\()","g").replace("reflink",Et).replace("nolink",Tt).getRegex(),Me={_backpedal:Q,anyPunctuation:An,autolink:Cn,blockSkip:Sn,br:kt,code:bn,del:Q,emStrongLDelim:En,emStrongRDelimAst:Rn,emStrongRDelimUnd:Ln,escape:wn,link:_n,nolink:Tt,punctuation:xn,reflink:Et,reflinkSearch:In,tag:Mn,text:kn,url:Q},Dn={...Me,link:f(/^!?\[(label)\]\((.*?)\)/).replace("label",ie).getRegex(),reflink:f(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ie).getRegex()},xe={...Me,emStrongRDelimAst:$n,emStrongLDelim:Tn,url:f(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},zn={...xe,br:f(kt).replace("{2,}","*").getRegex(),text:f(xe.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ee={normal:Ce,gfm:gn,pedantic:mn},Z={normal:Me,gfm:xe,breaks:zn,pedantic:Dn},Fn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},We=e=>Fn[e];function L(e,t){if(t){if(y.escapeTest.test(e))return e.replace(y.escapeReplace,We)}else if(y.escapeTestNoEncode.test(e))return e.replace(y.escapeReplaceNoEncode,We);return e}function je(e){try{e=encodeURI(e).replace(y.percentDecode,"%")}catch{return null}return e}function Ve(e,t){const n=e.replace(y.findPipe,(i,o,s)=>{let c=!1,l=o;for(;--l>=0&&s[l]==="\\";)c=!c;return c?"|":" |"}),r=n.split(y.splitPipe);let a=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;a<r.length;a++)r[a]=r[a].trim().replace(y.slashPipe,"|");return r}function X(e,t,n){const r=e.length;if(r===0)return"";let a=0;for(;a<r&&e.charAt(r-a-1)===t;)a++;return e.slice(0,r-a)}function Hn(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Ze(e,t,n,r,a){const i=t.href,o=t.title||null,s=e[1].replace(a.other.outputLinkReplace,"$1");r.state.inLink=!0;const c={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function Bn(e,t,n){const r=e.match(n.other.indentCodeCompensation);if(r===null)return t;const a=r[1];return t.split(`
`).map(i=>{const o=i.match(n.other.beginningSpace);if(o===null)return i;const[s]=o;return s.length>=a.length?i.slice(a.length):i}).join(`
`)}var oe=class{constructor(e){w(this,"options");w(this,"rules");w(this,"lexer");this.options=e||H}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:X(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],r=Bn(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){const r=X(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(n=r.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:X(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=X(t[0],`
`).split(`
`),r="",a="";const i=[];for(;n.length>0;){let o=!1;const s=[];let c;for(c=0;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))s.push(n[c]),o=!0;else if(!o)s.push(n[c]);else break;n=n.slice(c);const l=s.join(`
`),u=l.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${l}`:l,a=a?`${a}
${u}`:u;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,i,!0),this.lexer.state.top=h,n.length===0)break;const d=i.at(-1);if(d?.type==="code")break;if(d?.type==="blockquote"){const p=d,g=p.raw+`
`+n.join(`
`),x=this.blockquote(g);i[i.length-1]=x,r=r.substring(0,r.length-p.raw.length)+x.raw,a=a.substring(0,a.length-p.text.length)+x.text;break}else if(d?.type==="list"){const p=d,g=p.raw+`
`+n.join(`
`),x=this.list(g);i[i.length-1]=x,r=r.substring(0,r.length-d.raw.length)+x.raw,a=a.substring(0,a.length-p.raw.length)+x.raw,n=g.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:a}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const r=n.length>1,a={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");const i=this.rules.other.listItemRegex(n);let o=!1;for(;e;){let c=!1,l="",u="";if(!(t=i.exec(e))||this.rules.block.hr.test(e))break;l=t[0],e=e.substring(l.length);let h=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,q=>" ".repeat(3*q.length)),d=e.split(`
`,1)[0],p=!h.trim(),g=0;if(this.options.pedantic?(g=2,u=h.trimStart()):p?g=t[1].length+1:(g=t[2].search(this.rules.other.nonSpaceChar),g=g>4?1:g,u=h.slice(g),g+=t[1].length),p&&this.rules.other.blankLine.test(d)&&(l+=d+`
`,e=e.substring(d.length+1),c=!0),!c){const q=this.rules.other.nextBulletRegex(g),O=this.rules.other.hrRegex(g),M=this.rules.other.fencesBeginRegex(g),qe=this.rules.other.headingBeginRegex(g),Xt=this.rules.other.htmlBeginRegex(g);for(;e;){const pe=e.split(`
`,1)[0];let V;if(d=pe,this.options.pedantic?(d=d.replace(this.rules.other.listReplaceNesting,"  "),V=d):V=d.replace(this.rules.other.tabCharGlobal,"    "),M.test(d)||qe.test(d)||Xt.test(d)||q.test(d)||O.test(d))break;if(V.search(this.rules.other.nonSpaceChar)>=g||!d.trim())u+=`
`+V.slice(g);else{if(p||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||M.test(h)||qe.test(h)||O.test(h))break;u+=`
`+d}!p&&!d.trim()&&(p=!0),l+=pe+`
`,e=e.substring(pe.length+1),h=V.slice(g)}}a.loose||(o?a.loose=!0:this.rules.other.doubleBlankLine.test(l)&&(o=!0));let x=null,B;this.options.gfm&&(x=this.rules.other.listIsTask.exec(u),x&&(B=x[0]!=="[ ] ",u=u.replace(this.rules.other.listReplaceTask,""))),a.items.push({type:"list_item",raw:l,task:!!x,checked:B,loose:!1,text:u,tokens:[]}),a.raw+=l}const s=a.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;a.raw=a.raw.trimEnd();for(let c=0;c<a.items.length;c++)if(this.lexer.state.top=!1,a.items[c].tokens=this.lexer.blockTokens(a.items[c].text,[]),!a.loose){const l=a.items[c].tokens.filter(h=>h.type==="space"),u=l.length>0&&l.some(h=>this.rules.other.anyLine.test(h.raw));a.loose=u}if(a.loose)for(let c=0;c<a.items.length;c++)a.items[c].loose=!0;return a}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",a=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:r,title:a}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;const n=Ve(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),a=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(const o of r)this.rules.other.tableAlignRight.test(o)?i.align.push("right"):this.rules.other.tableAlignCenter.test(o)?i.align.push("center"):this.rules.other.tableAlignLeft.test(o)?i.align.push("left"):i.align.push(null);for(let o=0;o<n.length;o++)i.header.push({text:n[o],tokens:this.lexer.inline(n[o]),header:!0,align:i.align[o]});for(const o of a)i.rows.push(Ve(o,i.header.length).map((s,c)=>({text:s,tokens:this.lexer.inline(s),header:!1,align:i.align[c]})));return i}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const i=X(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{const i=Hn(t[2],"()");if(i===-2)return;if(i>-1){const s=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,s).trim(),t[3]=""}}let r=t[2],a="";if(this.options.pedantic){const i=this.rules.other.pedanticHrefTitle.exec(r);i&&(r=i[1],a=i[3])}else a=t[3]?t[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),Ze(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),a=t[r.toLowerCase()];if(!a){const i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return Ze(n,a,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!r||r[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(r[1]||r[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const i=[...r[0]].length-1;let o,s,c=i,l=0;const u=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,t=t.slice(-1*e.length+i);(r=u.exec(t))!=null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o)continue;if(s=[...o].length,r[3]||r[4]){c+=s;continue}else if((r[5]||r[6])&&i%3&&!((i+s)%3)){l+=s;continue}if(c-=s,c>0)continue;s=Math.min(s,s+c+l);const h=[...r[0]][0].length,d=e.slice(0,i+r.index+h+s);if(Math.min(i,s)%2){const g=d.slice(1,-1);return{type:"em",raw:d,text:g,tokens:this.lexer.inlineTokens(g)}}const p=d.slice(2,-2);return{type:"strong",raw:d,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," ");const r=this.rules.other.nonSpaceChar.test(n),a=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&a&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,r;return t[2]==="@"?(n=t[1],r="mailto:"+n):(n=t[1],r=n),{type:"link",raw:t[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,r;if(t[2]==="@")n=t[0],r="mailto:"+n;else{let a;do a=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(a!==t[0]);n=t[0],t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},A=class ye{constructor(t){w(this,"tokens");w(this,"options");w(this,"state");w(this,"tokenizer");w(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||H,this.options.tokenizer=this.options.tokenizer||new oe,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:y,block:ee.normal,inline:Z.normal};this.options.pedantic?(n.block=ee.pedantic,n.inline=Z.pedantic):this.options.gfm&&(n.block=ee.gfm,this.options.breaks?n.inline=Z.breaks:n.inline=Z.gfm),this.tokenizer.rules=n}static get rules(){return{block:ee,inline:Z}}static lex(t,n){return new ye(n).lex(t)}static lexInline(t,n){return new ye(n).inlineTokens(t)}lex(t){t=t.replace(y.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],r=!1){for(this.options.pedantic&&(t=t.replace(y.tabCharGlobal,"    ").replace(y.spaceLine,""));t;){let a;if(this.options.extensions?.block?.some(o=>(a=o.call({lexer:this},t,n))?(t=t.substring(a.raw.length),n.push(a),!0):!1))continue;if(a=this.tokenizer.space(t)){t=t.substring(a.raw.length);const o=n.at(-1);a.raw.length===1&&o!==void 0?o.raw+=`
`:n.push(a);continue}if(a=this.tokenizer.code(t)){t=t.substring(a.raw.length);const o=n.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue.at(-1).src=o.text):n.push(a);continue}if(a=this.tokenizer.fences(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.heading(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.hr(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.blockquote(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.list(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.html(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.def(t)){t=t.substring(a.raw.length);const o=n.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=`
`+a.raw,o.text+=`
`+a.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[a.tag]||(this.tokens.links[a.tag]={href:a.href,title:a.title});continue}if(a=this.tokenizer.table(t)){t=t.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.lheading(t)){t=t.substring(a.raw.length),n.push(a);continue}let i=t;if(this.options.extensions?.startBlock){let o=1/0;const s=t.slice(1);let c;this.options.extensions.startBlock.forEach(l=>{c=l.call({lexer:this},s),typeof c=="number"&&c>=0&&(o=Math.min(o,c))}),o<1/0&&o>=0&&(i=t.substring(0,o+1))}if(this.state.top&&(a=this.tokenizer.paragraph(i))){const o=n.at(-1);r&&o?.type==="paragraph"?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):n.push(a),r=i.length!==t.length,t=t.substring(a.raw.length);continue}if(a=this.tokenizer.text(t)){t=t.substring(a.raw.length);const o=n.at(-1);o?.type==="text"?(o.raw+=`
`+a.raw,o.text+=`
`+a.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):n.push(a);continue}if(t){const o="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let r=t,a=null;if(this.tokens.links){const s=Object.keys(this.tokens.links);if(s.length>0)for(;(a=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)s.includes(a[0].slice(a[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(a=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,a.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(a=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,a.index)+"["+"a".repeat(a[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,o="";for(;t;){i||(o=""),i=!1;let s;if(this.options.extensions?.inline?.some(l=>(s=l.call({lexer:this},t,n))?(t=t.substring(s.raw.length),n.push(s),!0):!1))continue;if(s=this.tokenizer.escape(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.tag(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.link(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(s.raw.length);const l=n.at(-1);s.type==="text"&&l?.type==="text"?(l.raw+=s.raw,l.text+=s.text):n.push(s);continue}if(s=this.tokenizer.emStrong(t,r,o)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.codespan(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.br(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.del(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.autolink(t)){t=t.substring(s.raw.length),n.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(t))){t=t.substring(s.raw.length),n.push(s);continue}let c=t;if(this.options.extensions?.startInline){let l=1/0;const u=t.slice(1);let h;this.options.extensions.startInline.forEach(d=>{h=d.call({lexer:this},u),typeof h=="number"&&h>=0&&(l=Math.min(l,h))}),l<1/0&&l>=0&&(c=t.substring(0,l+1))}if(s=this.tokenizer.inlineText(c)){t=t.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(o=s.raw.slice(-1)),i=!0;const l=n.at(-1);l?.type==="text"?(l.raw+=s.raw,l.text+=s.text):n.push(s);continue}if(t){const l="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return n}},se=class{constructor(e){w(this,"options");w(this,"parser");this.options=e||H}space(e){return""}code({text:e,lang:t,escaped:n}){const r=(t||"").match(y.notSpaceStart)?.[0],a=e.replace(y.endingNewline,"")+`
`;return r?'<pre><code class="language-'+L(r)+'">'+(n?a:L(a,!0))+`</code></pre>
`:"<pre><code>"+(n?a:L(a,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,n=e.start;let r="";for(let o=0;o<e.items.length;o++){const s=e.items[o];r+=this.listitem(s)}const a=t?"ol":"ul",i=t&&n!==1?' start="'+n+'"':"";return"<"+a+i+`>
`+r+"</"+a+`>
`}listitem(e){let t="";if(e.task){const n=this.checkbox({checked:!!e.checked});e.loose?e.tokens[0]?.type==="paragraph"?(e.tokens[0].text=n+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=n+" "+L(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:n+" ",text:n+" ",escaped:!0}):t+=n+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let a=0;a<e.header.length;a++)n+=this.tablecell(e.header[a]);t+=this.tablerow({text:n});let r="";for(let a=0;a<e.rows.length;a++){const i=e.rows[a];n="";for(let o=0;o<i.length;o++)n+=this.tablecell(i[o]);r+=this.tablerow({text:n})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${L(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const r=this.parser.parseInline(n),a=je(e);if(a===null)return r;e=a;let i='<a href="'+e+'"';return t&&(i+=' title="'+L(t)+'"'),i+=">"+r+"</a>",i}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));const a=je(e);if(a===null)return L(n);e=a;let i=`<img src="${e}" alt="${n}"`;return t&&(i+=` title="${L(t)}"`),i+=">",i}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:L(e.text)}},_e=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},C=class ve{constructor(t){w(this,"options");w(this,"renderer");w(this,"textRenderer");this.options=t||H,this.options.renderer=this.options.renderer||new se,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new _e}static parse(t,n){return new ve(n).parse(t)}static parseInline(t,n){return new ve(n).parseInline(t)}parse(t,n=!0){let r="";for(let a=0;a<t.length;a++){const i=t[a];if(this.options.extensions?.renderers?.[i.type]){const s=i,c=this.options.extensions.renderers[s.type].call({parser:this},s);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(s.type)){r+=c||"";continue}}const o=i;switch(o.type){case"space":{r+=this.renderer.space(o);continue}case"hr":{r+=this.renderer.hr(o);continue}case"heading":{r+=this.renderer.heading(o);continue}case"code":{r+=this.renderer.code(o);continue}case"table":{r+=this.renderer.table(o);continue}case"blockquote":{r+=this.renderer.blockquote(o);continue}case"list":{r+=this.renderer.list(o);continue}case"html":{r+=this.renderer.html(o);continue}case"paragraph":{r+=this.renderer.paragraph(o);continue}case"text":{let s=o,c=this.renderer.text(s);for(;a+1<t.length&&t[a+1].type==="text";)s=t[++a],c+=`
`+this.renderer.text(s);n?r+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):r+=c;continue}default:{const s='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return r}parseInline(t,n=this.renderer){let r="";for(let a=0;a<t.length;a++){const i=t[a];if(this.options.extensions?.renderers?.[i.type]){const s=this.options.extensions.renderers[i.type].call({parser:this},i);if(s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(i.type)){r+=s||"";continue}}const o=i;switch(o.type){case"escape":{r+=n.text(o);break}case"html":{r+=n.html(o);break}case"link":{r+=n.link(o);break}case"image":{r+=n.image(o);break}case"strong":{r+=n.strong(o);break}case"em":{r+=n.em(o);break}case"codespan":{r+=n.codespan(o);break}case"br":{r+=n.br(o);break}case"del":{r+=n.del(o);break}case"text":{r+=n.text(o);break}default:{const s='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return r}},ke,ne=(ke=class{constructor(e){w(this,"options");w(this,"block");this.options=e||H}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?A.lex:A.lexInline}provideParser(){return this.block?C.parse:C.parseInline}},w(ke,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),ke),Rt=class{constructor(...e){w(this,"defaults",Te());w(this,"options",this.setOptions);w(this,"parse",this.parseMarkdown(!0));w(this,"parseInline",this.parseMarkdown(!1));w(this,"Parser",C);w(this,"Renderer",se);w(this,"TextRenderer",_e);w(this,"Lexer",A);w(this,"Tokenizer",oe);w(this,"Hooks",ne);this.use(...e)}walkTokens(e,t){let n=[];for(const r of e)switch(n=n.concat(t.call(this,r)),r.type){case"table":{const a=r;for(const i of a.header)n=n.concat(this.walkTokens(i.tokens,t));for(const i of a.rows)for(const o of i)n=n.concat(this.walkTokens(o.tokens,t));break}case"list":{const a=r;n=n.concat(this.walkTokens(a.items,t));break}default:{const a=r;this.defaults.extensions?.childTokens?.[a.type]?this.defaults.extensions.childTokens[a.type].forEach(i=>{const o=a[i].flat(1/0);n=n.concat(this.walkTokens(o,t))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(a=>{if(!a.name)throw new Error("extension name required");if("renderer"in a){const i=t.renderers[a.name];i?t.renderers[a.name]=function(...o){let s=a.renderer.apply(this,o);return s===!1&&(s=i.apply(this,o)),s}:t.renderers[a.name]=a.renderer}if("tokenizer"in a){if(!a.level||a.level!=="block"&&a.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=t[a.level];i?i.unshift(a.tokenizer):t[a.level]=[a.tokenizer],a.start&&(a.level==="block"?t.startBlock?t.startBlock.push(a.start):t.startBlock=[a.start]:a.level==="inline"&&(t.startInline?t.startInline.push(a.start):t.startInline=[a.start]))}"childTokens"in a&&a.childTokens&&(t.childTokens[a.name]=a.childTokens)}),r.extensions=t),n.renderer){const a=this.defaults.renderer||new se(this.defaults);for(const i in n.renderer){if(!(i in a))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;const o=i,s=n.renderer[o],c=a[o];a[o]=(...l)=>{let u=s.apply(a,l);return u===!1&&(u=c.apply(a,l)),u||""}}r.renderer=a}if(n.tokenizer){const a=this.defaults.tokenizer||new oe(this.defaults);for(const i in n.tokenizer){if(!(i in a))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const o=i,s=n.tokenizer[o],c=a[o];a[o]=(...l)=>{let u=s.apply(a,l);return u===!1&&(u=c.apply(a,l)),u}}r.tokenizer=a}if(n.hooks){const a=this.defaults.hooks||new ne;for(const i in n.hooks){if(!(i in a))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;const o=i,s=n.hooks[o],c=a[o];ne.passThroughHooks.has(i)?a[o]=l=>{if(this.defaults.async)return Promise.resolve(s.call(a,l)).then(h=>c.call(a,h));const u=s.call(a,l);return c.call(a,u)}:a[o]=(...l)=>{let u=s.apply(a,l);return u===!1&&(u=c.apply(a,l)),u}}r.hooks=a}if(n.walkTokens){const a=this.defaults.walkTokens,i=n.walkTokens;r.walkTokens=function(o){let s=[];return s.push(i.call(this,o)),a&&(s=s.concat(a.call(this,o))),s}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return A.lex(e,t??this.defaults)}parser(e,t){return C.parse(e,t??this.defaults)}parseMarkdown(e){return(n,r)=>{const a={...r},i={...this.defaults,...a},o=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&a.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=e);const s=i.hooks?i.hooks.provideLexer():e?A.lex:A.lexInline,c=i.hooks?i.hooks.provideParser():e?C.parse:C.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(l=>s(l,i)).then(l=>i.hooks?i.hooks.processAllTokens(l):l).then(l=>i.walkTokens?Promise.all(this.walkTokens(l,i.walkTokens)).then(()=>l):l).then(l=>c(l,i)).then(l=>i.hooks?i.hooks.postprocess(l):l).catch(o);try{i.hooks&&(n=i.hooks.preprocess(n));let l=s(n,i);i.hooks&&(l=i.hooks.processAllTokens(l)),i.walkTokens&&this.walkTokens(l,i.walkTokens);let u=c(l,i);return i.hooks&&(u=i.hooks.postprocess(u)),u}catch(l){return o(l)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const r="<p>An error occurred:</p><pre>"+L(n.message+"",!0)+"</pre>";return t?Promise.resolve(r):r}if(t)return Promise.reject(n);throw n}}},z=new Rt;function m(e,t){return z.parse(e,t)}m.options=m.setOptions=function(e){return z.setOptions(e),m.defaults=z.defaults,gt(m.defaults),m};m.getDefaults=Te;m.defaults=H;m.use=function(...e){return z.use(...e),m.defaults=z.defaults,gt(m.defaults),m};m.walkTokens=function(e,t){return z.walkTokens(e,t)};m.parseInline=z.parseInline;m.Parser=C;m.parser=C.parse;m.Renderer=se;m.TextRenderer=_e;m.Lexer=A;m.lexer=A.lex;m.Tokenizer=oe;m.Hooks=ne;m.parse=m;m.options;m.setOptions;m.use;m.walkTokens;m.parseInline;C.parse;A.lex;function qn(e){if(typeof e=="function"&&(e={highlight:e}),!e||typeof e.highlight!="function")throw new Error("Must provide highlight function");return typeof e.langPrefix!="string"&&(e.langPrefix="language-"),typeof e.emptyLangClass!="string"&&(e.emptyLangClass=""),{async:!!e.async,walkTokens(t){if(t.type!=="code")return;const n=Xe(t.lang);if(e.async)return Promise.resolve(e.highlight(t.text,n,t.lang||"")).then(Qe(t));const r=e.highlight(t.text,n,t.lang||"");if(r instanceof Promise)throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");Qe(t)(r)},useNewRenderer:!0,renderer:{code(t,n,r){typeof t=="object"&&(r=t.escaped,n=t.lang,t=t.text);const a=Xe(n),i=a?e.langPrefix+Je(a):e.emptyLangClass,o=i?` class="${i}"`:"";return t=t.replace(/\n$/,""),`<pre><code${o}>${r?t:Je(t,!0)}
</code></pre>`}}}}function Xe(e){return(e||"").match(/\S*/)[0]}function Qe(e){return t=>{typeof t=="string"&&t!==e.text&&(e.escaped=!0,e.text=t)}}const $t=/[&<>"']/,On=new RegExp($t.source,"g"),Lt=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Nn=new RegExp(Lt.source,"g"),Un={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ke=e=>Un[e];function Je(e,t){if(t){if($t.test(e))return e.replace(On,Ke)}else if(Lt.test(e))return e.replace(Nn,Ke);return e}const At=new Rt(qn({langPrefix:"hljs language-",highlight(e,t){if(t&&fe.getLanguage(t))try{return fe.highlight(e,{language:t}).value}catch{}try{return fe.highlightAuto(e).value}catch{}return e}}));At.setOptions({gfm:!0,breaks:!1,pedantic:!1});function Gn(e){return At.parse(e)}function Wn(e,t=!0){try{return Gn(e)}catch{return'<p style="color:red">Markdown 解析错误</p>'}}const jn="modulepreload",Vn=function(e){return"/"+e},Ye={},Zn=function(t,n,r){let a=Promise.resolve();if(n&&n.length>0){let o=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=s?.nonce||s?.getAttribute("nonce");a=o(n.map(l=>{if(l=Vn(l),l in Ye)return;Ye[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":jn,u||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((p,g)=>{d.addEventListener("load",p),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(o){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o}return a.then(o=>{for(const s of o||[])s.status==="rejected"&&i(s.reason);return t().catch(i)})};async function Xn(e){const t=await Zn(()=>import("./katex-HP8lGamR.js"),[]),n=e.querySelectorAll('[data-math="block"]');for(const a of n)try{const i=a.getAttribute("data-latex")||a.textContent||"",o=t.renderToString(i,{displayMode:!0,throwOnError:!1,strict:!1});a.innerHTML=o,a.classList.add("katex-rendered")}catch{a.classList.add("math-error")}const r=e.querySelectorAll('[data-math="inline"]');for(const a of r)try{const i=a.getAttribute("data-latex")||a.textContent||"",o=t.renderToString(i,{displayMode:!1,throwOnError:!1,strict:!1});a.innerHTML=o,a.classList.add("katex-rendered")}catch{a.classList.add("math-error")}}function Qn(e){let t=e.replace(/\$\$([\s\S]*?)\$\$/g,(n,r)=>{const a=r.trim().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return`<div data-math="block" data-latex="${a.replace(/"/g,"&quot;")}">${a}</div>`});return t=t.replace(/(?<!\$)\$(?!\$)([^\$\n]+?)\$(?!\$)/g,(n,r)=>{const a=r.trim().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return`<span data-math="inline" data-latex="${a.replace(/"/g,"&quot;")}">${a}</span>`}),t}const Kn="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css",Jn="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/github.min.css",Ie=`
  :root {
    color-scheme: light;
    --md-blue: #1671FA;
    --md-purple: #A070FF;
    --md-text: #1a1a2e;
    --md-text-soft: #555;
    --md-border: #e8ecf4;
    --md-code-bg: #f0f2f5;
    --md-pre-bg: #f6f8fa;
    --md-quote-bg: rgba(160, 112, 255, 0.06);
    --md-table-zebra: #f8f9fb;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    background: #ffffff;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans SC', sans-serif;
    color: var(--md-text);
  }

  .markdown-body {
    max-width: 860px;
    margin: 0 auto;
    padding: 32px 24px 48px;
    line-height: 1.7;
    color: var(--md-text);
  }

  .markdown-body * {
    box-sizing: border-box;
  }

  .markdown-body h1 {
    font-size: 24pt;
    color: var(--md-text);
    border-bottom: 2px solid var(--md-blue);
    padding-bottom: 8px;
    margin: 28px 0 16px;
  }

  .markdown-body h1:first-child {
    margin-top: 0;
  }

  .markdown-body h2 {
    font-size: 18pt;
    color: var(--md-text);
    border-bottom: 1px solid var(--md-border);
    padding-bottom: 6px;
    margin: 24px 0 12px;
  }

  .markdown-body h3 {
    font-size: 15pt;
    color: #2d2d44;
    margin: 20px 0 10px;
  }

  .markdown-body h4 {
    font-size: 13pt;
    color: #2d2d44;
    margin: 16px 0 8px;
  }

  .markdown-body p {
    margin: 8px 0;
  }

  .markdown-body a {
    color: var(--md-blue);
    text-decoration: none;
  }

  .markdown-body a:hover {
    text-decoration: underline;
  }

  .markdown-body strong {
    font-weight: 600;
  }

  .markdown-body code {
    font-family: 'Consolas', 'Monaco', 'Menlo', monospace;
    background: var(--md-code-bg);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.9em;
    color: #d73a49;
  }

  .markdown-body pre {
    background: var(--md-pre-bg);
    border: 1px solid var(--md-border);
    border-left: 3px solid var(--md-blue);
    border-radius: 8px;
    padding: 14px 18px;
    margin: 12px 0;
    overflow-x: auto;
  }

  .markdown-body pre code {
    display: block;
    background: none;
    padding: 0;
    color: inherit;
    font-size: 12px;
    line-height: 1.6;
  }

  .markdown-body blockquote {
    border-left: 4px solid var(--md-purple);
    padding: 10px 16px;
    margin: 12px 0;
    background: var(--md-quote-bg);
    color: var(--md-text-soft);
    border-radius: 0 6px 6px 0;
  }

  .markdown-body blockquote p {
    margin: 4px 0;
  }

  .markdown-body table {
    width: 100%;
    border-collapse: collapse;
    margin: 12px 0;
    font-size: 13px;
  }

  .markdown-body th,
  .markdown-body td {
    border: 1px solid #e0e4ea;
    padding: 8px 14px;
    text-align: left;
    vertical-align: top;
  }

  .markdown-body th {
    background: var(--md-blue);
    color: #ffffff;
    font-weight: 600;
  }

  .markdown-body tr:nth-child(even) {
    background: var(--md-table-zebra);
  }

  .markdown-body ul,
  .markdown-body ol {
    margin: 8px 0;
    padding-left: 24px;
  }

  .markdown-body li {
    margin: 4px 0;
  }

  .markdown-body li > input[type="checkbox"] {
    margin-right: 8px;
  }

  .markdown-body img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .markdown-body hr {
    border: none;
    border-top: 1px solid #e0e4ea;
    margin: 20px 0;
  }

  .markdown-body .katex {
    font-size: 1.1em;
  }

  .markdown-body .katex-display {
    overflow-x: auto;
    overflow-y: hidden;
    padding: 8px 0;
  }

  .markdown-body .math-error {
    color: #ef4444;
    border: 1px dashed #ef4444;
    padding: 2px 6px;
    border-radius: 3px;
  }
`,Yn=`
  @page {
    size: A4;
    margin: 16mm 14mm 18mm;
  }

  :root {
    color-scheme: light;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    background: #ffffff !important;
  }

  body {
    color: #1a1a2e;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  .pdf-export-root {
    width: 100%;
  }

  .markdown-body.pdf-preview {
    min-height: auto !important;
    overflow: visible !important;
    max-width: none !important;
    padding: 0 !important;
    margin: 0 !important;
    background: #ffffff !important;
  }

  .markdown-body.pdf-preview * {
    box-sizing: border-box;
  }

  .markdown-body.pdf-preview h1,
  .markdown-body.pdf-preview h2,
  .markdown-body.pdf-preview h3,
  .markdown-body.pdf-preview h4,
  .markdown-body.pdf-preview h5,
  .markdown-body.pdf-preview h6 {
    break-after: avoid-page;
    page-break-after: avoid;
  }

  .markdown-body.pdf-preview p,
  .markdown-body.pdf-preview li,
  .markdown-body.pdf-preview blockquote {
    orphans: 3;
    widows: 3;
  }

  .markdown-body.pdf-preview img,
  .markdown-body.pdf-preview figure,
  .markdown-body.pdf-preview tr,
  .markdown-body.pdf-preview .katex-display {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  .markdown-body.pdf-preview pre,
  .markdown-body.pdf-preview blockquote {
    break-inside: auto;
    page-break-inside: auto;
  }

  .markdown-body.pdf-preview pre {
    overflow: visible !important;
    white-space: pre-wrap !important;
    word-break: break-word;
    overflow-wrap: anywhere;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }

  .markdown-body.pdf-preview pre code,
  .markdown-body.pdf-preview pre .hljs {
    white-space: inherit !important;
    word-break: break-word;
    overflow-wrap: anywhere;
  }

  .markdown-body.pdf-preview table {
    table-layout: fixed;
    break-inside: auto;
    page-break-inside: auto;
  }

  .markdown-body.pdf-preview thead {
    display: table-header-group;
  }

  .markdown-body.pdf-preview tfoot {
    display: table-footer-group;
  }

  .markdown-body.pdf-preview th,
  .markdown-body.pdf-preview td {
    word-break: break-word;
    overflow-wrap: anywhere;
    vertical-align: top;
  }

  .markdown-body.pdf-preview .katex-display {
    overflow: visible !important;
  }

  .markdown-body.pdf-preview a {
    color: inherit;
    text-decoration: none;
  }
`;function et(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function er(){return Array.from(document.head.querySelectorAll('style, link[rel="stylesheet"]')).map(t=>t.outerHTML).join(`
`)}async function tr(e){const t=Array.from(e.querySelectorAll('link[rel="stylesheet"]'));await Promise.all(t.map(n=>n.sheet?Promise.resolve():new Promise(r=>{n.addEventListener("load",()=>r(),{once:!0}),n.addEventListener("error",()=>r(),{once:!0})})))}async function nr(e){const t=Array.from(e.images);await Promise.all(t.map(n=>n.complete?Promise.resolve():new Promise(r=>{n.addEventListener("load",()=>r(),{once:!0}),n.addEventListener("error",()=>r(),{once:!0})})))}async function rr(e){if(await tr(e),"fonts"in e)try{await e.fonts.ready}catch{}await nr(e),await new Promise(t=>{requestAnimationFrame(()=>requestAnimationFrame(()=>t()))})}function tt(e){e.parentNode&&e.parentNode.removeChild(e)}async function ar(e,t="document"){const n=document.createElement("iframe");n.setAttribute("aria-hidden","true"),n.style.position="fixed",n.style.right="0",n.style.bottom="0",n.style.width="0",n.style.height="0",n.style.border="0",n.style.opacity="0",n.style.pointerEvents="none",document.body.appendChild(n);const r=n.contentWindow,a=n.contentDocument;if(!r||!a)throw tt(n),new Error("Print frame is unavailable");const i=et(t),o=et(window.location.href),s=er(),c=`
    <!DOCTYPE html>
    <html lang="zh-CN">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${i}</title>
        <base href="${o}" />
        ${s}
        <style>${Ie}</style>
        <style>${Yn}</style>
      </head>
      <body>
        <main class="pdf-export-root">
          <article class="markdown-body pdf-preview">${e.innerHTML}</article>
        </main>
      </body>
    </html>
  `;a.open(),a.write(c),a.close(),await rr(a);const l=()=>window.setTimeout(()=>tt(n),1e3);r.addEventListener("afterprint",l,{once:!0}),window.setTimeout(l,6e4),r.focus(),r.print()}var re={exports:{}},ir=re.exports,nt;function or(){return nt||(nt=1,(function(e,t){(function(n,r){r()})(ir,function(){function n(l,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(l.type)?new Blob(["\uFEFF",l],{type:l.type}):l}function r(l,u,h){var d=new XMLHttpRequest;d.open("GET",l),d.responseType="blob",d.onload=function(){c(d.response,u,h)},d.onerror=function(){console.error("could not download file")},d.send()}function a(l){var u=new XMLHttpRequest;u.open("HEAD",l,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function i(l){try{l.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),l.dispatchEvent(u)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Y=="object"&&Y.global===Y?Y:void 0,s=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(l,u,h){var d=o.URL||o.webkitURL,p=document.createElement("a");u=u||l.name||"download",p.download=u,p.rel="noopener",typeof l=="string"?(p.href=l,p.origin===location.origin?i(p):a(p.href)?r(l,u,h):i(p,p.target="_blank")):(p.href=d.createObjectURL(l),setTimeout(function(){d.revokeObjectURL(p.href)},4e4),setTimeout(function(){i(p)},0))}:"msSaveOrOpenBlob"in navigator?function(l,u,h){if(u=u||l.name||"download",typeof l!="string")navigator.msSaveOrOpenBlob(n(l,h),u);else if(a(l))r(l,u,h);else{var d=document.createElement("a");d.href=l,d.target="_blank",setTimeout(function(){i(d)})}}:function(l,u,h,d){if(d=d||open("","_blank"),d&&(d.document.title=d.document.body.innerText="downloading..."),typeof l=="string")return r(l,u,h);var p=l.type==="application/octet-stream",g=/constructor/i.test(o.HTMLElement)||o.safari,x=/CriOS\/[\d]+/.test(navigator.userAgent);if((x||p&&g||s)&&typeof FileReader<"u"){var B=new FileReader;B.onloadend=function(){var M=B.result;M=x?M:M.replace(/^data:[^;]*;/,"data:attachment/file;"),d?d.location.href=M:location=M,d=null},B.readAsDataURL(l)}else{var q=o.URL||o.webkitURL,O=q.createObjectURL(l);d?d.location=O:location.href=O,d=null,setTimeout(function(){q.revokeObjectURL(O)},4e4)}});o.saveAs=c.saveAs=c,e.exports=c})})(re)),re.exports}var De=or();const sr=/[<>:"/\\|?*\u0000-\u001F]/g,lr=/[. ]+$/g,cr=/^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i;function ze(e,t="document"){const a=e.trim().replace(sr,"_").replace(lr,"")||t;return cr.test(a)?`${a}_file`:a}function ur(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function dr(e,t="document",n=!0){const r=ur(t),a=ze(t),i=`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${r}</title>
  <link rel="stylesheet" href="${Jn}" />
  <link rel="stylesheet" href="${Kn}" />
  <style>${n?Ie:""}</style>
</head>
<body>
  <main class="markdown-body">
    ${e}
  </main>
</body>
</html>`,o=new Blob([i],{type:"text/html;charset=utf-8"});De.saveAs(o,`${a}.html`)}function hr(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),a=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(a),t&&(r.href=t),a.href=e,a.href}const pr=(()=>{let e=0;const t=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function I(e){const t=[];for(let n=0,r=e.length;n<r;n++)t.push(e[n]);return t}let N=null;function Ct(e={}){return N||(e.includeStyleProperties?(N=e.includeStyleProperties,N):(N=I(window.getComputedStyle(document.documentElement)),N))}function le(e,t){const r=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return r?parseFloat(r.replace("px","")):0}function fr(e){const t=le(e,"border-left-width"),n=le(e,"border-right-width");return e.clientWidth+t+n}function gr(e){const t=le(e,"border-top-width"),n=le(e,"border-bottom-width");return e.clientHeight+t+n}function Pt(e,t={}){const n=t.width||fr(e),r=t.height||gr(e);return{width:n,height:r}}function mr(){let e,t;try{t=process}catch{}const n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}const S=16384;function wr(e){(e.width>S||e.height>S)&&(e.width>S&&e.height>S?e.width>e.height?(e.height*=S/e.width,e.width=S):(e.width*=S/e.height,e.height=S):e.width>S?(e.height*=S/e.width,e.width=S):(e.width*=S/e.height,e.height=S))}function ce(e){return new Promise((t,n)=>{const r=new Image;r.onload=()=>{r.decode().then(()=>{requestAnimationFrame(()=>t(r))})},r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=e})}async function br(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)}async function kr(e,t,n){const r="http://www.w3.org/2000/svg",a=document.createElementNS(r,"svg"),i=document.createElementNS(r,"foreignObject");return a.setAttribute("width",`${t}`),a.setAttribute("height",`${n}`),a.setAttribute("viewBox",`0 0 ${t} ${n}`),i.setAttribute("width","100%"),i.setAttribute("height","100%"),i.setAttribute("x","0"),i.setAttribute("y","0"),i.setAttribute("externalResourcesRequired","true"),a.appendChild(i),i.appendChild(e),br(a)}const v=(e,t)=>{if(e instanceof t)return!0;const n=Object.getPrototypeOf(e);return n===null?!1:n.constructor.name===t.name||v(n,t)};function xr(e){const t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}function yr(e,t){return Ct(t).map(n=>{const r=e.getPropertyValue(n),a=e.getPropertyPriority(n);return`${n}: ${r}${a?" !important":""};`}).join(" ")}function vr(e,t,n,r){const a=`.${e}:${t}`,i=n.cssText?xr(n):yr(n,r);return document.createTextNode(`${a}{${i}}`)}function rt(e,t,n,r){const a=window.getComputedStyle(e,n),i=a.getPropertyValue("content");if(i===""||i==="none")return;const o=pr();try{t.className=`${t.className} ${o}`}catch{return}const s=document.createElement("style");s.appendChild(vr(o,n,a,r)),t.appendChild(s)}function Sr(e,t,n){rt(e,t,":before",n),rt(e,t,":after",n)}const at="application/font-woff",it="image/jpeg",Er={woff:at,woff2:at,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:it,jpeg:it,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function Tr(e){const t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}function Fe(e){const t=Tr(e).toLowerCase();return Er[t]||""}function Rr(e){return e.split(/,/)[1]}function Se(e){return e.search(/^(data:)/)!==-1}function $r(e,t){return`data:${t};base64,${e}`}async function Mt(e,t,n){const r=await fetch(e,t);if(r.status===404)throw new Error(`Resource "${r.url}" not found`);const a=await r.blob();return new Promise((i,o)=>{const s=new FileReader;s.onerror=o,s.onloadend=()=>{try{i(n({res:r,result:s.result}))}catch(c){o(c)}},s.readAsDataURL(a)})}const me={};function Lr(e,t,n){let r=e.replace(/\?.*/,"");return n&&(r=e),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),t?`[${t}]${r}`:r}async function He(e,t,n){const r=Lr(e,t,n.includeQueryParams);if(me[r]!=null)return me[r];n.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());let a;try{const i=await Mt(e,n.fetchRequestInit,({res:o,result:s})=>(t||(t=o.headers.get("Content-Type")||""),Rr(s)));a=$r(i,t)}catch(i){a=n.imagePlaceholder||"";let o=`Failed to fetch resource: ${e}`;i&&(o=typeof i=="string"?i:i.message),o&&console.warn(o)}return me[r]=a,a}async function Ar(e){const t=e.toDataURL();return t==="data:,"?e.cloneNode(!1):ce(t)}async function Cr(e,t){if(e.currentSrc){const i=document.createElement("canvas"),o=i.getContext("2d");i.width=e.clientWidth,i.height=e.clientHeight,o?.drawImage(e,0,0,i.width,i.height);const s=i.toDataURL();return ce(s)}const n=e.poster,r=Fe(n),a=await He(n,r,t);return ce(a)}async function Pr(e,t){var n;try{if(!((n=e?.contentDocument)===null||n===void 0)&&n.body)return await he(e.contentDocument.body,t,!0)}catch{}return e.cloneNode(!1)}async function Mr(e,t){return v(e,HTMLCanvasElement)?Ar(e):v(e,HTMLVideoElement)?Cr(e,t):v(e,HTMLIFrameElement)?Pr(e,t):e.cloneNode(_t(e))}const _r=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SLOT",_t=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SVG";async function Ir(e,t,n){var r,a;if(_t(t))return t;let i=[];return _r(e)&&e.assignedNodes?i=I(e.assignedNodes()):v(e,HTMLIFrameElement)&&(!((r=e.contentDocument)===null||r===void 0)&&r.body)?i=I(e.contentDocument.body.childNodes):i=I(((a=e.shadowRoot)!==null&&a!==void 0?a:e).childNodes),i.length===0||v(e,HTMLVideoElement)||await i.reduce((o,s)=>o.then(()=>he(s,n)).then(c=>{c&&t.appendChild(c)}),Promise.resolve()),t}function Dr(e,t,n){const r=t.style;if(!r)return;const a=window.getComputedStyle(e);a.cssText?(r.cssText=a.cssText,r.transformOrigin=a.transformOrigin):Ct(n).forEach(i=>{let o=a.getPropertyValue(i);i==="font-size"&&o.endsWith("px")&&(o=`${Math.floor(parseFloat(o.substring(0,o.length-2)))-.1}px`),v(e,HTMLIFrameElement)&&i==="display"&&o==="inline"&&(o="block"),i==="d"&&t.getAttribute("d")&&(o=`path(${t.getAttribute("d")})`),r.setProperty(i,o,a.getPropertyPriority(i))})}function zr(e,t){v(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),v(e,HTMLInputElement)&&t.setAttribute("value",e.value)}function Fr(e,t){if(v(e,HTMLSelectElement)){const r=Array.from(t.children).find(a=>e.value===a.getAttribute("value"));r&&r.setAttribute("selected","")}}function Hr(e,t,n){return v(t,Element)&&(Dr(e,t,n),Sr(e,t,n),zr(e,t),Fr(e,t)),t}async function Br(e,t){const n=e.querySelectorAll?e.querySelectorAll("use"):[];if(n.length===0)return e;const r={};for(let i=0;i<n.length;i++){const s=n[i].getAttribute("xlink:href");if(s){const c=e.querySelector(s),l=document.querySelector(s);!c&&l&&!r[s]&&(r[s]=await he(l,t,!0))}}const a=Object.values(r);if(a.length){const i="http://www.w3.org/1999/xhtml",o=document.createElementNS(i,"svg");o.setAttribute("xmlns",i),o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.overflow="hidden",o.style.display="none";const s=document.createElementNS(i,"defs");o.appendChild(s);for(let c=0;c<a.length;c++)s.appendChild(a[c]);e.appendChild(o)}return e}async function he(e,t,n){return!n&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(r=>Mr(r,t)).then(r=>Ir(e,r,t)).then(r=>Hr(e,r,t)).then(r=>Br(r,t))}const It=/url\((['"]?)([^'"]+?)\1\)/g,qr=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,Or=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Nr(e){const t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}function Ur(e){const t=[];return e.replace(It,(n,r,a)=>(t.push(a),n)),t.filter(n=>!Se(n))}async function Gr(e,t,n,r,a){try{const i=n?hr(t,n):t,o=Fe(t);let s;return a||(s=await He(i,o,r)),e.replace(Nr(t),`$1${s}$3`)}catch{}return e}function Wr(e,{preferredFontFormat:t}){return t?e.replace(Or,n=>{for(;;){const[r,,a]=qr.exec(n)||[];if(!a)return"";if(a===t)return`src: ${r};`}}):e}function Dt(e){return e.search(It)!==-1}async function zt(e,t,n){if(!Dt(e))return e;const r=Wr(e,n);return Ur(r).reduce((i,o)=>i.then(s=>Gr(s,o,t,n)),Promise.resolve(r))}async function U(e,t,n){var r;const a=(r=t.style)===null||r===void 0?void 0:r.getPropertyValue(e);if(a){const i=await zt(a,null,n);return t.style.setProperty(e,i,t.style.getPropertyPriority(e)),!0}return!1}async function jr(e,t){await U("background",e,t)||await U("background-image",e,t),await U("mask",e,t)||await U("-webkit-mask",e,t)||await U("mask-image",e,t)||await U("-webkit-mask-image",e,t)}async function Vr(e,t){const n=v(e,HTMLImageElement);if(!(n&&!Se(e.src))&&!(v(e,SVGImageElement)&&!Se(e.href.baseVal)))return;const r=n?e.src:e.href.baseVal,a=await He(r,Fe(r),t);await new Promise((i,o)=>{e.onload=i,e.onerror=t.onImageErrorHandler?(...c)=>{try{i(t.onImageErrorHandler(...c))}catch(l){o(l)}}:o;const s=e;s.decode&&(s.decode=i),s.loading==="lazy"&&(s.loading="eager"),n?(e.srcset="",e.src=a):e.href.baseVal=a})}async function Zr(e,t){const r=I(e.childNodes).map(a=>Ft(a,t));await Promise.all(r).then(()=>e)}async function Ft(e,t){v(e,Element)&&(await jr(e,t),await Vr(e,t),await Zr(e,t))}function Xr(e,t){const{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);const r=t.style;return r!=null&&Object.keys(r).forEach(a=>{n[a]=r[a]}),e}const ot={};async function st(e){let t=ot[e];if(t!=null)return t;const r=await(await fetch(e)).text();return t={url:e,cssText:r},ot[e]=t,t}async function lt(e,t){let n=e.cssText;const r=/url\(["']?([^"')]+)["']?\)/g,i=(n.match(/url\([^)]+\)/g)||[]).map(async o=>{let s=o.replace(r,"$1");return s.startsWith("https://")||(s=new URL(s,e.url).href),Mt(s,t.fetchRequestInit,({result:c})=>(n=n.replace(o,`url(${c})`),[o,c]))});return Promise.all(i).then(()=>n)}function ct(e){if(e==null)return[];const t=[],n=/(\/\*[\s\S]*?\*\/)/gi;let r=e.replace(n,"");const a=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const c=a.exec(r);if(c===null)break;t.push(c[0])}r=r.replace(a,"");const i=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,o="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",s=new RegExp(o,"gi");for(;;){let c=i.exec(r);if(c===null){if(c=s.exec(r),c===null)break;i.lastIndex=s.lastIndex}else s.lastIndex=i.lastIndex;t.push(c[0])}return t}async function Qr(e,t){const n=[],r=[];return e.forEach(a=>{if("cssRules"in a)try{I(a.cssRules||[]).forEach((i,o)=>{if(i.type===CSSRule.IMPORT_RULE){let s=o+1;const c=i.href,l=st(c).then(u=>lt(u,t)).then(u=>ct(u).forEach(h=>{try{a.insertRule(h,h.startsWith("@import")?s+=1:a.cssRules.length)}catch(d){console.error("Error inserting rule from remote css",{rule:h,error:d})}})).catch(u=>{console.error("Error loading remote css",u.toString())});r.push(l)}})}catch(i){const o=e.find(s=>s.href==null)||document.styleSheets[0];a.href!=null&&r.push(st(a.href).then(s=>lt(s,t)).then(s=>ct(s).forEach(c=>{o.insertRule(c,o.cssRules.length)})).catch(s=>{console.error("Error loading remote stylesheet",s)})),console.error("Error inlining remote css file",i)}}),Promise.all(r).then(()=>(e.forEach(a=>{if("cssRules"in a)try{I(a.cssRules||[]).forEach(i=>{n.push(i)})}catch(i){console.error(`Error while reading CSS rules from ${a.href}`,i)}}),n))}function Kr(e){return e.filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>Dt(t.style.getPropertyValue("src")))}async function Jr(e,t){if(e.ownerDocument==null)throw new Error("Provided element is not within a Document");const n=I(e.ownerDocument.styleSheets),r=await Qr(n,t);return Kr(r)}function Ht(e){return e.trim().replace(/["']/g,"")}function Yr(e){const t=new Set;function n(r){(r.style.fontFamily||getComputedStyle(r).fontFamily).split(",").forEach(i=>{t.add(Ht(i))}),Array.from(r.children).forEach(i=>{i instanceof HTMLElement&&n(i)})}return n(e),t}async function ea(e,t){const n=await Jr(e,t),r=Yr(e);return(await Promise.all(n.filter(i=>r.has(Ht(i.style.fontFamily))).map(i=>{const o=i.parentStyleSheet?i.parentStyleSheet.href:null;return zt(i.cssText,o,t)}))).join(`
`)}async function ta(e,t){const n=t.fontEmbedCSS!=null?t.fontEmbedCSS:t.skipFonts?null:await ea(e,t);if(n){const r=document.createElement("style"),a=document.createTextNode(n);r.appendChild(a),e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r)}}async function Bt(e,t={}){const{width:n,height:r}=Pt(e,t),a=await he(e,t,!0);return await ta(a,t),await Ft(a,t),Xr(a,t),await kr(a,n,r)}async function qt(e,t={}){const{width:n,height:r}=Pt(e,t),a=await Bt(e,t),i=await ce(a),o=document.createElement("canvas"),s=o.getContext("2d"),c=t.pixelRatio||mr(),l=t.canvasWidth||n,u=t.canvasHeight||r;return o.width=l*c,o.height=u*c,t.skipAutoScale||wr(o),o.style.width=`${l}`,o.style.height=`${u}`,t.backgroundColor&&(s.fillStyle=t.backgroundColor,s.fillRect(0,0,o.width,o.height)),s.drawImage(i,0,0,o.width,o.height),o}async function ut(e,t={}){return(await qt(e,t)).toDataURL()}async function na(e,t={}){return(await qt(e,t)).toDataURL("image/jpeg",t.quality||1)}const dt=16384;function ra(e,t,n){const r=document.createElement("div");r.style.position="fixed",r.style.left="-100000px",r.style.top="0",r.style.width=`${t}px`,r.style.padding="0",r.style.margin="0",r.style.background=n,r.style.opacity="0",r.style.pointerEvents="none",r.style.zIndex="-1";const a=document.createElement("style");a.textContent=`
    ${Ie}
    .markdown-body.image-export-body {
      max-width: none;
      width: ${t}px;
      margin: 0;
      background: ${n};
    }
  `;const i=document.createElement("article");return i.className="markdown-body image-export-body",i.innerHTML=e.innerHTML,r.appendChild(a),r.appendChild(i),document.body.appendChild(r),r}async function aa(e){if("fonts"in document)try{await document.fonts.ready}catch{}const t=Array.from(e.querySelectorAll("img"));await Promise.all(t.map(n=>n.complete?Promise.resolve():new Promise(r=>{n.addEventListener("load",()=>r(),{once:!0}),n.addEventListener("error",()=>r(),{once:!0})}))),await new Promise(n=>{requestAnimationFrame(()=>requestAnimationFrame(()=>n()))})}function ia(e,t,n){if(e<=0||t<=0)return 1;const r=dt/e,a=dt/t,i=Math.max(Math.min(r,a,n),.1);return Math.min(n,i)}function we(e,t){if(t==="image/svg+xml"){const o=decodeURIComponent(e.replace("data:image/svg+xml;charset=utf-8,",""));return new Blob([o],{type:"image/svg+xml"})}const n=e.split(","),r=n[0].match(/:(.*?);/)?.[1]||"image/png",a=atob(n[1]),i=new Uint8Array(a.length);for(let o=0;o<a.length;o++)i[o]=a.charCodeAt(o);return new Blob([i],{type:r})}async function oa(e){return new Promise((t,n)=>{const r=new Image;r.onload=()=>{const a=document.createElement("canvas");a.width=r.width,a.height=r.height;const i=a.getContext("2d");if(!i){n(new Error("Canvas context is unavailable"));return}i.drawImage(r,0,0),a.toBlob(o=>{o?t(o):n(new Error("WebP conversion failed"))},"image/webp",.95)},r.onerror=n,r.src=e})}async function sa(e,t="document",n={format:"png",scale:2}){const{format:r,scale:a,backgroundColor:i="#ffffff"}=n,o=n.width||Math.max(e.clientWidth||e.offsetWidth,800),s=ze(t),c=ra(e,o,i);try{await aa(c);const l=c.querySelector(".image-export-body");if(!l)throw new Error("Image export surface is unavailable");const u=Math.ceil(l.scrollHeight),h=ia(o,u,a);let d=null;switch(r){case"png":{const p=await ut(l,{pixelRatio:h,backgroundColor:i,cacheBust:!0,width:o,height:u,canvasWidth:Math.round(o*h),canvasHeight:Math.round(u*h)});d=we(p);break}case"jpg":{const p=await na(l,{pixelRatio:h,backgroundColor:i,quality:.95,cacheBust:!0,width:o,height:u,canvasWidth:Math.round(o*h),canvasHeight:Math.round(u*h)});d=we(p);break}case"svg":{const p=await Bt(l,{cacheBust:!0,width:o,height:u});d=we(p,"image/svg+xml");break}case"webp":{const p=await ut(l,{pixelRatio:h,backgroundColor:i,cacheBust:!0,width:o,height:u,canvasWidth:Math.round(o*h),canvasHeight:Math.round(u*h)});d=await oa(p);break}}if(d){const p=r==="jpg"?"jpg":r;De.saveAs(d,`${s}.${p}`)}}finally{c.parentNode&&c.parentNode.removeChild(c)}}function la(e){const n=new DOMParser().parseFromString(e,"text/html"),r=[],a=n.body;for(const i of a.children){const o=Ee(i);o&&r.push(o)}return r}function Ee(e){switch(e.tagName.toLowerCase()){case"h1":return{type:"heading",depth:1,children:$(e)};case"h2":return{type:"heading",depth:2,children:$(e)};case"h3":return{type:"heading",depth:3,children:$(e)};case"h4":return{type:"heading",depth:4,children:$(e)};case"h5":return{type:"heading",depth:5,children:$(e)};case"h6":return{type:"heading",depth:6,children:$(e)};case"p":return{type:"paragraph",children:$(e)};case"img":return{type:"paragraph",children:[{type:"image",src:e.getAttribute("src")||"",alt:e.getAttribute("alt")||""}]};case"pre":{const n=e.querySelector("code");return{type:"codeBlock",lang:n?.className.match(/language-(\w+)/)?.[1]||"text",code:n?.textContent||e.textContent||""}}case"blockquote":{const n=[];for(const r of e.children){const a=Ee(r);a&&n.push(a)}return{type:"blockquote",children:n}}case"ul":{const n=[];for(const r of e.children)r.tagName==="LI"&&n.push($(r));return{type:"list",ordered:!1,items:n}}case"ol":{const n=[];for(const r of e.children)r.tagName==="LI"&&n.push($(r));return{type:"list",ordered:!0,items:n}}case"table":return ca(e);case"div":{if(e.getAttribute("data-math")==="block")return{type:"math",latex:e.getAttribute("data-latex")||e.textContent||""};const n=[];for(const r of e.children){const a=Ee(r);a&&n.push(a)}return n.length===1?n[0]:{type:"paragraph",children:[]}}case"hr":return{type:"hr"};default:return e.textContent?.trim()?{type:"paragraph",children:$(e)}:null}}function $(e){const t=[];for(const n of e.childNodes)if(n.nodeType===Node.TEXT_NODE)n.textContent&&t.push({type:"text",content:n.textContent});else if(n.nodeType===Node.ELEMENT_NODE){const r=n;switch(r.tagName.toLowerCase()){case"strong":case"b":t.push({type:"strong",content:r.textContent||""});break;case"em":case"i":t.push({type:"em",content:r.textContent||""});break;case"code":t.push({type:"code",content:r.textContent||""});break;case"a":t.push({type:"link",content:r.textContent||"",url:r.getAttribute("href")||""});break;case"img":t.push({type:"image",src:r.getAttribute("src")||"",alt:r.getAttribute("alt")||""});break;case"input":r.type==="checkbox"&&t.push({type:"text",content:r.checked?"☑ ":"☐ "});break;case"span":r.getAttribute("data-math")==="inline"?t.push({type:"math",latex:r.getAttribute("data-latex")||r.textContent||""}):r.textContent&&t.push({type:"text",content:r.textContent});break;case"del":case"s":t.push({type:"text",content:r.textContent||""});break;default:r.textContent&&t.push({type:"text",content:r.textContent})}}return t}function ca(e){const t=[];let n;const r=e.querySelector("thead"),a=e.querySelector("tbody")||e;if(r){const i=r.querySelector("tr");if(i){n=[];for(const o of i.querySelectorAll("th, td"))n.push({type:"text",content:o.textContent||""})}}for(const i of a.querySelectorAll("tr")){const o=[];for(const s of i.querySelectorAll("td, th"))o.push({type:"text",content:s.textContent||""});o.length>0&&t.push(o)}return{type:"table",headers:n,rows:t}}function ua(e){switch(e.type){case"text":return[new k({text:e.content||""})];case"strong":return[new k({text:e.content||"",bold:!0})];case"em":return[new k({text:e.content||"",italics:!0})];case"code":return[new k({text:e.content||"",font:"Consolas",size:20,shading:{type:"solid",color:"F6F8FA"}})];case"link":return[new ft({children:[new k({text:e.content||"",style:"Hyperlink",color:"2563EB"})],link:e.url||""})];case"image":return[new k({text:e.alt?.trim()||"[图片]"})];case"math":return[new k({text:e.content||e.latex||"[公式]"})];default:return[new k({text:e.content||""})]}}function Ot(e){const t=[];for(const n of e)n.type==="link"?t.push(new ft({children:[new k({text:n.content||"",style:"Hyperlink",color:"2563EB"})],link:n.url||""})):t.push(...ua(n));return t}function _(e,t){const n=Ot(e);return t?.prefix&&n.unshift(new k({text:t.prefix})),new P({children:n,spacing:{after:120},indent:t?.indentLeft?{left:t.indentLeft}:void 0,border:t?.borderLeft?{left:{style:pt.SINGLE,color:"A070FF",size:4}}:void 0})}function da(e,t){const n={1:D.HEADING_1,2:D.HEADING_2,3:D.HEADING_3,4:D.HEADING_4,5:D.HEADING_5,6:D.HEADING_6};return new P({heading:n[e]||D.HEADING_1,children:Ot(t),spacing:{before:240,after:120}})}function ha(e){return(e.code||"").split(`
`).map(n=>new P({children:[new k({text:n||" ",font:"Consolas",size:19})],shading:{type:"solid",color:"F6F8FA"},spacing:{after:0,line:240},indent:{left:200,right:200}}))}function pa(e){const t=[];if(e.headers&&t.push(new Ne({children:e.headers.map(n=>new Ue({children:[new P({children:[new k({text:n.content||"",bold:!0})]})],shading:{type:"solid",color:"E5E7EB"},width:{size:100/e.headers.length,type:ge.PERCENTAGE}}))})),e.rows)for(const n of e.rows)t.push(new Ne({children:n.map(r=>new Ue({children:[new P({children:[new k({text:r.content||""})]})],width:{size:100/n.length,type:ge.PERCENTAGE}}))}));return new rn({rows:t,width:{size:100,type:ge.PERCENTAGE}})}function fa(e){const n=(e.children||[]).flatMap(r=>r.type==="paragraph"||r.type==="heading"?[_(r.children||[{type:"text",content:""}],{indentLeft:400,borderLeft:!0})]:r.type==="list"?(r.items||[]).map((i,o)=>_(i,{prefix:r.ordered?`${o+1}. `:"• ",indentLeft:400,borderLeft:!0})):[_([{type:"text",content:r.content||r.latex||""}],{indentLeft:400,borderLeft:!0})]);return n.length>0?n:[_([{type:"text",content:""}],{indentLeft:400,borderLeft:!0})]}function ga(e){const t=[],n=e.items||[];for(let r=0;r<n.length;r++){const a=e.ordered?`${r+1}. `:"• ";t.push(_(n[r],{prefix:a,indentLeft:400}))}return t}function ma(e){switch(e.type){case"heading":return da(e.depth||1,e.children||[]);case"paragraph":return _(e.children||[]);case"codeBlock":return ha(e);case"table":return new P({});case"blockquote":return fa(e);case"list":return ga(e);case"hr":return new P({children:[],border:{bottom:{style:pt.SINGLE,color:"E5E7EB"}},spacing:{after:200}});case"math":return _([{type:"text",content:e.latex||"[公式]"}]);default:return _([{type:"text",content:e.content||""}])}}async function wa(e,t="document.docx"){const n=la(e.innerHTML),r=ze(t.replace(/\.docx$/i,"")),a=[];for(const s of n)if(s.type==="table")a.push(pa(s));else{const c=ma(s);Array.isArray(c)?a.push(...c):a.push(c)}const i=new Jt({sections:[{properties:{page:{margin:{top:1440,right:1440,bottom:1440,left:1440}}},headers:{default:new en({children:[new P({children:[new k({text:t.replace(".docx",""),size:18,color:"999999"})],alignment:Oe.RIGHT})]})},footers:{default:new Yt({children:[new P({children:[new k({text:"第 "}),new k({children:[tn.CURRENT]}),new k({text:" 页"})],alignment:Oe.CENTER})]})},children:a}]}),o=await nn.toBlob(i);De.saveAs(o,`${r}.docx`)}const K=[{id:"home",path:"/",title:"Markdown 转 PDF - 免费在线转换工具",description:"免费在线 Markdown 转换器，支持实时预览，将 Markdown 转换为 Word、PDF、HTML、图片。所有处理均在浏览器本地完成，无需注册。",keywords:"Markdown转PDF,Markdown在线编辑器,MD转Word,MD转PDF,Markdown转HTML",label:"首页",formatLabel:"导出 PDF",formatDesc:"浏览器打印为 PDF，支持 A4 排版，保留代码高亮和数学公式",icon:"P",color:"#EF4444"},{id:"word",path:"/markdown-to-word/",title:"Markdown 转 Word - 免费在线转换工具",description:"将 Markdown 在线转换为 Word (.docx) 文档。保留标题层级、表格、代码高亮、数学公式。浏览器本地处理，隐私安全。",keywords:"Markdown转Word,MD转DOCX,Markdown导出Word,在线Markdown转Word,Markdown to Word",label:"转 Word",formatLabel:"导出 Word (.docx)",formatDesc:"生成可编辑的 Word 文档，保留标题、表格、代码高亮、公式",icon:"W",color:"#2563EB"},{id:"pdf",path:"/markdown-to-pdf/",title:"Markdown 转 PDF - 免费在线转换工具",description:"将 Markdown 在线转换为 PDF 文档。支持 A4 排版、代码高亮、数学公式、中文优化。浏览器本地处理，无需上传文件。",keywords:"Markdown转PDF,MD转PDF,Markdown导出PDF,在线Markdown转PDF,Markdown to PDF",label:"转 PDF",formatLabel:"导出 PDF",formatDesc:"浏览器打印为 PDF，支持 A4 排版，保留代码高亮和数学公式",icon:"P",color:"#EF4444"},{id:"html",path:"/markdown-to-html/",title:"Markdown 转 HTML - 免费在线转换工具",description:"将 Markdown 在线转换为 HTML 代码。支持完整页面和片段导出，CSS 样式内置。浏览器本地处理，一键复制或下载。",keywords:"Markdown转HTML,MD转HTML,Markdown导出HTML,在线Markdown转HTML,Markdown to HTML",label:"转 HTML",formatLabel:"导出 HTML",formatDesc:"导出完整 HTML 文档或代码片段，CSS 样式内置",icon:"H",color:"#EA580C"},{id:"image",path:"/markdown-to-image/",title:"Markdown 转图片 - 免费在线转换工具",description:"将 Markdown 在线转换为高清图片。支持 PNG、JPG、WebP 格式，2x 像素密度。浏览器本地渲染，适合社交媒体分享。",keywords:"Markdown转图片,MD转PNG,Markdown导出图片,在线Markdown转图片,Markdown to Image",label:"转图片",formatLabel:"导出图片",formatDesc:"导出 PNG/JPG/WebP 高清图片，2x 像素密度，适合社媒分享",icon:"I",color:"#22C55E"}];function Nt(e){const t=e.replace(/\/+$/,"/")||"/",n=t==="/"?"/":t.replace(/\/$/,"");return K.find(a=>(a.path==="/"?"/":a.path.replace(/\/$/,""))===n)?.id||"home"}function ba(){return Nt(window.location.pathname)}function Be(){const e=ba();return K.find(t=>t.id===e)||K[0]}function ka(e){const t=K.find(n=>n.id===e);t&&(history.pushState(null,"",t.path),Ut())}let ae=[];function xa(e){return ae.push(e),e(Be()),()=>{ae=ae.filter(t=>t!==e)}}function Ut(){const e=Be();ae.forEach(t=>t(e))}window.addEventListener("popstate",Ut);function ya(){document.addEventListener("click",e=>{const t=e.target.closest("a");if(!t)return;const n=t.getAttribute("href")||"";if(!n||n.startsWith("http")||n.startsWith("//"))return;const r=Nt(n);K.find(i=>i.id===r)&&(e.preventDefault(),ka(r))})}function va(e){document.title=e.title,te("description",e.description),te("keywords",e.keywords),te("og:title",e.title),te("og:description",e.description),Sa(e.path)}function te(e,t){let n=document.querySelector(`meta[name="${e}"], meta[property="${e}"]`);n||(n=document.createElement("meta"),e.startsWith("og:")?n.setAttribute("property",e):n.setAttribute("name",e),document.head.appendChild(n)),n.setAttribute("content",t)}function Sa(e){let t=document.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.rel="canonical",document.head.appendChild(t)),t.href=`${window.location.origin}${e}`}const G=`# Markdown 转换测试文档

欢迎使用 **MarkdownToPDF**！这是一个完全在浏览器本地运行的 Markdown 转换工具。

## 代码块高亮

\`\`\`typescript
interface User {
  id: number
  name: string
  email: string
}

const user: User = {
  id: 1,
  name: 'IdeaSeek',
  email: 'hello@ideasee.com'
}

// Async function example
async function fetchUser(id: number): Promise<User> {
  const response = await fetch(\`/api/users/\${id}\`)
  return response.json()
}
\`\`\`

\`\`\`python
def fibonacci(n: int) -> list[int]:
    """Generate Fibonacci sequence"""
    a, b = 0, 1
    result = []
    for _ in range(n):
        result.append(a)
        a, b = b, a + b
    return result

print(fibonacci(10))
\`\`\`

## 表格支持

| 功能 | 状态 | 说明 |
|:---|:---:|---:|
| 代码高亮 | ✅ | 支持 190+ 语言 |
| 表格 | ✅ | GFM 标准表格 |
| LaTeX 公式 | ✅ | 数学公式渲染 |
| 任务列表 | ✅ | GFM Task List |
| 图片导出 | ✅ | PNG/JPG/WebP |

## 数学公式 (LaTeX)

行内公式：$E = mc^2$

块级公式：

$$
\\int_{0}^{\\infty} e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}
$$

$$
f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n
$$

## 任务列表

- [x] 支持 Markdown 解析
- [x] 支持实时预览
- [x] 代码语法高亮
- [x] LaTeX 数学公式
- [ ] 自定义模板
- [ ] 批量导出

## 引用块

> **隐私优先**：所有内容默认只在浏览器本地处理，不会将任何数据上传到服务器。
> 
> 无需注册，无需安装，打开即用。

## 有序 & 无序列表

1. 第一步：编写 Markdown
2. 第二步：实时预览效果
3. 第三步：选择导出格式

- 支持 \`.md\` / \`.markdown\` 文件
- 拖拽上传或粘贴输入
- 自动保存草稿
- 支持 Ctrl+S 快速导出

## 链接与图片

访问 [Markdown-to-PDF 官网](https://markdown-to-pdf.ideaseek.cn) 了解更多。

---

*享受 Markdown 的简洁，获得专业文档的优雅。*`,R={markdown:"",previewHtml:"",currentRoute:Be()},b=document.getElementById("editor"),T=document.getElementById("preview"),Ea=document.getElementById("line-numbers"),W=document.getElementById("file-input"),F=document.getElementById("upload-area"),Ta=document.getElementById("export-btn"),Ra=document.getElementById("export-btn-text"),$a=document.getElementById("format-label"),La=document.getElementById("format-desc"),be=document.getElementById("toast"),Aa=document.getElementById("main-nav");function Ca(e,t){let n;return((...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),t)})}function Gt(){const e=R.markdown.split(`
`),t=Math.max(e.length,1);let n="";for(let r=1;r<=t;r++)n+=`<span>${r}</span>`;Ea.innerHTML=n}async function Wt(){try{const e=Qn(R.markdown),t=Wn(e);R.previewHtml=t,T.innerHTML=t,await Xn(T)}catch{T.innerHTML='<p style="color:red">渲染错误</p>'}}async function jt(e){R.markdown=e,Gt();try{localStorage.setItem("mdtopdf_draft",e)}catch{}await Wt()}function Pa(){if(!b||!T)return;const e=b.scrollTop/(b.scrollHeight-b.clientHeight);T.scrollTop=e*(T.scrollHeight-T.clientHeight)}function j(e){jt(e)}const Ma=Ca(j,150);let ht;function E(e){be.textContent=e,be.classList.add("show"),clearTimeout(ht),ht=setTimeout(()=>{be.classList.remove("show")},2500)}function Vt(e){if(!e.name.match(/\.(md|markdown|txt)$/i)){E("请选择 .md 或 .markdown 文件");return}const t=new FileReader;t.onload=n=>{const r=n.target?.result;b.value=r,j(r),E(`已加载: ${e.name}`)},t.readAsText(e)}function _a(){return R.markdown.match(/^#\s+(.+)/m)?.[1]?.trim()||"document"}async function Zt(){const e=b.value;if(!e.trim()){E("请先输入或上传 Markdown 内容");return}await jt(e);const t=_a(),n=R.currentRoute.id;try{switch(n){case"word":E("正在生成 Word 文档..."),await wa(T,t),E("Word 文档已下载");break;case"home":case"pdf":E('正在准备 PDF，请在打印对话框中选择"另存为 PDF"...'),await ar(T,t);break;case"html":dr(T.innerHTML,t),E("HTML 文件已下载");break;case"image":E("正在生成 PNG 图片..."),await sa(T,t,{format:"png",scale:2,backgroundColor:"#ffffff"}),E("PNG 图片已下载");break;default:E("暂不支持当前导出类型");break}}catch(r){console.error("Export error:",r),E("导出失败，请重试")}}function Ia(e){if((e.ctrlKey||e.metaKey)&&e.key==="s"&&(e.preventDefault(),Zt()),e.key==="Tab"){e.preventDefault();const t=b.selectionStart,n=b.selectionEnd,r=b.value;b.value=r.substring(0,t)+"  "+r.substring(n),b.selectionStart=b.selectionEnd=t+2,j(b.value)}}b.addEventListener("input",()=>{Ma(b.value)});b.addEventListener("scroll",Pa);b.addEventListener("keydown",Ia);F.addEventListener("click",()=>W.click());F.addEventListener("dragover",e=>{e.preventDefault(),F.classList.add("drag-over")});F.addEventListener("dragleave",()=>{F.classList.remove("drag-over")});F.addEventListener("drop",e=>{e.preventDefault(),F.classList.remove("drag-over"),e.dataTransfer?.files.length&&Vt(e.dataTransfer.files[0])});document.getElementById("upload-area-btn")?.addEventListener("click",()=>W.click());W.addEventListener("change",()=>{W.files?.length&&(Vt(W.files[0]),W.value="")});Ta.addEventListener("click",Zt);xa(e=>{R.currentRoute=e,Aa.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href")||"",r=e.path.replace(/\/$/,"")||"/";let a;try{a=new URL(n).pathname}catch{a=n}a=a.replace(/\/$/,"")||"/",t.classList.toggle("active",a===r)}),$a.textContent=e.formatLabel,La.textContent=e.formatDesc,Ra.textContent=e.id==="home"?"导出 PDF":`导出 ${e.label.replace("转 ","")}`,va(e)});ya();document.getElementById("clear-btn")?.addEventListener("click",()=>{R.markdown.trim()&&!confirm("确定要清空所有内容吗？")||(b.value="",j(""))});document.getElementById("sample-btn")?.addEventListener("click",()=>{b.value=G,j(G),E("已加载示例文档")});document.addEventListener("paste",e=>{if(document.activeElement===b)return;const t=e.clipboardData?.items;if(t){for(const n of t)if(n.kind==="string"&&n.type==="text/plain"){n.getAsString(r=>{b.value=r,j(r),E("已粘贴 Markdown 内容")});break}}});function Da(){try{const e=localStorage.getItem("mdtopdf_draft");e?.trim()?(b.value=e,R.markdown=e):(b.value=G,R.markdown=G)}catch{b.value=G,R.markdown=G}Gt(),Wt()}Da();
