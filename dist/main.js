(()=>{"use strict";class e{constructor(e,t,n,d){this.title=e,this.description=t,this.dueDate=n,this.priority=d}}function t(e){let t=document.createElement("tr");t.classList.add("todo_el");let n=document.createElement("td");n.textContent=e.title,t.appendChild(n);let d=document.createElement("td");d.textContent=e.dueDate,t.appendChild(d);let o=document.createElement("td");o.textContent=e.priority,t.appendChild(o);let l=document.createElement("button");return l.textContent="Edit",l.addEventListener("click",(()=>{let e=document.querySelector("h3").textContent,t=_.get_proyect_index(e),d=n.textContent,o=_.get_todo_index(t,d),l=h.editT_pop(t,o);h.display_popUp(l)})),t.appendChild(l),t}function n(e){let n=document.createElement("div");n.setAttribute("id","board_display");for(let d of e)n.appendChild(t(d));let d=document.createElement("button");return d.textContent="Add a new todo!",d.addEventListener("click",(()=>{let e=h.newTodo_pop();h.display_popUp(e)})),n.appendChild(d),n}class d{constructor(e){this.title=e,this.todos=[]}add_todo(e){this.todos.push(e)}}function o(){!function(){let e=document.getElementById("board_display");document.getElementById("console").removeChild(e)}();let e=document.createElement("div");e.setAttribute("id","board_display"),document.getElementById("console").appendChild(e)}function l(e){let t=document.createElement("h3");t.textContent=e.title;let d=n(e.todos),o=document.createElement("div");return o.appendChild(t),o.appendChild(d),o}let i=[new e("wash dishes","wash the dishes","25/03/19","medium"),new e("push ups","2*25 push ups","12/05/2021","low"),new e("write","write 500 words of the novel","5/12/2021","high"),new e("code","30 minutes of leetcode","25/08/29","high")],a=[new e("laundry","do the laundry","25/5/19","low"),new e("read","read lotr","1/02/22","medium"),new e("piano","practice 30 min","12/05/2021","high")],p=new d("example 1");p.todos=i;let r=new d("new");r.todos=a;let c=new class{constructor(){this.proyects=[]}add_proyect(e){this.proyects.push(e)}};function s(){let e=c.proyects,t=document.getElementById("board_display");for(let n of e){let e=document.createElement("h4");e.textContent=n.title,e.addEventListener("click",(()=>{h.reset_popUp(),o();let e=l(n);document.getElementById("board_display").appendChild(e)}));let d=document.createElement("button");d.textContent="edit",d.addEventListener("click",(()=>{let t=e.textContent,n=_.get_proyect_index(t),d=h.editP_pop(n);e.textContent,h.display_popUp(d)}));let i=document.createElement("div");i.appendChild(e),i.appendChild(d),t.appendChild(i)}let n=document.createElement("button");return n.textContent="New Proyect!",n.addEventListener("click",(()=>{let e=h.newP_pop();h.display_popUp(e)})),t.appendChild(n),t}c.add_proyect(p),c.add_proyect(r);class u{constructor(e,t){this.title=e,this.message=t}}const m=(()=>{let e=[];return{add_note:t=>{e.push(t)},getData:()=>e,dataBase:e}})();m.add_note(new u("ex.1","let's do this the right way")),m.add_note(new u("caso 2","una nota en español!")),m.add_note(new u("dritten","eine dritten note. Aber dises auf deutsch"));const _=(()=>{const e=e=>{for(let t of c.proyects)if(t.title===e)return c.proyects.indexOf(t)};return{get_proyect_index:e,get_note_index:e=>{for(let t of m.dataBase)if(e===t.title)return m.dataBase.indexOf(t)},get_todo_index:(e,t)=>{let n=c.proyects[e].todos;for(let e of n)if(e.title===t)return n.indexOf(e)},add_proyect:e=>{c.add_proyect(e),y.show_proyects()},add_note:e=>{m.add_note(e),y.show_notes()},add_todo:t=>{let n=document.querySelector("h3").textContent,d=e(n),o=c.proyects[d];o.add_todo(t),y.show_todos(o.todos)}}})(),h=(()=>{const t=(e,t,n="")=>{let d=document.createElement("div");d.textContent=e;let o=document.createElement("input");return o.setAttribute("type","text"),o.setAttribute("id",t),o.value=n,d.appendChild(o),d},n=e=>{document.getElementById("console").appendChild(e)},o=()=>{let e=document.getElementById("console"),t=document.getElementById("pop_up");e.removeChild(t)};return{newP_pop:()=>{o();let e=y.create_div("pop_up"),n=t("Title","proyect_title"),l=document.createElement("button");return l.textContent="Save",l.addEventListener("click",(()=>{let e=document.getElementById("proyect_title").value,t=new d(e);_.add_proyect(t)})),e.appendChild(n),e.appendChild(l),e},newN_pop:()=>{o();let e=y.create_div("pop_up"),n=t("Title","note_title"),d=t("Note","note_text"),l=document.createElement("button");return l.textContent="Save",l.addEventListener("click",(()=>{let e=document.getElementById("note_title").value,t=document.getElementById("note_text").value,n=new u(e,t);_.add_note(n)})),e.appendChild(n),e.appendChild(d),e.appendChild(l),e},newTodo_pop:()=>{o();let n=y.create_div("pop_up"),d=t("Title","todo_title"),l=t("Description","description_title"),i=t("Date","dueDate"),a=t("priority","priority"),p=document.createElement("button");return p.textContent="Save",p.addEventListener("click",(()=>{let t=document.getElementById("todo_title").value,n=document.getElementById("description_title").value,d=document.getElementById("dueDate").value,o=document.getElementById("priority").value,l=new e(t,n,d,o);_.add_todo(l)})),n.appendChild(d),n.appendChild(l),n.appendChild(i),n.appendChild(a),n.appendChild(p),n},display_popUp:n,display_popUp:n,reset_popUp:()=>{o();let e=document.getElementById("console"),t=y.create_div("pop_up");e.appendChild(t)},editP_pop:e=>{o();let n=y.create_div("pop_up"),d=c.proyects[e].title,l=t("Title","proyect_title",d),i=document.createElement("button");i.textContent="save changes",i.addEventListener("click",(()=>{let t=document.getElementById("proyect_title").value;c.proyects[e].title=t,y.show_proyects()}));let a=document.createElement("button");return a.textContent="remove",a.addEventListener("click",(()=>{c.proyects.splice(e,1),y.show_proyects()})),n.appendChild(l),n.appendChild(i),n.appendChild(a),n},editN_pop:e=>{o();let n=y.create_div("pop_up"),d=m.dataBase[e],l=d.title,i=d.message,a=t("Title","note_title",l),p=t("Note","note_text",i),r=document.createElement("button");r.textContent="save changes",r.addEventListener("click",(()=>{let t=document.getElementById("note_title").value,n=document.getElementById("note_text").value;m.dataBase[e].title=t,m.dataBase[e].message=n,y.show_notes()}));let c=document.createElement("button");return c.textContent="remove",c.addEventListener("click",(()=>{m.dataBase.splice(e,1),y.show_notes()})),n.appendChild(a),n.appendChild(p),n.appendChild(r),n.appendChild(c),n},editT_pop:(e,n)=>{o();let d=y.create_div("pop_up"),l=c.proyects[e].todos[n],i=t("Title","todo_title",l.title),a=t("Description","description_title",l.description),p=t("Date","dueDate",l.dueDate),r=t("priority","priority",l.priority),s=document.createElement("button");s.textContent="save changes",s.addEventListener("click",(()=>{let t=document.getElementById("todo_title").value,n=document.getElementById("description_title").value,d=document.getElementById("dueDate").value,o=document.getElementById("priority").value;l.title=t,l.description=n,l.dueDate=d,l.priority=o;let i=c.proyects[e].todos;y.show_todos(i)}));let u=document.createElement("button");return u.textContent="remove",u.addEventListener("click",(()=>{})),d.appendChild(i),d.appendChild(a),d.appendChild(p),d.appendChild(r),d.appendChild(s),d.appendChild(u),d}}})(),y={create_div:(e="")=>{let t=document.createElement("div");return""!=e&&t.setAttribute("id",e),t},create_listE:(e,t)=>{let n=document.createElement("ul");return n.textContent=e,n.classList.add(t),n},print_board_content:e=>{document.getElementById("console").removeChild(document.getElementById("board_display"));let t=document.getElementById("console");e.setAttribute("id","board_display"),t.appendChild(e)},reset_board:()=>{let e=document.getElementById("board_display");document.getElementById("console").removeChild(e);let t=document.createElement("div");t.setAttribute("id","board_display"),document.getElementById("console").appendChild(t)},get_currentDate:()=>new Date,show_proyects:()=>{y.reset_board(),h.reset_popUp();let e=s();y.print_board_content(e)},show_notes:()=>{h.reset_popUp();let e=function(){let e=document.createElement("div"),t=m.getData();for(let n of t){let t=document.createElement("div"),d=document.createElement("h4");d.textContent=n.title;let o=document.createElement("div");o.textContent=n.message;let l=document.createElement("button");l.textContent="edit",l.addEventListener("click",(()=>{let e=d.textContent,t=_.get_note_index(e),n=h.editN_pop(t);h.display_popUp(n)})),t.appendChild(d),t.appendChild(o),t.appendChild(l),e.appendChild(t)}let n=document.createElement("button");return n.textContent="Add note!",n.addEventListener("click",(()=>{let e=h.newN_pop();h.display_popUp(e)})),e.appendChild(n),function(){!function(){let e=document.getElementById("board_display");document.getElementById("console").removeChild(e)}();let e=document.createElement("div");e.setAttribute("id","board_display"),document.getElementById("console").appendChild(e)}(),e}();y.print_board_content(e)},show_todos:e=>{h.reset_popUp();let t=document.createElement("h3");t.textContent=e.title;let d=n(e),o=document.createElement("div");o.appendChild(t),o.appendChild(d),y.print_board_content(o)}},E=document.getElementById("container");function C(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function v(e){C(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function g(e,t){C(2,arguments);var n=v(e),d=v(t);return n.getTime()===d.getTime()}!function(){let e=y.create_div("header");e.textContent="Todo app!",E.appendChild(e)}(),function(){let e=y.create_div("console"),t=function(){let e=y.create_div("lateral_bar"),t=y.create_listE("Proyects","lateral_btn");t.addEventListener("click",(()=>{y.show_proyects()}));let n=y.create_listE("Today","lateral_btn");n.addEventListener("click",(()=>{!function(){let e=c.proyects,t=y.get_currentDate();document.createElement("div");for(let n of e)for(let e of n.todos){let n=e.dueDate.split("/");g(t,new Date(n[2],n[1],n[0]))}}()}));let d=y.create_listE("Notes","lateral_btn");return d.addEventListener("click",(()=>{y.show_notes()})),e.appendChild(t),e.appendChild(d),e.appendChild(n),e}(),n=y.create_div("board_display");e.appendChild(t),e.appendChild(n);let d=y.create_div("pop_up");e.appendChild(d),E.appendChild(e);let o=s();e.appendChild(o)}()})();