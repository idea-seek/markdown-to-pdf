var Yt=Object.defineProperty;var en=(e,t,n)=>t in e?Yt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var w=(e,t,n)=>en(e,typeof t!="symbol"?t+"":t,n);import{H as me,c as ee}from"./highlight-BLBngcbI.js";import{F as tn,a as nn,H as rn,P,A as Ne,T as k,b as an,c as on,d as Ue,e as We,W as we,f as sn,B as gt,g as D,E as mt}from"./docx-DXhDcaDh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function $e(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var B=$e();function wt(e){B=e}var K={exec:()=>null};function f(e,t=""){let n=typeof e=="string"?e:e.source;const r={replace:(i,a)=>{let o=typeof a=="string"?a:a.source;return o=o.replace(x.caret,"$1"),n=n.replace(i,o),r},getRegex:()=>new RegExp(n,t)};return r}var x={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}#`),htmlBeginRegex:e=>new RegExp(`^ {0,${Math.min(3,e-1)}}<(?:[a-z].*>|!--)`,"i")},ln=/^(?:[ \t]*(?:\n|$))+/,cn=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,un=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Y=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,dn=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Le=/(?:[*+-]|\d{1,9}[.)])/,bt=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,kt=f(bt).replace(/bull/g,Le).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),hn=f(bt).replace(/bull/g,Le).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Ae=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,pn=/^[^\n]+/,Ce=/(?!\s*\])(?:\\.|[^\[\]\\])+/,fn=f(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ce).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),gn=f(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,Le).getRegex(),de="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Pe=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,mn=f("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Pe).replace("tag",de).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),yt=f(Ae).replace("hr",Y).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",de).getRegex(),wn=f(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",yt).getRegex(),Me={blockquote:wn,code:cn,def:fn,fences:un,heading:dn,hr:Y,html:mn,lheading:kt,list:gn,newline:ln,paragraph:yt,table:K,text:pn},je=f("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Y).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",de).getRegex(),bn={...Me,lheading:hn,table:je,paragraph:f(Ae).replace("hr",Y).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",je).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",de).getRegex()},kn={...Me,html:f(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Pe).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:K,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:f(Ae).replace("hr",Y).replace("heading",` *#{1,6} *[^
]`).replace("lheading",kt).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},yn=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,xn=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,xt=/^( {2,}|\\)\n(?!\s*$)/,vn=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,he=/[\p{P}\p{S}]/u,Ie=/[\s\p{P}\p{S}]/u,vt=/[^\s\p{P}\p{S}]/u,En=f(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Ie).getRegex(),Et=/(?!~)[\p{P}\p{S}]/u,Sn=/(?!~)[\s\p{P}\p{S}]/u,Tn=/(?:[^\s\p{P}\p{S}]|~)/u,Rn=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,St=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,$n=f(St,"u").replace(/punct/g,he).getRegex(),Ln=f(St,"u").replace(/punct/g,Et).getRegex(),Tt="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",An=f(Tt,"gu").replace(/notPunctSpace/g,vt).replace(/punctSpace/g,Ie).replace(/punct/g,he).getRegex(),Cn=f(Tt,"gu").replace(/notPunctSpace/g,Tn).replace(/punctSpace/g,Sn).replace(/punct/g,Et).getRegex(),Pn=f("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,vt).replace(/punctSpace/g,Ie).replace(/punct/g,he).getRegex(),Mn=f(/\\(punct)/,"gu").replace(/punct/g,he).getRegex(),In=f(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),_n=f(Pe).replace("(?:-->|$)","-->").getRegex(),Dn=f("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",_n).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),oe=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,zn=f(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",oe).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),Rt=f(/^!?\[(label)\]\[(ref)\]/).replace("label",oe).replace("ref",Ce).getRegex(),$t=f(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ce).getRegex(),Hn=f("reflink|nolink(?!\\()","g").replace("reflink",Rt).replace("nolink",$t).getRegex(),_e={_backpedal:K,anyPunctuation:Mn,autolink:In,blockSkip:Rn,br:xt,code:xn,del:K,emStrongLDelim:$n,emStrongRDelimAst:An,emStrongRDelimUnd:Pn,escape:yn,link:zn,nolink:$t,punctuation:En,reflink:Rt,reflinkSearch:Hn,tag:Dn,text:vn,url:K},Fn={..._e,link:f(/^!?\[(label)\]\((.*?)\)/).replace("label",oe).getRegex(),reflink:f(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",oe).getRegex()},ve={..._e,emStrongRDelimAst:Cn,emStrongLDelim:Ln,url:f(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},Bn={...ve,br:f(xt).replace("{2,}","*").getRegex(),text:f(ve.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},te={normal:Me,gfm:bn,pedantic:kn},X={normal:_e,gfm:ve,breaks:Bn,pedantic:Fn},qn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ve=e=>qn[e];function L(e,t){if(t){if(x.escapeTest.test(e))return e.replace(x.escapeReplace,Ve)}else if(x.escapeTestNoEncode.test(e))return e.replace(x.escapeReplaceNoEncode,Ve);return e}function Ze(e){try{e=encodeURI(e).replace(x.percentDecode,"%")}catch{return null}return e}function Xe(e,t){const n=e.replace(x.findPipe,(a,o,s)=>{let c=!1,l=o;for(;--l>=0&&s[l]==="\\";)c=!c;return c?"|":" |"}),r=n.split(x.splitPipe);let i=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;i<r.length;i++)r[i]=r[i].trim().replace(x.slashPipe,"|");return r}function Q(e,t,n){const r=e.length;if(r===0)return"";let i=0;for(;i<r&&e.charAt(r-i-1)===t;)i++;return e.slice(0,r-i)}function On(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Qe(e,t,n,r,i){const a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,"$1");r.state.inLink=!0;const c={type:e[0].charAt(0)==="!"?"image":"link",raw:n,href:a,title:o,text:s,tokens:r.inlineTokens(s)};return r.state.inLink=!1,c}function Gn(e,t,n){const r=e.match(n.other.indentCodeCompensation);if(r===null)return t;const i=r[1];return t.split(`
`).map(a=>{const o=a.match(n.other.beginningSpace);if(o===null)return a;const[s]=o;return s.length>=i.length?a.slice(i.length):a}).join(`
`)}var se=class{constructor(e){w(this,"options");w(this,"rules");w(this,"lexer");this.options=e||B}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const n=t[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Q(n,`
`)}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const n=t[0],r=Gn(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){const r=Q(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(n=r.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Q(t[0],`
`)}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){let n=Q(t[0],`
`).split(`
`),r="",i="";const a=[];for(;n.length>0;){let o=!1;const s=[];let c;for(c=0;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))s.push(n[c]),o=!0;else if(!o)s.push(n[c]);else break;n=n.slice(c);const l=s.join(`
`),u=l.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${l}`:l,i=i?`${i}
${u}`:u;const h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,a,!0),this.lexer.state.top=h,n.length===0)break;const d=a.at(-1);if(d?.type==="code")break;if(d?.type==="blockquote"){const p=d,g=p.raw+`
`+n.join(`
`),y=this.blockquote(g);a[a.length-1]=y,r=r.substring(0,r.length-p.raw.length)+y.raw,i=i.substring(0,i.length-p.text.length)+y.text;break}else if(d?.type==="list"){const p=d,g=p.raw+`
`+n.join(`
`),y=this.list(g);a[a.length-1]=y,r=r.substring(0,r.length-d.raw.length)+y.raw,i=i.substring(0,i.length-p.raw.length)+y.raw,n=g.substring(a.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:a,text:i}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim();const r=n.length>1,i={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");const a=this.rules.other.listItemRegex(n);let o=!1;for(;e;){let c=!1,l="",u="";if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;l=t[0],e=e.substring(l.length);let h=t[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,O=>" ".repeat(3*O.length)),d=e.split(`
`,1)[0],p=!h.trim(),g=0;if(this.options.pedantic?(g=2,u=h.trimStart()):p?g=t[1].length+1:(g=t[2].search(this.rules.other.nonSpaceChar),g=g>4?1:g,u=h.slice(g),g+=t[1].length),p&&this.rules.other.blankLine.test(d)&&(l+=d+`
`,e=e.substring(d.length+1),c=!0),!c){const O=this.rules.other.nextBulletRegex(g),G=this.rules.other.hrRegex(g),M=this.rules.other.fencesBeginRegex(g),Ge=this.rules.other.headingBeginRegex(g),Jt=this.rules.other.htmlBeginRegex(g);for(;e;){const ge=e.split(`
`,1)[0];let Z;if(d=ge,this.options.pedantic?(d=d.replace(this.rules.other.listReplaceNesting,"  "),Z=d):Z=d.replace(this.rules.other.tabCharGlobal,"    "),M.test(d)||Ge.test(d)||Jt.test(d)||O.test(d)||G.test(d))break;if(Z.search(this.rules.other.nonSpaceChar)>=g||!d.trim())u+=`
`+Z.slice(g);else{if(p||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||M.test(h)||Ge.test(h)||G.test(h))break;u+=`
`+d}!p&&!d.trim()&&(p=!0),l+=ge+`
`,e=e.substring(ge.length+1),h=Z.slice(g)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(l)&&(o=!0));let y=null,q;this.options.gfm&&(y=this.rules.other.listIsTask.exec(u),y&&(q=y[0]!=="[ ] ",u=u.replace(this.rules.other.listReplaceTask,""))),i.items.push({type:"list_item",raw:l,task:!!y,checked:q,loose:!1,text:u,tokens:[]}),i.raw+=l}const s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let c=0;c<i.items.length;c++)if(this.lexer.state.top=!1,i.items[c].tokens=this.lexer.blockTokens(i.items[c].text,[]),!i.loose){const l=i.items[c].tokens.filter(h=>h.type==="space"),u=l.length>0&&l.some(h=>this.rules.other.anyLine.test(h.raw));i.loose=u}if(i.loose)for(let c=0;c<i.items.length;c++)i.items[c].loose=!0;return i}}html(e){const t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){const t=this.rules.block.def.exec(e);if(t){const n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",i=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:r,title:i}}}table(e){const t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;const n=Xe(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],a={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===r.length){for(const o of r)this.rules.other.tableAlignRight.test(o)?a.align.push("right"):this.rules.other.tableAlignCenter.test(o)?a.align.push("center"):this.rules.other.tableAlignLeft.test(o)?a.align.push("left"):a.align.push(null);for(let o=0;o<n.length;o++)a.header.push({text:n[o],tokens:this.lexer.inline(n[o]),header:!0,align:a.align[o]});for(const o of i)a.rows.push(Xe(o,a.header.length).map((s,c)=>({text:s,tokens:this.lexer.inline(s),header:!1,align:a.align[c]})));return a}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){const t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const a=Q(n.slice(0,-1),"\\");if((n.length-a.length)%2===0)return}else{const a=On(t[2],"()");if(a===-2)return;if(a>-1){const s=(t[0].indexOf("!")===0?5:4)+t[1].length+a;t[2]=t[2].substring(0,a),t[0]=t[0].substring(0,s).trim(),t[3]=""}}let r=t[2],i="";if(this.options.pedantic){const a=this.rules.other.pedanticHrefTitle.exec(r);a&&(r=a[1],i=a[3])}else i=t[3]?t[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),Qe(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){const r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=t[r.toLowerCase()];if(!i){const a=n[0].charAt(0);return{type:"text",raw:a,text:a}}return Qe(n,i,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!r||r[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(r[1]||r[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const a=[...r[0]].length-1;let o,s,c=a,l=0;const u=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(u.lastIndex=0,t=t.slice(-1*e.length+a);(r=u.exec(t))!=null;){if(o=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!o)continue;if(s=[...o].length,r[3]||r[4]){c+=s;continue}else if((r[5]||r[6])&&a%3&&!((a+s)%3)){l+=s;continue}if(c-=s,c>0)continue;s=Math.min(s,s+c+l);const h=[...r[0]][0].length,d=e.slice(0,a+r.index+h+s);if(Math.min(a,s)%2){const g=d.slice(1,-1);return{type:"em",raw:d,text:g,tokens:this.lexer.inlineTokens(g)}}const p=d.slice(2,-2);return{type:"strong",raw:d,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," ");const r=this.rules.other.nonSpaceChar.test(n),i=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&i&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){const t=this.rules.inline.autolink.exec(e);if(t){let n,r;return t[2]==="@"?(n=t[1],r="mailto:"+n):(n=t[1],r=n),{type:"link",raw:t[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,r;if(t[2]==="@")n=t[0],r="mailto:"+n;else{let i;do i=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(i!==t[0]);n=t[0],t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){const t=this.rules.inline.text.exec(e);if(t){const n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},A=class Ee{constructor(t){w(this,"tokens");w(this,"options");w(this,"state");w(this,"tokenizer");w(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=t||B,this.options.tokenizer=this.options.tokenizer||new se,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:x,block:te.normal,inline:X.normal};this.options.pedantic?(n.block=te.pedantic,n.inline=X.pedantic):this.options.gfm&&(n.block=te.gfm,this.options.breaks?n.inline=X.breaks:n.inline=X.gfm),this.tokenizer.rules=n}static get rules(){return{block:te,inline:X}}static lex(t,n){return new Ee(n).lex(t)}static lexInline(t,n){return new Ee(n).inlineTokens(t)}lex(t){t=t.replace(x.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],r=!1){for(this.options.pedantic&&(t=t.replace(x.tabCharGlobal,"    ").replace(x.spaceLine,""));t;){let i;if(this.options.extensions?.block?.some(o=>(i=o.call({lexer:this},t,n))?(t=t.substring(i.raw.length),n.push(i),!0):!1))continue;if(i=this.tokenizer.space(t)){t=t.substring(i.raw.length);const o=n.at(-1);i.raw.length===1&&o!==void 0?o.raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(t)){t=t.substring(i.raw.length);const o=n.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.at(-1).src=o.text):n.push(i);continue}if(i=this.tokenizer.fences(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(t)){t=t.substring(i.raw.length);const o=n.at(-1);o?.type==="paragraph"||o?.type==="text"?(o.raw+=`
`+i.raw,o.text+=`
`+i.raw,this.inlineQueue.at(-1).src=o.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title});continue}if(i=this.tokenizer.table(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(t)){t=t.substring(i.raw.length),n.push(i);continue}let a=t;if(this.options.extensions?.startBlock){let o=1/0;const s=t.slice(1);let c;this.options.extensions.startBlock.forEach(l=>{c=l.call({lexer:this},s),typeof c=="number"&&c>=0&&(o=Math.min(o,c))}),o<1/0&&o>=0&&(a=t.substring(0,o+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){const o=n.at(-1);r&&o?.type==="paragraph"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):n.push(i),r=a.length!==t.length,t=t.substring(i.raw.length);continue}if(i=this.tokenizer.text(t)){t=t.substring(i.raw.length);const o=n.at(-1);o?.type==="text"?(o.raw+=`
`+i.raw,o.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=o.text):n.push(i);continue}if(t){const o="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(o);break}else throw new Error(o)}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}inlineTokens(t,n=[]){let r=t,i=null;if(this.tokens.links){const s=Object.keys(this.tokens.links);if(s.length>0)for(;(i=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)s.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(i=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,i.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(i=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,i.index)+"["+"a".repeat(i[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let a=!1,o="";for(;t;){a||(o=""),a=!1;let s;if(this.options.extensions?.inline?.some(l=>(s=l.call({lexer:this},t,n))?(t=t.substring(s.raw.length),n.push(s),!0):!1))continue;if(s=this.tokenizer.escape(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.tag(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.link(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(s.raw.length);const l=n.at(-1);s.type==="text"&&l?.type==="text"?(l.raw+=s.raw,l.text+=s.text):n.push(s);continue}if(s=this.tokenizer.emStrong(t,r,o)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.codespan(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.br(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.del(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.autolink(t)){t=t.substring(s.raw.length),n.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(t))){t=t.substring(s.raw.length),n.push(s);continue}let c=t;if(this.options.extensions?.startInline){let l=1/0;const u=t.slice(1);let h;this.options.extensions.startInline.forEach(d=>{h=d.call({lexer:this},u),typeof h=="number"&&h>=0&&(l=Math.min(l,h))}),l<1/0&&l>=0&&(c=t.substring(0,l+1))}if(s=this.tokenizer.inlineText(c)){t=t.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(o=s.raw.slice(-1)),a=!0;const l=n.at(-1);l?.type==="text"?(l.raw+=s.raw,l.text+=s.text):n.push(s);continue}if(t){const l="Infinite loop on byte: "+t.charCodeAt(0);if(this.options.silent){console.error(l);break}else throw new Error(l)}}return n}},le=class{constructor(e){w(this,"options");w(this,"parser");this.options=e||B}space(e){return""}code({text:e,lang:t,escaped:n}){const r=(t||"").match(x.notSpaceStart)?.[0],i=e.replace(x.endingNewline,"")+`
`;return r?'<pre><code class="language-'+L(r)+'">'+(n?i:L(i,!0))+`</code></pre>
`:"<pre><code>"+(n?i:L(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){const t=e.ordered,n=e.start;let r="";for(let o=0;o<e.items.length;o++){const s=e.items[o];r+=this.listitem(s)}const i=t?"ol":"ul",a=t&&n!==1?' start="'+n+'"':"";return"<"+i+a+`>
`+r+"</"+i+`>
`}listitem(e){let t="";if(e.task){const n=this.checkbox({checked:!!e.checked});e.loose?e.tokens[0]?.type==="paragraph"?(e.tokens[0].text=n+" "+e.tokens[0].text,e.tokens[0].tokens&&e.tokens[0].tokens.length>0&&e.tokens[0].tokens[0].type==="text"&&(e.tokens[0].tokens[0].text=n+" "+L(e.tokens[0].tokens[0].text),e.tokens[0].tokens[0].escaped=!0)):e.tokens.unshift({type:"text",raw:n+" ",text:n+" ",escaped:!0}):t+=n+" "}return t+=this.parser.parse(e.tokens,!!e.loose),`<li>${t}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let i=0;i<e.header.length;i++)n+=this.tablecell(e.header[i]);t+=this.tablerow({text:n});let r="";for(let i=0;i<e.rows.length;i++){const a=e.rows[i];n="";for(let o=0;o<a.length;o++)n+=this.tablecell(a[o]);r+=this.tablerow({text:n})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){const t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${L(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,tokens:n}){const r=this.parser.parseInline(n),i=Ze(e);if(i===null)return r;e=i;let a='<a href="'+e+'"';return t&&(a+=' title="'+L(t)+'"'),a+=">"+r+"</a>",a}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));const i=Ze(e);if(i===null)return L(n);e=i;let a=`<img src="${e}" alt="${n}"`;return t&&(a+=` title="${L(t)}"`),a+=">",a}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:L(e.text)}},De=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}},C=class Se{constructor(t){w(this,"options");w(this,"renderer");w(this,"textRenderer");this.options=t||B,this.options.renderer=this.options.renderer||new le,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new De}static parse(t,n){return new Se(n).parse(t)}static parseInline(t,n){return new Se(n).parseInline(t)}parse(t,n=!0){let r="";for(let i=0;i<t.length;i++){const a=t[i];if(this.options.extensions?.renderers?.[a.type]){const s=a,c=this.options.extensions.renderers[s.type].call({parser:this},s);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(s.type)){r+=c||"";continue}}const o=a;switch(o.type){case"space":{r+=this.renderer.space(o);continue}case"hr":{r+=this.renderer.hr(o);continue}case"heading":{r+=this.renderer.heading(o);continue}case"code":{r+=this.renderer.code(o);continue}case"table":{r+=this.renderer.table(o);continue}case"blockquote":{r+=this.renderer.blockquote(o);continue}case"list":{r+=this.renderer.list(o);continue}case"html":{r+=this.renderer.html(o);continue}case"paragraph":{r+=this.renderer.paragraph(o);continue}case"text":{let s=o,c=this.renderer.text(s);for(;i+1<t.length&&t[i+1].type==="text";)s=t[++i],c+=`
`+this.renderer.text(s);n?r+=this.renderer.paragraph({type:"paragraph",raw:c,text:c,tokens:[{type:"text",raw:c,text:c,escaped:!0}]}):r+=c;continue}default:{const s='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return r}parseInline(t,n=this.renderer){let r="";for(let i=0;i<t.length;i++){const a=t[i];if(this.options.extensions?.renderers?.[a.type]){const s=this.options.extensions.renderers[a.type].call({parser:this},a);if(s!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(a.type)){r+=s||"";continue}}const o=a;switch(o.type){case"escape":{r+=n.text(o);break}case"html":{r+=n.html(o);break}case"link":{r+=n.link(o);break}case"image":{r+=n.image(o);break}case"strong":{r+=n.strong(o);break}case"em":{r+=n.em(o);break}case"codespan":{r+=n.codespan(o);break}case"br":{r+=n.br(o);break}case"del":{r+=n.del(o);break}case"text":{r+=n.text(o);break}default:{const s='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return r}},xe,re=(xe=class{constructor(e){w(this,"options");w(this,"block");this.options=e||B}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}provideLexer(){return this.block?A.lex:A.lexInline}provideParser(){return this.block?C.parse:C.parseInline}},w(xe,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),xe),Lt=class{constructor(...e){w(this,"defaults",$e());w(this,"options",this.setOptions);w(this,"parse",this.parseMarkdown(!0));w(this,"parseInline",this.parseMarkdown(!1));w(this,"Parser",C);w(this,"Renderer",le);w(this,"TextRenderer",De);w(this,"Lexer",A);w(this,"Tokenizer",se);w(this,"Hooks",re);this.use(...e)}walkTokens(e,t){let n=[];for(const r of e)switch(n=n.concat(t.call(this,r)),r.type){case"table":{const i=r;for(const a of i.header)n=n.concat(this.walkTokens(a.tokens,t));for(const a of i.rows)for(const o of a)n=n.concat(this.walkTokens(o.tokens,t));break}case"list":{const i=r;n=n.concat(this.walkTokens(i.items,t));break}default:{const i=r;this.defaults.extensions?.childTokens?.[i.type]?this.defaults.extensions.childTokens[i.type].forEach(a=>{const o=i[a].flat(1/0);n=n.concat(this.walkTokens(o,t))}):i.tokens&&(n=n.concat(this.walkTokens(i.tokens,t)))}}return n}use(...e){const t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{const r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(i=>{if(!i.name)throw new Error("extension name required");if("renderer"in i){const a=t.renderers[i.name];a?t.renderers[i.name]=function(...o){let s=i.renderer.apply(this,o);return s===!1&&(s=a.apply(this,o)),s}:t.renderers[i.name]=i.renderer}if("tokenizer"in i){if(!i.level||i.level!=="block"&&i.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const a=t[i.level];a?a.unshift(i.tokenizer):t[i.level]=[i.tokenizer],i.start&&(i.level==="block"?t.startBlock?t.startBlock.push(i.start):t.startBlock=[i.start]:i.level==="inline"&&(t.startInline?t.startInline.push(i.start):t.startInline=[i.start]))}"childTokens"in i&&i.childTokens&&(t.childTokens[i.name]=i.childTokens)}),r.extensions=t),n.renderer){const i=this.defaults.renderer||new le(this.defaults);for(const a in n.renderer){if(!(a in i))throw new Error(`renderer '${a}' does not exist`);if(["options","parser"].includes(a))continue;const o=a,s=n.renderer[o],c=i[o];i[o]=(...l)=>{let u=s.apply(i,l);return u===!1&&(u=c.apply(i,l)),u||""}}r.renderer=i}if(n.tokenizer){const i=this.defaults.tokenizer||new se(this.defaults);for(const a in n.tokenizer){if(!(a in i))throw new Error(`tokenizer '${a}' does not exist`);if(["options","rules","lexer"].includes(a))continue;const o=a,s=n.tokenizer[o],c=i[o];i[o]=(...l)=>{let u=s.apply(i,l);return u===!1&&(u=c.apply(i,l)),u}}r.tokenizer=i}if(n.hooks){const i=this.defaults.hooks||new re;for(const a in n.hooks){if(!(a in i))throw new Error(`hook '${a}' does not exist`);if(["options","block"].includes(a))continue;const o=a,s=n.hooks[o],c=i[o];re.passThroughHooks.has(a)?i[o]=l=>{if(this.defaults.async)return Promise.resolve(s.call(i,l)).then(h=>c.call(i,h));const u=s.call(i,l);return c.call(i,u)}:i[o]=(...l)=>{let u=s.apply(i,l);return u===!1&&(u=c.apply(i,l)),u}}r.hooks=i}if(n.walkTokens){const i=this.defaults.walkTokens,a=n.walkTokens;r.walkTokens=function(o){let s=[];return s.push(a.call(this,o)),i&&(s=s.concat(i.call(this,o))),s}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return A.lex(e,t??this.defaults)}parser(e,t){return C.parse(e,t??this.defaults)}parseMarkdown(e){return(n,r)=>{const i={...r},a={...this.defaults,...i},o=this.onError(!!a.silent,!!a.async);if(this.defaults.async===!0&&i.async===!1)return o(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return o(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return o(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));a.hooks&&(a.hooks.options=a,a.hooks.block=e);const s=a.hooks?a.hooks.provideLexer():e?A.lex:A.lexInline,c=a.hooks?a.hooks.provideParser():e?C.parse:C.parseInline;if(a.async)return Promise.resolve(a.hooks?a.hooks.preprocess(n):n).then(l=>s(l,a)).then(l=>a.hooks?a.hooks.processAllTokens(l):l).then(l=>a.walkTokens?Promise.all(this.walkTokens(l,a.walkTokens)).then(()=>l):l).then(l=>c(l,a)).then(l=>a.hooks?a.hooks.postprocess(l):l).catch(o);try{a.hooks&&(n=a.hooks.preprocess(n));let l=s(n,a);a.hooks&&(l=a.hooks.processAllTokens(l)),a.walkTokens&&this.walkTokens(l,a.walkTokens);let u=c(l,a);return a.hooks&&(u=a.hooks.postprocess(u)),u}catch(l){return o(l)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){const r="<p>An error occurred:</p><pre>"+L(n.message+"",!0)+"</pre>";return t?Promise.resolve(r):r}if(t)return Promise.reject(n);throw n}}},z=new Lt;function m(e,t){return z.parse(e,t)}m.options=m.setOptions=function(e){return z.setOptions(e),m.defaults=z.defaults,wt(m.defaults),m};m.getDefaults=$e;m.defaults=B;m.use=function(...e){return z.use(...e),m.defaults=z.defaults,wt(m.defaults),m};m.walkTokens=function(e,t){return z.walkTokens(e,t)};m.parseInline=z.parseInline;m.Parser=C;m.parser=C.parse;m.Renderer=le;m.TextRenderer=De;m.Lexer=A;m.lexer=A.lex;m.Tokenizer=se;m.Hooks=re;m.parse=m;m.options;m.setOptions;m.use;m.walkTokens;m.parseInline;C.parse;A.lex;function Nn(e){if(typeof e=="function"&&(e={highlight:e}),!e||typeof e.highlight!="function")throw new Error("Must provide highlight function");return typeof e.langPrefix!="string"&&(e.langPrefix="language-"),typeof e.emptyLangClass!="string"&&(e.emptyLangClass=""),{async:!!e.async,walkTokens(t){if(t.type!=="code")return;const n=Ke(t.lang);if(e.async)return Promise.resolve(e.highlight(t.text,n,t.lang||"")).then(Je(t));const r=e.highlight(t.text,n,t.lang||"");if(r instanceof Promise)throw new Error("markedHighlight is not set to async but the highlight function is async. Set the async option to true on markedHighlight to await the async highlight function.");Je(t)(r)},useNewRenderer:!0,renderer:{code(t,n,r){typeof t=="object"&&(r=t.escaped,n=t.lang,t=t.text);const i=Ke(n),a=i?e.langPrefix+et(i):e.emptyLangClass,o=a?` class="${a}"`:"";return t=t.replace(/\n$/,""),`<pre><code${o}>${r?t:et(t,!0)}
</code></pre>`}}}}function Ke(e){return(e||"").match(/\S*/)[0]}function Je(e){return t=>{typeof t=="string"&&t!==e.text&&(e.escaped=!0,e.text=t)}}const At=/[&<>"']/,Un=new RegExp(At.source,"g"),Ct=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Wn=new RegExp(Ct.source,"g"),jn={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ye=e=>jn[e];function et(e,t){if(t){if(At.test(e))return e.replace(Un,Ye)}else if(Ct.test(e))return e.replace(Wn,Ye);return e}const Pt=new Lt(Nn({langPrefix:"hljs language-",highlight(e,t){if(t&&me.getLanguage(t))try{return me.highlight(e,{language:t}).value}catch{}try{return me.highlightAuto(e).value}catch{}return e}}));Pt.setOptions({gfm:!0,breaks:!1,pedantic:!1});function Vn(e){return Pt.parse(e)}function Zn(e,t=!0){try{return Vn(e)}catch{return'<p style="color:red">Markdown 解析错误</p>'}}const Xn="modulepreload",Qn=function(e){return"/"+e},tt={},Kn=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){let o=function(l){return Promise.all(l.map(u=>Promise.resolve(u).then(h=>({status:"fulfilled",value:h}),h=>({status:"rejected",reason:h}))))};document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=s?.nonce||s?.getAttribute("nonce");i=o(n.map(l=>{if(l=Qn(l),l in tt)return;tt[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":Xn,u||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((p,g)=>{d.addEventListener("load",p),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function a(o){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o}return i.then(o=>{for(const s of o||[])s.status==="rejected"&&a(s.reason);return t().catch(a)})};async function Jn(e){const t=await Kn(()=>import("./katex-HP8lGamR.js"),[]),n=e.querySelectorAll('[data-math="block"]');for(const i of n)try{const a=i.getAttribute("data-latex")||i.textContent||"",o=t.renderToString(a,{displayMode:!0,throwOnError:!1,strict:!1});i.innerHTML=o,i.classList.add("katex-rendered")}catch{i.classList.add("math-error")}const r=e.querySelectorAll('[data-math="inline"]');for(const i of r)try{const a=i.getAttribute("data-latex")||i.textContent||"",o=t.renderToString(a,{displayMode:!1,throwOnError:!1,strict:!1});i.innerHTML=o,i.classList.add("katex-rendered")}catch{i.classList.add("math-error")}}function Yn(e){let t=e.replace(/\$\$([\s\S]*?)\$\$/g,(n,r)=>{const i=r.trim().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return`<div data-math="block" data-latex="${i.replace(/"/g,"&quot;")}">${i}</div>`});return t=t.replace(/(?<!\$)\$(?!\$)([^\$\n]+?)\$(?!\$)/g,(n,r)=>{const i=r.trim().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return`<span data-math="inline" data-latex="${i.replace(/"/g,"&quot;")}">${i}</span>`}),t}const er="https://cdn.jsdelivr.net/npm/katex@0.16.21/dist/katex.min.css",tr="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.11.1/styles/github.min.css",ze=`
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
`,nr=`
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
`;function nt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function rr(){return Array.from(document.head.querySelectorAll('style, link[rel="stylesheet"]')).map(t=>t.outerHTML).join(`
`)}async function ir(e){const t=Array.from(e.querySelectorAll('link[rel="stylesheet"]'));await Promise.all(t.map(n=>n.sheet?Promise.resolve():new Promise(r=>{n.addEventListener("load",()=>r(),{once:!0}),n.addEventListener("error",()=>r(),{once:!0})})))}async function ar(e){const t=Array.from(e.images);await Promise.all(t.map(n=>n.complete?Promise.resolve():new Promise(r=>{n.addEventListener("load",()=>r(),{once:!0}),n.addEventListener("error",()=>r(),{once:!0})})))}async function or(e){if(await ir(e),"fonts"in e)try{await e.fonts.ready}catch{}await ar(e),await new Promise(t=>{requestAnimationFrame(()=>requestAnimationFrame(()=>t()))})}function rt(e){e.parentNode&&e.parentNode.removeChild(e)}async function sr(e,t="document"){const n=document.createElement("iframe");n.setAttribute("aria-hidden","true"),n.style.position="fixed",n.style.right="0",n.style.bottom="0",n.style.width="0",n.style.height="0",n.style.border="0",n.style.opacity="0",n.style.pointerEvents="none",document.body.appendChild(n);const r=n.contentWindow,i=n.contentDocument;if(!r||!i)throw rt(n),new Error("Print frame is unavailable");const a=nt(t),o=nt(window.location.href),s=rr(),c=`
    <!DOCTYPE html>
    <html lang="zh-CN">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${a}</title>
        <base href="${o}" />
        ${s}
        <style>${ze}</style>
        <style>${nr}</style>
      </head>
      <body>
        <main class="pdf-export-root">
          <article class="markdown-body pdf-preview">${e.innerHTML}</article>
        </main>
      </body>
    </html>
  `;i.open(),i.write(c),i.close(),await or(i);const l=()=>window.setTimeout(()=>rt(n),1e3);r.addEventListener("afterprint",l,{once:!0}),window.setTimeout(l,6e4),r.focus(),r.print()}var ie={exports:{}},lr=ie.exports,it;function cr(){return it||(it=1,(function(e,t){(function(n,r){r()})(lr,function(){function n(l,u){return typeof u>"u"?u={autoBom:!1}:typeof u!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),u={autoBom:!u}),u.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(l.type)?new Blob(["\uFEFF",l],{type:l.type}):l}function r(l,u,h){var d=new XMLHttpRequest;d.open("GET",l),d.responseType="blob",d.onload=function(){c(d.response,u,h)},d.onerror=function(){console.error("could not download file")},d.send()}function i(l){var u=new XMLHttpRequest;u.open("HEAD",l,!1);try{u.send()}catch{}return 200<=u.status&&299>=u.status}function a(l){try{l.dispatchEvent(new MouseEvent("click"))}catch{var u=document.createEvent("MouseEvents");u.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),l.dispatchEvent(u)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof ee=="object"&&ee.global===ee?ee:void 0,s=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!s?function(l,u,h){var d=o.URL||o.webkitURL,p=document.createElement("a");u=u||l.name||"download",p.download=u,p.rel="noopener",typeof l=="string"?(p.href=l,p.origin===location.origin?a(p):i(p.href)?r(l,u,h):a(p,p.target="_blank")):(p.href=d.createObjectURL(l),setTimeout(function(){d.revokeObjectURL(p.href)},4e4),setTimeout(function(){a(p)},0))}:"msSaveOrOpenBlob"in navigator?function(l,u,h){if(u=u||l.name||"download",typeof l!="string")navigator.msSaveOrOpenBlob(n(l,h),u);else if(i(l))r(l,u,h);else{var d=document.createElement("a");d.href=l,d.target="_blank",setTimeout(function(){a(d)})}}:function(l,u,h,d){if(d=d||open("","_blank"),d&&(d.document.title=d.document.body.innerText="downloading..."),typeof l=="string")return r(l,u,h);var p=l.type==="application/octet-stream",g=/constructor/i.test(o.HTMLElement)||o.safari,y=/CriOS\/[\d]+/.test(navigator.userAgent);if((y||p&&g||s)&&typeof FileReader<"u"){var q=new FileReader;q.onloadend=function(){var M=q.result;M=y?M:M.replace(/^data:[^;]*;/,"data:attachment/file;"),d?d.location.href=M:location=M,d=null},q.readAsDataURL(l)}else{var O=o.URL||o.webkitURL,G=O.createObjectURL(l);d?d.location=G:location.href=G,d=null,setTimeout(function(){O.revokeObjectURL(G)},4e4)}});o.saveAs=c.saveAs=c,e.exports=c})})(ie)),ie.exports}var He=cr();const ur=/[<>:"/\\|?*\u0000-\u001F]/g,dr=/[. ]+$/g,hr=/^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i;function Fe(e,t="document"){const i=e.trim().replace(ur,"_").replace(dr,"")||t;return hr.test(i)?`${i}_file`:i}function pr(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function fr(e,t="document",n=!0){const r=pr(t),i=Fe(t),a=`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${r}</title>
  <link rel="stylesheet" href="${tr}" />
  <link rel="stylesheet" href="${er}" />
  <style>${n?ze:""}</style>
</head>
<body>
  <main class="markdown-body">
    ${e}
  </main>
</body>
</html>`,o=new Blob([a],{type:"text/html;charset=utf-8"});He.saveAs(o,`${i}.html`)}function gr(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i))return e;const n=document.implementation.createHTMLDocument(),r=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(r),n.body.appendChild(i),t&&(r.href=t),i.href=e,i.href}const mr=(()=>{let e=0;const t=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(e+=1,`u${t()}${e}`)})();function _(e){const t=[];for(let n=0,r=e.length;n<r;n++)t.push(e[n]);return t}let N=null;function Mt(e={}){return N||(e.includeStyleProperties?(N=e.includeStyleProperties,N):(N=_(window.getComputedStyle(document.documentElement)),N))}function ce(e,t){const r=(e.ownerDocument.defaultView||window).getComputedStyle(e).getPropertyValue(t);return r?parseFloat(r.replace("px","")):0}function wr(e){const t=ce(e,"border-left-width"),n=ce(e,"border-right-width");return e.clientWidth+t+n}function br(e){const t=ce(e,"border-top-width"),n=ce(e,"border-bottom-width");return e.clientHeight+t+n}function It(e,t={}){const n=t.width||wr(e),r=t.height||br(e);return{width:n,height:r}}function kr(){let e,t;try{t=process}catch{}const n=t&&t.env?t.env.devicePixelRatio:null;return n&&(e=parseInt(n,10),Number.isNaN(e)&&(e=1)),e||window.devicePixelRatio||1}const S=16384;function yr(e){(e.width>S||e.height>S)&&(e.width>S&&e.height>S?e.width>e.height?(e.height*=S/e.width,e.width=S):(e.width*=S/e.height,e.height=S):e.width>S?(e.height*=S/e.width,e.width=S):(e.width*=S/e.height,e.height=S))}function ue(e){return new Promise((t,n)=>{const r=new Image;r.onload=()=>{r.decode().then(()=>{requestAnimationFrame(()=>t(r))})},r.onerror=n,r.crossOrigin="anonymous",r.decoding="async",r.src=e})}async function xr(e){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then(t=>`data:image/svg+xml;charset=utf-8,${t}`)}async function vr(e,t,n){const r="http://www.w3.org/2000/svg",i=document.createElementNS(r,"svg"),a=document.createElementNS(r,"foreignObject");return i.setAttribute("width",`${t}`),i.setAttribute("height",`${n}`),i.setAttribute("viewBox",`0 0 ${t} ${n}`),a.setAttribute("width","100%"),a.setAttribute("height","100%"),a.setAttribute("x","0"),a.setAttribute("y","0"),a.setAttribute("externalResourcesRequired","true"),i.appendChild(a),a.appendChild(e),xr(i)}const E=(e,t)=>{if(e instanceof t)return!0;const n=Object.getPrototypeOf(e);return n===null?!1:n.constructor.name===t.name||E(n,t)};function Er(e){const t=e.getPropertyValue("content");return`${e.cssText} content: '${t.replace(/'|"/g,"")}';`}function Sr(e,t){return Mt(t).map(n=>{const r=e.getPropertyValue(n),i=e.getPropertyPriority(n);return`${n}: ${r}${i?" !important":""};`}).join(" ")}function Tr(e,t,n,r){const i=`.${e}:${t}`,a=n.cssText?Er(n):Sr(n,r);return document.createTextNode(`${i}{${a}}`)}function at(e,t,n,r){const i=window.getComputedStyle(e,n),a=i.getPropertyValue("content");if(a===""||a==="none")return;const o=mr();try{t.className=`${t.className} ${o}`}catch{return}const s=document.createElement("style");s.appendChild(Tr(o,n,i,r)),t.appendChild(s)}function Rr(e,t,n){at(e,t,":before",n),at(e,t,":after",n)}const ot="application/font-woff",st="image/jpeg",$r={woff:ot,woff2:ot,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:st,jpeg:st,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function Lr(e){const t=/\.([^./]*?)$/g.exec(e);return t?t[1]:""}function Be(e){const t=Lr(e).toLowerCase();return $r[t]||""}function Ar(e){return e.split(/,/)[1]}function Te(e){return e.search(/^(data:)/)!==-1}function Cr(e,t){return`data:${t};base64,${e}`}async function _t(e,t,n){const r=await fetch(e,t);if(r.status===404)throw new Error(`Resource "${r.url}" not found`);const i=await r.blob();return new Promise((a,o)=>{const s=new FileReader;s.onerror=o,s.onloadend=()=>{try{a(n({res:r,result:s.result}))}catch(c){o(c)}},s.readAsDataURL(i)})}const be={};function Pr(e,t,n){let r=e.replace(/\?.*/,"");return n&&(r=e),/ttf|otf|eot|woff2?/i.test(r)&&(r=r.replace(/.*\//,"")),t?`[${t}]${r}`:r}async function qe(e,t,n){const r=Pr(e,t,n.includeQueryParams);if(be[r]!=null)return be[r];n.cacheBust&&(e+=(/\?/.test(e)?"&":"?")+new Date().getTime());let i;try{const a=await _t(e,n.fetchRequestInit,({res:o,result:s})=>(t||(t=o.headers.get("Content-Type")||""),Ar(s)));i=Cr(a,t)}catch(a){i=n.imagePlaceholder||"";let o=`Failed to fetch resource: ${e}`;a&&(o=typeof a=="string"?a:a.message),o&&console.warn(o)}return be[r]=i,i}async function Mr(e){const t=e.toDataURL();return t==="data:,"?e.cloneNode(!1):ue(t)}async function Ir(e,t){if(e.currentSrc){const a=document.createElement("canvas"),o=a.getContext("2d");a.width=e.clientWidth,a.height=e.clientHeight,o?.drawImage(e,0,0,a.width,a.height);const s=a.toDataURL();return ue(s)}const n=e.poster,r=Be(n),i=await qe(n,r,t);return ue(i)}async function _r(e,t){var n;try{if(!((n=e?.contentDocument)===null||n===void 0)&&n.body)return await pe(e.contentDocument.body,t,!0)}catch{}return e.cloneNode(!1)}async function Dr(e,t){return E(e,HTMLCanvasElement)?Mr(e):E(e,HTMLVideoElement)?Ir(e,t):E(e,HTMLIFrameElement)?_r(e,t):e.cloneNode(Dt(e))}const zr=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SLOT",Dt=e=>e.tagName!=null&&e.tagName.toUpperCase()==="SVG";async function Hr(e,t,n){var r,i;if(Dt(t))return t;let a=[];return zr(e)&&e.assignedNodes?a=_(e.assignedNodes()):E(e,HTMLIFrameElement)&&(!((r=e.contentDocument)===null||r===void 0)&&r.body)?a=_(e.contentDocument.body.childNodes):a=_(((i=e.shadowRoot)!==null&&i!==void 0?i:e).childNodes),a.length===0||E(e,HTMLVideoElement)||await a.reduce((o,s)=>o.then(()=>pe(s,n)).then(c=>{c&&t.appendChild(c)}),Promise.resolve()),t}function Fr(e,t,n){const r=t.style;if(!r)return;const i=window.getComputedStyle(e);i.cssText?(r.cssText=i.cssText,r.transformOrigin=i.transformOrigin):Mt(n).forEach(a=>{let o=i.getPropertyValue(a);a==="font-size"&&o.endsWith("px")&&(o=`${Math.floor(parseFloat(o.substring(0,o.length-2)))-.1}px`),E(e,HTMLIFrameElement)&&a==="display"&&o==="inline"&&(o="block"),a==="d"&&t.getAttribute("d")&&(o=`path(${t.getAttribute("d")})`),r.setProperty(a,o,i.getPropertyPriority(a))})}function Br(e,t){E(e,HTMLTextAreaElement)&&(t.innerHTML=e.value),E(e,HTMLInputElement)&&t.setAttribute("value",e.value)}function qr(e,t){if(E(e,HTMLSelectElement)){const r=Array.from(t.children).find(i=>e.value===i.getAttribute("value"));r&&r.setAttribute("selected","")}}function Or(e,t,n){return E(t,Element)&&(Fr(e,t,n),Rr(e,t,n),Br(e,t),qr(e,t)),t}async function Gr(e,t){const n=e.querySelectorAll?e.querySelectorAll("use"):[];if(n.length===0)return e;const r={};for(let a=0;a<n.length;a++){const s=n[a].getAttribute("xlink:href");if(s){const c=e.querySelector(s),l=document.querySelector(s);!c&&l&&!r[s]&&(r[s]=await pe(l,t,!0))}}const i=Object.values(r);if(i.length){const a="http://www.w3.org/1999/xhtml",o=document.createElementNS(a,"svg");o.setAttribute("xmlns",a),o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.overflow="hidden",o.style.display="none";const s=document.createElementNS(a,"defs");o.appendChild(s);for(let c=0;c<i.length;c++)s.appendChild(i[c]);e.appendChild(o)}return e}async function pe(e,t,n){return!n&&t.filter&&!t.filter(e)?null:Promise.resolve(e).then(r=>Dr(r,t)).then(r=>Hr(e,r,t)).then(r=>Or(e,r,t)).then(r=>Gr(r,t))}const zt=/url\((['"]?)([^'"]+?)\1\)/g,Nr=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,Ur=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Wr(e){const t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}function jr(e){const t=[];return e.replace(zt,(n,r,i)=>(t.push(i),n)),t.filter(n=>!Te(n))}async function Vr(e,t,n,r,i){try{const a=n?gr(t,n):t,o=Be(t);let s;return i||(s=await qe(a,o,r)),e.replace(Wr(t),`$1${s}$3`)}catch{}return e}function Zr(e,{preferredFontFormat:t}){return t?e.replace(Ur,n=>{for(;;){const[r,,i]=Nr.exec(n)||[];if(!i)return"";if(i===t)return`src: ${r};`}}):e}function Ht(e){return e.search(zt)!==-1}async function Ft(e,t,n){if(!Ht(e))return e;const r=Zr(e,n);return jr(r).reduce((a,o)=>a.then(s=>Vr(s,o,t,n)),Promise.resolve(r))}async function U(e,t,n){var r;const i=(r=t.style)===null||r===void 0?void 0:r.getPropertyValue(e);if(i){const a=await Ft(i,null,n);return t.style.setProperty(e,a,t.style.getPropertyPriority(e)),!0}return!1}async function Xr(e,t){await U("background",e,t)||await U("background-image",e,t),await U("mask",e,t)||await U("-webkit-mask",e,t)||await U("mask-image",e,t)||await U("-webkit-mask-image",e,t)}async function Qr(e,t){const n=E(e,HTMLImageElement);if(!(n&&!Te(e.src))&&!(E(e,SVGImageElement)&&!Te(e.href.baseVal)))return;const r=n?e.src:e.href.baseVal,i=await qe(r,Be(r),t);await new Promise((a,o)=>{e.onload=a,e.onerror=t.onImageErrorHandler?(...c)=>{try{a(t.onImageErrorHandler(...c))}catch(l){o(l)}}:o;const s=e;s.decode&&(s.decode=a),s.loading==="lazy"&&(s.loading="eager"),n?(e.srcset="",e.src=i):e.href.baseVal=i})}async function Kr(e,t){const r=_(e.childNodes).map(i=>Bt(i,t));await Promise.all(r).then(()=>e)}async function Bt(e,t){E(e,Element)&&(await Xr(e,t),await Qr(e,t),await Kr(e,t))}function Jr(e,t){const{style:n}=e;t.backgroundColor&&(n.backgroundColor=t.backgroundColor),t.width&&(n.width=`${t.width}px`),t.height&&(n.height=`${t.height}px`);const r=t.style;return r!=null&&Object.keys(r).forEach(i=>{n[i]=r[i]}),e}const lt={};async function ct(e){let t=lt[e];if(t!=null)return t;const r=await(await fetch(e)).text();return t={url:e,cssText:r},lt[e]=t,t}async function ut(e,t){let n=e.cssText;const r=/url\(["']?([^"')]+)["']?\)/g,a=(n.match(/url\([^)]+\)/g)||[]).map(async o=>{let s=o.replace(r,"$1");return s.startsWith("https://")||(s=new URL(s,e.url).href),_t(s,t.fetchRequestInit,({result:c})=>(n=n.replace(o,`url(${c})`),[o,c]))});return Promise.all(a).then(()=>n)}function dt(e){if(e==null)return[];const t=[],n=/(\/\*[\s\S]*?\*\/)/gi;let r=e.replace(n,"");const i=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const c=i.exec(r);if(c===null)break;t.push(c[0])}r=r.replace(i,"");const a=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,o="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",s=new RegExp(o,"gi");for(;;){let c=a.exec(r);if(c===null){if(c=s.exec(r),c===null)break;a.lastIndex=s.lastIndex}else s.lastIndex=a.lastIndex;t.push(c[0])}return t}async function Yr(e,t){const n=[],r=[];return e.forEach(i=>{if("cssRules"in i)try{_(i.cssRules||[]).forEach((a,o)=>{if(a.type===CSSRule.IMPORT_RULE){let s=o+1;const c=a.href,l=ct(c).then(u=>ut(u,t)).then(u=>dt(u).forEach(h=>{try{i.insertRule(h,h.startsWith("@import")?s+=1:i.cssRules.length)}catch(d){console.error("Error inserting rule from remote css",{rule:h,error:d})}})).catch(u=>{console.error("Error loading remote css",u.toString())});r.push(l)}})}catch(a){const o=e.find(s=>s.href==null)||document.styleSheets[0];i.href!=null&&r.push(ct(i.href).then(s=>ut(s,t)).then(s=>dt(s).forEach(c=>{o.insertRule(c,o.cssRules.length)})).catch(s=>{console.error("Error loading remote stylesheet",s)})),console.error("Error inlining remote css file",a)}}),Promise.all(r).then(()=>(e.forEach(i=>{if("cssRules"in i)try{_(i.cssRules||[]).forEach(a=>{n.push(a)})}catch(a){console.error(`Error while reading CSS rules from ${i.href}`,a)}}),n))}function ei(e){return e.filter(t=>t.type===CSSRule.FONT_FACE_RULE).filter(t=>Ht(t.style.getPropertyValue("src")))}async function ti(e,t){if(e.ownerDocument==null)throw new Error("Provided element is not within a Document");const n=_(e.ownerDocument.styleSheets),r=await Yr(n,t);return ei(r)}function qt(e){return e.trim().replace(/["']/g,"")}function ni(e){const t=new Set;function n(r){(r.style.fontFamily||getComputedStyle(r).fontFamily).split(",").forEach(a=>{t.add(qt(a))}),Array.from(r.children).forEach(a=>{a instanceof HTMLElement&&n(a)})}return n(e),t}async function ri(e,t){const n=await ti(e,t),r=ni(e);return(await Promise.all(n.filter(a=>r.has(qt(a.style.fontFamily))).map(a=>{const o=a.parentStyleSheet?a.parentStyleSheet.href:null;return Ft(a.cssText,o,t)}))).join(`
`)}async function ii(e,t){const n=t.fontEmbedCSS!=null?t.fontEmbedCSS:t.skipFonts?null:await ri(e,t);if(n){const r=document.createElement("style"),i=document.createTextNode(n);r.appendChild(i),e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r)}}async function Ot(e,t={}){const{width:n,height:r}=It(e,t),i=await pe(e,t,!0);return await ii(i,t),await Bt(i,t),Jr(i,t),await vr(i,n,r)}async function Gt(e,t={}){const{width:n,height:r}=It(e,t),i=await Ot(e,t),a=await ue(i),o=document.createElement("canvas"),s=o.getContext("2d"),c=t.pixelRatio||kr(),l=t.canvasWidth||n,u=t.canvasHeight||r;return o.width=l*c,o.height=u*c,t.skipAutoScale||yr(o),o.style.width=`${l}`,o.style.height=`${u}`,t.backgroundColor&&(s.fillStyle=t.backgroundColor,s.fillRect(0,0,o.width,o.height)),s.drawImage(a,0,0,o.width,o.height),o}async function ht(e,t={}){return(await Gt(e,t)).toDataURL()}async function ai(e,t={}){return(await Gt(e,t)).toDataURL("image/jpeg",t.quality||1)}function oi(e,{width:t,backgroundColor:n="#ffffff",className:r}){const i=document.createElement("div");i.style.position="fixed",i.style.left="-100000px",i.style.top="0",i.style.width=`${t}px`,i.style.padding="0",i.style.margin="0",i.style.background=n,i.style.opacity="0",i.style.pointerEvents="none",i.style.zIndex="-1";const a=document.createElement("style");a.textContent=`
    ${ze}
    .markdown-body.${r} {
      max-width: none;
      width: ${t}px;
      margin: 0;
      background: ${n};
    }
  `;const o=document.createElement("article");return o.className=`markdown-body ${r}`,o.innerHTML=e,i.appendChild(a),i.appendChild(o),document.body.appendChild(i),i}async function si(e){if("fonts"in document)try{await document.fonts.ready}catch{}const t=Array.from(e.querySelectorAll("img"));await Promise.all(t.map(n=>n.complete?Promise.resolve():new Promise(r=>{n.addEventListener("load",()=>r(),{once:!0}),n.addEventListener("error",()=>r(),{once:!0})}))),await new Promise(n=>{requestAnimationFrame(()=>requestAnimationFrame(()=>n()))})}function li(e){e.parentNode&&e.parentNode.removeChild(e)}const pt=16384;function ci(e,t,n){if(e<=0||t<=0)return 1;const r=pt/e,i=pt/t,a=Math.max(Math.min(r,i,n),.1);return Math.min(n,a)}function ke(e,t){if(t==="image/svg+xml"){const o=decodeURIComponent(e.replace("data:image/svg+xml;charset=utf-8,",""));return new Blob([o],{type:"image/svg+xml"})}const n=e.split(","),r=n[0].match(/:(.*?);/)?.[1]||"image/png",i=atob(n[1]),a=new Uint8Array(i.length);for(let o=0;o<i.length;o++)a[o]=i.charCodeAt(o);return new Blob([a],{type:r})}async function ui(e){return new Promise((t,n)=>{const r=new Image;r.onload=()=>{const i=document.createElement("canvas");i.width=r.width,i.height=r.height;const a=i.getContext("2d");if(!a){n(new Error("Canvas context is unavailable"));return}a.drawImage(r,0,0),i.toBlob(o=>{o?t(o):n(new Error("WebP conversion failed"))},"image/webp",.95)},r.onerror=n,r.src=e})}async function di(e,t="document",n={format:"png",scale:2}){const{format:r,scale:i,backgroundColor:a="#ffffff"}=n,o=n.width||Math.max(e.clientWidth||e.offsetWidth,800),s=Fe(t),c=oi(e.innerHTML,{width:o,backgroundColor:a,className:"image-export-body"});try{await si(c);const l=c.querySelector(".image-export-body");if(!l)throw new Error("Image export surface is unavailable");const u=Math.ceil(l.scrollHeight),h=ci(o,u,i);let d=null;switch(r){case"png":{const p=await ht(l,{pixelRatio:h,backgroundColor:a,cacheBust:!0,width:o,height:u,canvasWidth:Math.round(o*h),canvasHeight:Math.round(u*h)});d=ke(p);break}case"jpg":{const p=await ai(l,{pixelRatio:h,backgroundColor:a,quality:.95,cacheBust:!0,width:o,height:u,canvasWidth:Math.round(o*h),canvasHeight:Math.round(u*h)});d=ke(p);break}case"svg":{const p=await Ot(l,{cacheBust:!0,width:o,height:u});d=ke(p,"image/svg+xml");break}case"webp":{const p=await ht(l,{pixelRatio:h,backgroundColor:a,cacheBust:!0,width:o,height:u,canvasWidth:Math.round(o*h),canvasHeight:Math.round(u*h)});d=await ui(p);break}}if(d){const p=r==="jpg"?"jpg":r;He.saveAs(d,`${s}.${p}`)}}finally{li(c)}}function hi(e){const n=new DOMParser().parseFromString(e,"text/html"),r=[],i=n.body;for(const a of i.children){const o=Re(a);o&&r.push(o)}return r}function Re(e){switch(e.tagName.toLowerCase()){case"h1":return{type:"heading",depth:1,children:$(e)};case"h2":return{type:"heading",depth:2,children:$(e)};case"h3":return{type:"heading",depth:3,children:$(e)};case"h4":return{type:"heading",depth:4,children:$(e)};case"h5":return{type:"heading",depth:5,children:$(e)};case"h6":return{type:"heading",depth:6,children:$(e)};case"p":return{type:"paragraph",children:$(e)};case"img":return{type:"paragraph",children:[{type:"image",src:e.getAttribute("src")||"",alt:e.getAttribute("alt")||""}]};case"pre":{const n=e.querySelector("code");return{type:"codeBlock",lang:n?.className.match(/language-(\w+)/)?.[1]||"text",code:n?.textContent||e.textContent||""}}case"blockquote":{const n=[];for(const r of e.children){const i=Re(r);i&&n.push(i)}return{type:"blockquote",children:n}}case"ul":{const n=[];for(const r of e.children)r.tagName==="LI"&&n.push($(r));return{type:"list",ordered:!1,items:n}}case"ol":{const n=[];for(const r of e.children)r.tagName==="LI"&&n.push($(r));return{type:"list",ordered:!0,items:n}}case"table":return pi(e);case"div":{if(e.getAttribute("data-math")==="block")return{type:"math",latex:e.getAttribute("data-latex")||e.textContent||""};const n=[];for(const r of e.children){const i=Re(r);i&&n.push(i)}return n.length===1?n[0]:{type:"paragraph",children:[]}}case"hr":return{type:"hr"};default:return e.textContent?.trim()?{type:"paragraph",children:$(e)}:null}}function $(e){const t=[];for(const n of e.childNodes)if(n.nodeType===Node.TEXT_NODE)n.textContent&&t.push({type:"text",content:n.textContent});else if(n.nodeType===Node.ELEMENT_NODE){const r=n;switch(r.tagName.toLowerCase()){case"strong":case"b":t.push({type:"strong",content:r.textContent||""});break;case"em":case"i":t.push({type:"em",content:r.textContent||""});break;case"code":t.push({type:"code",content:r.textContent||""});break;case"a":t.push({type:"link",content:r.textContent||"",url:r.getAttribute("href")||""});break;case"img":t.push({type:"image",src:r.getAttribute("src")||"",alt:r.getAttribute("alt")||""});break;case"input":r.type==="checkbox"&&t.push({type:"text",content:r.checked?"☑ ":"☐ "});break;case"span":r.getAttribute("data-math")==="inline"?t.push({type:"math",latex:r.getAttribute("data-latex")||r.textContent||""}):r.textContent&&t.push({type:"text",content:r.textContent});break;case"del":case"s":t.push({type:"text",content:r.textContent||""});break;default:r.textContent&&t.push({type:"text",content:r.textContent})}}return t}function pi(e){const t=[];let n;const r=e.querySelector("thead"),i=e.querySelector("tbody")||e;if(r){const a=r.querySelector("tr");if(a){n=[];for(const o of a.querySelectorAll("th, td"))n.push({type:"text",content:o.textContent||""})}}for(const a of i.querySelectorAll("tr")){const o=[];for(const s of a.querySelectorAll("td, th"))o.push({type:"text",content:s.textContent||""});o.length>0&&t.push(o)}return{type:"table",headers:n,rows:t}}function fi(e){switch(e.type){case"text":return[new k({text:e.content||""})];case"strong":return[new k({text:e.content||"",bold:!0})];case"em":return[new k({text:e.content||"",italics:!0})];case"code":return[new k({text:e.content||"",font:"Consolas",size:20,shading:{type:"solid",color:"F6F8FA"}})];case"link":return[new mt({children:[new k({text:e.content||"",style:"Hyperlink",color:"2563EB"})],link:e.url||""})];case"image":return[new k({text:e.alt?.trim()||"[图片]"})];case"math":return[new k({text:e.content||e.latex||"[公式]"})];default:return[new k({text:e.content||""})]}}function Nt(e){const t=[];for(const n of e)n.type==="link"?t.push(new mt({children:[new k({text:n.content||"",style:"Hyperlink",color:"2563EB"})],link:n.url||""})):t.push(...fi(n));return t}function I(e,t){const n=Nt(e);return t?.prefix&&n.unshift(new k({text:t.prefix})),new P({children:n,spacing:{after:120},indent:t?.indentLeft?{left:t.indentLeft}:void 0,border:t?.borderLeft?{left:{style:gt.SINGLE,color:"A070FF",size:4}}:void 0})}function gi(e,t){const n={1:D.HEADING_1,2:D.HEADING_2,3:D.HEADING_3,4:D.HEADING_4,5:D.HEADING_5,6:D.HEADING_6};return new P({heading:n[e]||D.HEADING_1,children:Nt(t),spacing:{before:240,after:120}})}function mi(e){return(e.code||"").split(`
`).map(n=>new P({children:[new k({text:n||" ",font:"Consolas",size:19})],shading:{type:"solid",color:"F6F8FA"},spacing:{after:0,line:240},indent:{left:200,right:200}}))}function wi(e){const t=[];if(e.headers&&t.push(new Ue({children:e.headers.map(n=>new We({children:[new P({children:[new k({text:n.content||"",bold:!0})]})],shading:{type:"solid",color:"E5E7EB"},width:{size:100/e.headers.length,type:we.PERCENTAGE}}))})),e.rows)for(const n of e.rows)t.push(new Ue({children:n.map(r=>new We({children:[new P({children:[new k({text:r.content||""})]})],width:{size:100/n.length,type:we.PERCENTAGE}}))}));return new sn({rows:t,width:{size:100,type:we.PERCENTAGE}})}function bi(e){const n=(e.children||[]).flatMap(r=>r.type==="paragraph"||r.type==="heading"?[I(r.children||[{type:"text",content:""}],{indentLeft:400,borderLeft:!0})]:r.type==="list"?(r.items||[]).map((a,o)=>I(a,{prefix:r.ordered?`${o+1}. `:"• ",indentLeft:400,borderLeft:!0})):[I([{type:"text",content:r.content||r.latex||""}],{indentLeft:400,borderLeft:!0})]);return n.length>0?n:[I([{type:"text",content:""}],{indentLeft:400,borderLeft:!0})]}function ki(e){const t=[],n=e.items||[];for(let r=0;r<n.length;r++){const i=e.ordered?`${r+1}. `:"• ";t.push(I(n[r],{prefix:i,indentLeft:400}))}return t}function yi(e){switch(e.type){case"heading":return gi(e.depth||1,e.children||[]);case"paragraph":return I(e.children||[]);case"codeBlock":return mi(e);case"table":return new P({});case"blockquote":return bi(e);case"list":return ki(e);case"hr":return new P({children:[],border:{bottom:{style:gt.SINGLE,color:"E5E7EB"}},spacing:{after:200}});case"math":return I([{type:"text",content:e.latex||"[公式]"}]);default:return I([{type:"text",content:e.content||""}])}}async function xi(e,t="document.docx"){const n=hi(e.innerHTML),r=Fe(t.replace(/\.docx$/i,"")),i=[];for(const s of n)if(s.type==="table")i.push(wi(s));else{const c=yi(s);Array.isArray(c)?i.push(...c):i.push(c)}const a=new tn({sections:[{properties:{page:{margin:{top:1440,right:1440,bottom:1440,left:1440}}},headers:{default:new rn({children:[new P({children:[new k({text:t.replace(".docx",""),size:18,color:"999999"})],alignment:Ne.RIGHT})]})},footers:{default:new nn({children:[new P({children:[new k({text:"第 "}),new k({children:[an.CURRENT]}),new k({text:" 页"})],alignment:Ne.CENTER})]})},children:i}]}),o=await on.toBlob(a);He.saveAs(o,`${r}.docx`)}const J=[{id:"home",path:"/",title:"Markdown 转 PDF - 免费在线转换工具",description:"免费在线 Markdown 转换器，支持实时预览，将 Markdown 转换为 Word、PDF、HTML、图片。所有处理均在浏览器本地完成，无需注册。",keywords:"Markdown转PDF,Markdown在线编辑器,MD转Word,MD转PDF,Markdown转HTML",label:"首页",formatLabel:"导出 PDF",formatDesc:"浏览器打印为 PDF，支持 A4 排版，保留代码高亮和数学公式",icon:"P",color:"#EF4444"},{id:"word",path:"/markdown-to-word/",title:"Markdown 转 Word - 免费在线转换工具",description:"将 Markdown 在线转换为 Word (.docx) 文档。保留标题层级、表格、代码高亮、数学公式。浏览器本地处理，隐私安全。",keywords:"Markdown转Word,MD转DOCX,Markdown导出Word,在线Markdown转Word,Markdown to Word",label:"转 Word",formatLabel:"导出 Word (.docx)",formatDesc:"生成可编辑的 Word 文档，保留标题、表格、代码高亮、公式",icon:"W",color:"#2563EB"},{id:"pdf",path:"/markdown-to-pdf/",title:"Markdown 转 PDF - 免费在线转换工具",description:"将 Markdown 在线转换为 PDF 文档。支持 A4 排版、代码高亮、数学公式、中文优化。浏览器本地处理，无需上传文件。",keywords:"Markdown转PDF,MD转PDF,Markdown导出PDF,在线Markdown转PDF,Markdown to PDF",label:"转 PDF",formatLabel:"导出 PDF",formatDesc:"浏览器打印为 PDF，支持 A4 排版，保留代码高亮和数学公式",icon:"P",color:"#EF4444"},{id:"html",path:"/markdown-to-html/",title:"Markdown 转 HTML - 免费在线转换工具",description:"将 Markdown 在线转换为 HTML 代码。支持完整页面和片段导出，CSS 样式内置。浏览器本地处理，一键复制或下载。",keywords:"Markdown转HTML,MD转HTML,Markdown导出HTML,在线Markdown转HTML,Markdown to HTML",label:"转 HTML",formatLabel:"导出 HTML",formatDesc:"导出完整 HTML 文档或代码片段，CSS 样式内置",icon:"H",color:"#EA580C"},{id:"image",path:"/markdown-to-image/",title:"Markdown 转图片 - 免费在线转换工具",description:"将 Markdown 在线转换为高清图片。支持 PNG、JPG、WebP 格式，2x 像素密度。浏览器本地渲染，适合社交媒体分享。",keywords:"Markdown转图片,MD转PNG,Markdown导出图片,在线Markdown转图片,Markdown to Image",label:"转图片",formatLabel:"导出图片",formatDesc:"导出 PNG/JPG/WebP 高清图片，2x 像素密度，适合社媒分享",icon:"I",color:"#22C55E"}];function Ut(e){const t=e.replace(/\/+$/,"/")||"/",n=t==="/"?"/":t.replace(/\/$/,"");return J.find(i=>(i.path==="/"?"/":i.path.replace(/\/$/,""))===n)?.id||"home"}function vi(){return Ut(window.location.pathname)}function Oe(){const e=vi();return J.find(t=>t.id===e)||J[0]}function Ei(e){const t=J.find(n=>n.id===e);t&&(history.pushState(null,"",t.path),Wt())}let ae=[];function Si(e){return ae.push(e),e(Oe()),()=>{ae=ae.filter(t=>t!==e)}}function Wt(){const e=Oe();ae.forEach(t=>t(e))}window.addEventListener("popstate",Wt);function Ti(){document.addEventListener("click",e=>{const t=e.target.closest("a");if(!t)return;const n=t.getAttribute("href")||"";if(!n||n.startsWith("http")||n.startsWith("//"))return;const r=Ut(n);J.find(a=>a.id===r)&&(e.preventDefault(),Ei(r))})}function Ri(e){document.title=e.title,ne("description",e.description),ne("keywords",e.keywords),ne("og:title",e.title),ne("og:description",e.description),$i(e.path)}function ne(e,t){let n=document.querySelector(`meta[name="${e}"], meta[property="${e}"]`);n||(n=document.createElement("meta"),e.startsWith("og:")?n.setAttribute("property",e):n.setAttribute("name",e),document.head.appendChild(n)),n.setAttribute("content",t)}function $i(e){let t=document.querySelector('link[rel="canonical"]');t||(t=document.createElement("link"),t.rel="canonical",document.head.appendChild(t)),t.href=`${window.location.origin}${e}`}const W=`# Markdown 转换测试文档

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

*享受 Markdown 的简洁，获得专业文档的优雅。*`,R={markdown:"",previewHtml:"",currentRoute:Oe()},b=document.getElementById("editor"),T=document.getElementById("preview"),Li=document.getElementById("line-numbers"),j=document.getElementById("file-input"),H=document.getElementById("upload-area"),Ai=document.getElementById("export-btn"),Ci=document.getElementById("export-btn-text"),Pi=document.getElementById("format-label"),Mi=document.getElementById("format-desc"),ye=document.getElementById("toast"),Ii=document.getElementById("main-nav"),F=document.getElementById("pdf-guide-overlay"),_i=document.getElementById("pdf-guide-preview"),Di=document.getElementById("pdf-guide-confirm"),zi=document.getElementById("pdf-guide-cancel");let jt="document";function Hi(e,t){let n;return((...r)=>{clearTimeout(n),n=setTimeout(()=>e(...r),t)})}function Vt(){const e=R.markdown.split(`
`),t=Math.max(e.length,1);let n="";for(let r=1;r<=t;r++)n+=`<span>${r}</span>`;Li.innerHTML=n}async function Zt(){try{const e=Yn(R.markdown),t=Zn(e);R.previewHtml=t,T.innerHTML=t,await Jn(T)}catch{T.innerHTML='<p style="color:red">渲染错误</p>'}}async function Xt(e){R.markdown=e,Vt();try{localStorage.setItem("mdtopdf_draft",e)}catch{}await Zt()}function Fi(){if(!b||!T)return;const e=b.scrollTop/(b.scrollHeight-b.clientHeight);T.scrollTop=e*(T.scrollHeight-T.clientHeight)}function V(e){Xt(e)}const Bi=Hi(V,150);let ft;function v(e){ye.textContent=e,ye.classList.add("show"),clearTimeout(ft),ft=setTimeout(()=>{ye.classList.remove("show")},2500)}function qi(e){jt=e,_i.innerHTML=T.innerHTML,F.classList.add("open"),F.setAttribute("aria-hidden","false"),document.body.style.overflow="hidden"}function fe(){F.classList.remove("open"),F.setAttribute("aria-hidden","true"),document.body.style.overflow=""}function Qt(e){if(!e.name.match(/\.(md|markdown|txt)$/i)){v("请选择 .md 或 .markdown 文件");return}const t=new FileReader;t.onload=n=>{const r=n.target?.result;b.value=r,V(r),v(`已加载: ${e.name}`)},t.readAsText(e)}function Oi(){return R.markdown.match(/^#\s+(.+)/m)?.[1]?.trim()||"document"}async function Kt(){const e=b.value;if(!e.trim()){v("请先输入或上传 Markdown 内容");return}await Xt(e);const t=Oi(),n=R.currentRoute.id;try{switch(n){case"word":v("正在生成 Word 文档..."),await xi(T,t),v("Word 文档已下载");break;case"home":case"pdf":qi(t);break;case"html":fr(T.innerHTML,t),v("HTML 文件已下载");break;case"image":v("正在生成 PNG 图片..."),await di(T,t,{format:"png",scale:2,backgroundColor:"#ffffff"}),v("PNG 图片已下载");break;default:v("暂不支持当前导出类型");break}}catch(r){console.error("Export error:",r),v("导出失败，请重试")}}function Gi(e){if((e.ctrlKey||e.metaKey)&&e.key==="s"&&(e.preventDefault(),Kt()),e.key==="Tab"){e.preventDefault();const t=b.selectionStart,n=b.selectionEnd,r=b.value;b.value=r.substring(0,t)+"  "+r.substring(n),b.selectionStart=b.selectionEnd=t+2,V(b.value)}}b.addEventListener("input",()=>{Bi(b.value)});b.addEventListener("scroll",Fi);b.addEventListener("keydown",Gi);H.addEventListener("click",()=>j.click());H.addEventListener("dragover",e=>{e.preventDefault(),H.classList.add("drag-over")});H.addEventListener("dragleave",()=>{H.classList.remove("drag-over")});H.addEventListener("drop",e=>{e.preventDefault(),H.classList.remove("drag-over"),e.dataTransfer?.files.length&&Qt(e.dataTransfer.files[0])});document.getElementById("upload-area-btn")?.addEventListener("click",()=>j.click());j.addEventListener("change",()=>{j.files?.length&&(Qt(j.files[0]),j.value="")});Ai.addEventListener("click",Kt);Si(e=>{R.currentRoute=e,Ii.querySelectorAll("a").forEach(t=>{const n=t.getAttribute("href")||"",r=e.path.replace(/\/$/,"")||"/";let i;try{i=new URL(n).pathname}catch{i=n}i=i.replace(/\/$/,"")||"/",t.classList.toggle("active",i===r)}),Pi.textContent=e.formatLabel,Mi.textContent=e.formatDesc,Ci.textContent=e.id==="home"?"导出 PDF":`导出 ${e.label.replace("转 ","")}`,Ri(e)});Ti();document.getElementById("clear-btn")?.addEventListener("click",()=>{R.markdown.trim()&&!confirm("确定要清空所有内容吗？")||(b.value="",V(""))});document.getElementById("sample-btn")?.addEventListener("click",()=>{b.value=W,V(W),v("已加载示例文档")});zi.addEventListener("click",()=>{fe()});Di.addEventListener("click",async()=>{try{fe(),v("正在打开打印窗口..."),await sr(T,jt)}catch(e){console.error("PDF print error:",e),v("打开打印窗口失败，请重试")}});F.addEventListener("click",e=>{e.target===F&&fe()});document.addEventListener("paste",e=>{if(document.activeElement===b)return;const t=e.clipboardData?.items;if(t){for(const n of t)if(n.kind==="string"&&n.type==="text/plain"){n.getAsString(r=>{b.value=r,V(r),v("已粘贴 Markdown 内容")});break}}});document.addEventListener("keydown",e=>{e.key==="Escape"&&F.classList.contains("open")&&fe()});function Ni(){try{const e=localStorage.getItem("mdtopdf_draft");e?.trim()?(b.value=e,R.markdown=e):(b.value=W,R.markdown=W)}catch{b.value=W,R.markdown=W}Vt(),Zt()}Ni();
