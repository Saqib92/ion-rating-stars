/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{f as o,c as s}from"./p-d472be56.js";import{f as t,s as e}from"./p-ef07f721.js";import{c as r}from"./p-ebe7e343.js";import"./p-d2917828.js";const a=()=>{const a=window;a.addEventListener("statusTap",(()=>{o((()=>{const o=document.elementFromPoint(a.innerWidth/2,a.innerHeight/2);if(!o)return;const f=t(o);f&&new Promise((o=>r(f,o))).then((()=>{s((async()=>{f.style.setProperty("--overflow","hidden"),await e(f,300),f.style.removeProperty("--overflow")}))}))}))}))};export{a as startStatusTap}