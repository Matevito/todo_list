(()=>{"use strict";class e{constructor(e,t,n,d){this.title=e,this.description=t,this.dueDate=n,this.priority=d}}function t(e){let t=document.createElement("tr");t.classList.add("todo_el");let n=document.createElement("td");n.textContent=e.title,t.appendChild(n);let d=document.createElement("td");d.textContent=e.dueDate,t.appendChild(d);let o=document.createElement("td");o.textContent=e.priority,t.appendChild(o);let l=document.createElement("button");return l.textContent="Edit",l.addEventListener("click",(()=>{})),t.appendChild(l),t}class n{constructor(e){this.title=e,this.todos=[]}add_todo(e){this.todos.push(e)}}function d(){!function(){let e=document.getElementById("board_display");document.getElementById("console").removeChild(e)}();let e=document.createElement("div");e.setAttribute("id","board_display"),document.getElementById("console").appendChild(e)}function o(e){let n=document.createElement("h3");n.textContent=e.title;let d=function(e){let n=document.createElement("div");n.setAttribute("id","board_display");for(let d of e)n.appendChild(t(d));let d=document.createElement("button");return d.textContent="Add a new todo!",d.addEventListener("click",(()=>{let e=_.newTodo_pop();_.display_popUp(e)})),n.appendChild(d),n}(e.todos),o=document.createElement("div");return o.appendChild(n),o.appendChild(d),o}let l=[new e("wash dishes","wash the dishes","25/03/19","medium"),new e("push ups","2*25 push ups","12/05/2021","low"),new e("write","write 500 words of the novel","5/12/2021","high"),new e("code","30 minutes of leetcode","25/08/29","high")],i=[new e("laundry","do the laundry","25/5/19","low"),new e("read","read lotr","1/02/22","medium"),new e("piano","practice 30 min","12/05/2021","high")],a=new n("example 1");a.todos=l;let p=new n("new");p.todos=i;let r=new class{constructor(){this.proyects=[]}add_proyect(e){this.proyects.push(e)}};function c(){let e=r.proyects,t=document.getElementById("board_display");for(let n of e){let e=document.createElement("h4");e.textContent=n.title,e.addEventListener("click",(()=>{_.reset_popUp(),d();let e=o(n);document.getElementById("board_display").appendChild(e)}));let l=document.createElement("button");l.textContent="edit",l.addEventListener("click",(()=>{let t=e.textContent,n=m.get_proyect_index(t),d=_.editP_pop(n);e.textContent,_.display_popUp(d)}));let i=document.createElement("div");i.appendChild(e),i.appendChild(l),t.appendChild(i)}let n=document.createElement("button");return n.textContent="New Proyect!",n.addEventListener("click",(()=>{let e=_.newP_pop();_.display_popUp(e)})),t.appendChild(n),t}r.add_proyect(a),r.add_proyect(p);class s{constructor(e,t){this.title=e,this.message=t}}const u=(()=>{let e=[];return{add_note:t=>{e.push(t)},getData:()=>e,dataBase:e}})();u.add_note(new s("ex.1","let's do this the right way")),u.add_note(new s("caso 2","una nota en español!")),u.add_note(new s("dritten","eine dritten note. Aber dises auf deutsch"));const m=(()=>{const e=e=>{for(let t of r.proyects)if(t.title===e)return r.proyects.indexOf(t)};return{get_proyect_index:e,get_note_index:e=>{for(let t of u.dataBase)if(e===t.title)return u.dataBase.indexOf(t)},add_proyect:e=>{r.add_proyect(e),h.show_proyects()},add_note:e=>{u.add_note(e),h.show_notes()},add_todo:t=>{let n=document.querySelector("h3").textContent,d=e(n);r.proyects[d].add_todo(t),h.show_proyects()}}})(),_=(()=>{const t=(e,t,n="")=>{let d=document.createElement("div");d.textContent=e;let o=document.createElement("input");return o.setAttribute("type","text"),o.setAttribute("id",t),o.value=n,d.appendChild(o),d},d=e=>{document.getElementById("console").appendChild(e)},o=()=>{let e=document.getElementById("console"),t=document.getElementById("pop_up");e.removeChild(t)};return{newP_pop:()=>{o();let e=h.create_div("pop_up"),d=t("Title","proyect_title"),l=document.createElement("button");return l.textContent="Save",l.addEventListener("click",(()=>{let e=document.getElementById("proyect_title").value,t=new n(e);m.add_proyect(t)})),e.appendChild(d),e.appendChild(l),e},newN_pop:()=>{o();let e=h.create_div("pop_up"),n=t("Title","note_title"),d=t("Note","note_text"),l=document.createElement("button");return l.textContent="Save",l.addEventListener("click",(()=>{let e=document.getElementById("note_title").value,t=document.getElementById("note_text").value,n=new s(e,t);m.add_note(n)})),e.appendChild(n),e.appendChild(d),e.appendChild(l),e},newTodo_pop:()=>{o();let n=h.create_div("pop_up"),d=t("Title","todo_title"),l=t("Description","description_title"),i=t("Date","dueDate"),a=t("priority","priority"),p=document.createElement("button");return p.textContent="Save",p.addEventListener("click",(()=>{let t=document.getElementById("todo_title").value,n=document.getElementById("description_title").value,d=document.getElementById("dueDate").value,o=document.getElementById("priority").value,l=new e(t,n,d,o);m.add_todo(l)})),n.appendChild(d),n.appendChild(l),n.appendChild(i),n.appendChild(a),n.appendChild(p),n},display_popUp:d,display_popUp:d,reset_popUp:()=>{o();let e=document.getElementById("console"),t=h.create_div("pop_up");e.appendChild(t)},editP_pop:e=>{o();let n=h.create_div("pop_up"),d=r.proyects[e].title,l=t("Title","proyect_title",d),i=document.createElement("button");i.textContent="save changes",i.addEventListener("click",(()=>{let t=document.getElementById("proyect_title").value;r.proyects[e].title=t,h.show_proyects()}));let a=document.createElement("button");return a.textContent="remove",a.addEventListener("click",(()=>{r.proyects.splice(e,1),h.show_proyects()})),n.appendChild(l),n.appendChild(i),n.appendChild(a),n},editN_pop:e=>{o();let n=h.create_div("pop_up"),d=u.dataBase[e],l=d.title,i=d.message,a=t("Title","note_title",l),p=t("Note","note_text",i),r=document.createElement("button");r.textContent="save changes",r.addEventListener("click",(()=>{}));let c=document.createElement("button");return c.textContent="remove",c.addEventListener("click",(()=>{})),n.appendChild(a),n.appendChild(p),n.appendChild(r),n.appendChild(c),n}}})(),h={create_div:(e="")=>{let t=document.createElement("div");return""!=e&&t.setAttribute("id",e),t},create_listE:(e,t)=>{let n=document.createElement("ul");return n.textContent=e,n.classList.add(t),n},print_board_content:e=>{document.getElementById("console").removeChild(document.getElementById("board_display"));let t=document.getElementById("console");e.setAttribute("id","board_display"),t.appendChild(e)},reset_board:()=>{let e=document.getElementById("board_display");document.getElementById("console").removeChild(e);let t=document.createElement("div");t.setAttribute("id","board_display"),document.getElementById("console").appendChild(t)},get_currentDate:()=>new Date,show_proyects:()=>{h.reset_board(),_.reset_popUp();let e=c();h.print_board_content(e)},show_notes:()=>{_.reset_popUp();let e=function(){let e=document.createElement("div"),t=u.getData();for(let n of t){let t=document.createElement("div"),d=document.createElement("h4");d.textContent=n.title;let o=document.createElement("div");o.textContent=n.message;let l=document.createElement("button");l.textContent="edit",l.addEventListener("click",(()=>{let e=d.textContent,t=m.get_note_index(e),n=_.editN_pop(t);_.display_popUp(n)})),t.appendChild(d),t.appendChild(o),t.appendChild(l),e.appendChild(t)}let n=document.createElement("button");return n.textContent="Add note!",n.addEventListener("click",(()=>{let e=_.newN_pop();_.display_popUp(e)})),e.appendChild(n),function(){!function(){let e=document.getElementById("board_display");document.getElementById("console").removeChild(e)}();let e=document.createElement("div");e.setAttribute("id","board_display"),document.getElementById("console").appendChild(e)}(),e}();h.print_board_content(e)}},y=document.getElementById("container");function E(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function C(e){E(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function v(e,t){E(2,arguments);var n=C(e),d=C(t);return n.getTime()===d.getTime()}!function(){let e=h.create_div("header");e.textContent="Todo app!",y.appendChild(e)}(),function(){let e=h.create_div("console"),t=function(){let e=h.create_div("lateral_bar"),t=h.create_listE("Proyects","lateral_btn");t.addEventListener("click",(()=>{h.show_proyects()}));let n=h.create_listE("Today","lateral_btn");n.addEventListener("click",(()=>{!function(){let e=r.proyects,t=h.get_currentDate();document.createElement("div");for(let n of e)for(let e of n.todos){let n=e.dueDate.split("/");v(t,new Date(n[2],n[1],n[0]))}}()}));let d=h.create_listE("Notes","lateral_btn");return d.addEventListener("click",(()=>{h.show_notes()})),e.appendChild(t),e.appendChild(d),e.appendChild(n),e}(),n=h.create_div("board_display");e.appendChild(t),e.appendChild(n);let d=h.create_div("pop_up");e.appendChild(d),y.appendChild(e);let o=c();e.appendChild(o)}()})();