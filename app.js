
const lessons = [
 {id:"exposure",title:"مثلث التعريض: ISO وShutter وAperture",category:"أساسيات",level:"مبتدئ",duration:"12 دقيقة",icon:"◉",desc:"افهم كيف تتحكم بثلاثة عناصر أساسية في سطوع الصورة ومظهرها.",sections:[
 ["ما هو مثلث التعريض؟","التعريض هو كمية الضوء التي تصل إلى المستشعر. تتعاون فتحة العدسة وسرعة الغالق وحساسية ISO لصناعة الصورة."],
 ["فتحة العدسة Aperture","رقم f الأصغر يعني فتحة أوسع وضوءًا أكثر وخلفية أكثر ضبابية غالبًا. جرّب f/2.8 للبورتريه وf/8 للمشاهد التي تحتاج تفاصيل أوسع."],
 ["سرعة الغالق Shutter","سرعة أعلى تجمّد الحركة، وسرعة أبطأ تسمح بدخول ضوء أكثر لكنها قد تسبب اهتزازًا. للأشخاص الثابتين ابدأ تقريبًا بـ 1/125 ثانية أو أسرع."],
 ["حساسية ISO","ISO منخفض يحافظ عادةً على نقاء الصورة. ارفع ISO عند ضعف الإضاءة مع الانتباه لزيادة التشويش."],
 ["تمرين عملي","صوّر نفس المشهد بثلاث فتحات عدسة مختلفة، ثم قارن الخلفية. بعد ذلك جرّب سرعة غالق مختلفة لتلاحظ أثرها على الحركة."]
 ],tips:["غيّر عنصرًا واحدًا كل مرة لتفهم أثره.","راقب histogram ولا تعتمد على شاشة الكاميرا وحدها.","لا تخف من رفع ISO عند الحاجة؛ الصورة الواضحة أفضل من صورة مهزوزة."]},
 {id:"composition",title:"التكوين: كيف ترتّب عناصر الصورة؟",category:"تكوين",level:"مبتدئ",duration:"10 دقائق",icon:"▦",desc:"قواعد بسيطة تساعدك توجّه عين المشاهد وتخلق صورة متوازنة.",sections:[
 ["قاعدة الأثلاث","تخيّل شبكة 3×3 وضع العنصر المهم قرب خطوطها أو نقاط تقاطعها. القاعدة نقطة بداية وليست قانونًا."],
 ["الخطوط القائدة","استخدم الطرق أو الجدران أو الظلال لتوجيه عين المشاهد نحو الموضوع."],
 ["المساحة السلبية","اترك فراغًا حول الموضوع عندما يخدم إحساس الصورة ويمنحها هدوءًا."],
 ["الخلفية","قبل التصوير افحص أطراف الإطار وتجنّب العناصر المشتتة خلف الرأس أو حول الموضوع."],
 ["تمرين عملي","صوّر الموضوع نفسه بثلاثة تكوينات: قاعدة الأثلاث، تمركز، ومساحة سلبية. اختر الصورة الأكثر تعبيرًا."]
 ],tips:["اقترب أو ابتعد بدل الاعتماد الدائم على الزوم.","التكوين الجيد يخدم القصة وليس القاعدة فقط.","انتبه لحواف الصورة قبل الضغط على زر التصوير."]},
 {id:"portrait",title:"تصوير البورتريه بإضاءة طبيعية",category:"إضاءة",level:"متوسط",duration:"15 دقيقة",icon:"☼",desc:"احصل على ضوء ناعم وملامح طبيعية مع خلفية مرتبة.",sections:[
 ["اختيار الضوء","الظل المفتوح قرب نافذة أو تحت مظلة يعطي ضوءًا ناعمًا. تجنب الشمس المباشرة القاسية في منتصف النهار."],
 ["مكان الشخص","اجعل الشخص قريبًا من مصدر الضوء، ولفّ الوجه قليلًا باتجاهه. راقب انعكاس الضوء في العينين."],
 ["الخلفية والعدسة","اختر خلفية بسيطة وبُعدًا مناسبًا عنها. فتحة واسعة تساعد على فصل الشخص، لكن تأكد أن العين الأقرب حادة."],
 ["التواصل","وجّه الشخص بإشارات بسيطة، وامنحه وقتًا ليأخذ وضعية مريحة. اللحظة الطبيعية أهم من الوضعية المعقدة."],
 ["تمرين عملي","التقط صورة قرب نافذة، ثم حرّك الشخص تدريجيًا بزاوية 45 درجة وراقب تغيّر الظلال."]
 ],tips:["لا تفرط في تنعيم البشرة.","حافظ على لون البشرة واقعيًا.","استخدم عاكسًا أبيض أو قطعة كرتون لتخفيف الظلال عند الحاجة."]},
 {id:"editing",title:"أساسيات تعديل الصور بشكل واقعي",category:"تعديل",level:"متوسط",duration:"14 دقيقة",icon:"✦",desc:"رتّب الإضاءة والألوان والتفاصيل من دون مظهر مصطنع.",sections:[
 ["ابدأ بالإضاءة","اضبط التعريض والـ highlights والـ shadows قبل اللون. استرجع التفاصيل من دون جعل الصورة مسطّحة."],
 ["توازن اللون الأبيض","صحح حرارة اللون حتى تبدو البشرة والأشياء البيضاء طبيعية. لا تجعل كل الصور برتقالية لمجرد أنها سينمائية."],
 ["التباين والألوان","أضف تباينًا خفيفًا وتشبعًا متزنًا. راقب القنوات اللونية وتجنّب قصّ التفاصيل."],
 ["الحدة والضوضاء","طبّق تقليل الضوضاء باعتدال، ثم شحذ التفاصيل المطلوبة فقط. لا ترفع الحدة حتى تظهر هالات."],
 ["تمرين عملي","عدّل نسخة من الصورة تعديلًا خفيفًا، ثم قارنها بالأصل عند تكبير 100% وعلى شاشة الهاتف."]
 ],tips:["احتفظ بنسخة أصلية.","قارن قبل/بعد باستمرار.","التعديل الناجح يجعل الصورة أفضل لا مختلفة عن الواقع."]},
 {id:"video",title:"مدخل إلى تصوير الفيديو السينمائي",category:"فيديو",level:"متوسط",duration:"16 دقيقة",icon:"▶",desc:"تعرف على معدل الإطارات وحركة الكاميرا وثبات اللقطة.",sections:[
 ["معدل الإطارات","للمظهر الطبيعي غالبًا استخدم 24 أو 25 إطارًا في الثانية، و50/60 إطارًا للحركة البطيئة عند تحويلها للمعدل المناسب."],
 ["سرعة الغالق","قاعدة شائعة: اجعل سرعة الغالق قرابة ضعف معدل الإطارات؛ مثل 1/50 عند 25fps. قد تحتاج حلولًا مختلفة في ظروف خاصة."],
 ["حركة الكاميرا","تحرك ببطء وبهدف. اللقطة الثابتة المتقنة أفضل من حركة غير مستقرة بلا داعٍ."],
 ["الصوت","الصوت الواضح جزء أساسي من الفيديو. راقب مستوى التسجيل وابتعد عن مصادر الضجيج."],
 ["تمرين عملي","صوّر لقطة ثابتة، ولقطة حركة بطيئة، ولقطة تتبع قصيرة. راجع الثبات والتعريض والصوت."]
 ],tips:["ثبّت توازن اللون الأبيض قبل التسجيل.","لا تخلط إضاءات مختلفة اللون دون قصد.","خطط للقطات قبل التصوير."]}
];
window.ANAS_LESSONS=lessons;
function navInit(){const b=document.querySelector('.menu'),n=document.querySelector('.navlinks');if(b&&n)b.addEventListener('click',()=>n.classList.toggle('open'));}
function lessonCard(l){return `<article class="course-card"><div class="course-cover">${l.icon}</div><div class="course-body"><span class="tag">${l.category}</span><h3>${l.title}</h3><p>${l.desc}</p><div class="meta"><span>◷ ${l.duration}</span><span>• ${l.level}</span></div><a class="link" href="lesson.html?id=${l.id}">ابدأ الدرس ←</a></div></article>`}
function catalogInit(){const grid=document.querySelector('#courseGrid');if(!grid)return;const filters=document.querySelector('#filters'),search=document.querySelector('#searchLessons');let active="الكل";const categories=["الكل",...new Set(lessons.map(l=>l.category))];filters.innerHTML=categories.map(c=>`<button class="filter ${c===active?'active':''}" type="button">${c}</button>`).join("");filters.querySelectorAll('button').forEach(b=>b.onclick=()=>{active=b.textContent;filters.querySelectorAll('button').forEach(x=>x.classList.toggle('active',x===b));render()});function render(){const q=(search.value||"").trim().toLowerCase();const found=lessons.filter(l=>(active==="الكل"||l.category===active)&&(l.title+" "+l.desc+" "+l.category).toLowerCase().includes(q));grid.innerHTML=found.length?found.map(lessonCard).join(""):`<div class="empty">ما لقينا دروس بهذا البحث. جرّب كلمة ثانية.</div>`}search.addEventListener('input',render);render();}
function lessonInit(){const main=document.querySelector('#lessonContent');if(!main)return;const id=new URLSearchParams(location.search).get('id')||lessons[0].id;const l=lessons.find(x=>x.id===id)||lessons[0];document.title=l.title+" | أنس فوتوغرافي";main.innerHTML=`<span class="tag">${l.category} · ${l.level}</span><h1>${l.title}</h1><p>${l.desc}</p><div class="video-box"><div><div class="play">▶</div><strong>مكان فيديو الدرس</strong><p>أضف رابط فيديو YouTube الخاص بهذا الدرس داخل ملف assets/app.js عند تجهيز المحتوى المرئي.</p></div></div><p class="notice">المحتوى المكتوب متاح الآن. مساحة الفيديو مجهزة، ولا تحتوي على رابط وهمي.</p>${l.sections.map(s=>`<h2>${s[0]}</h2><p>${s[1]}</p>`).join("")}<h2>نصائح سريعة</h2><ul>${l.tips.map(t=>`<li>${t}</li>`).join("")}</ul><div class="callout">تذكّر: أفضل إعدادات التصوير هي التي تخدم المشهد والقصة، وليست رقمًا ثابتًا لكل الحالات.</div><div class="btns"><a class="btn secondary" href="courses.html">العودة للدروس</a><a class="btn" href="lesson.html?id=${lessons[(lessons.findIndex(x=>x.id===l.id)+1)%lessons.length].id}">الدرس التالي ←</a></div>`;const side=document.querySelector('#lessonSidebar');if(side)side.innerHTML=lessons.map(x=>`<a class="side-item" href="lesson.html?id=${x.id}">${x.title}<small>${x.duration} · ${x.category}</small></a>`).join("");}
function contactInit(){const f=document.querySelector('#contactForm');if(f)f.addEventListener('submit',e=>{e.preventDefault();const name=document.querySelector('#name').value.trim(),msg=document.querySelector('#message').value.trim();const url='https://wa.me/?text='+encodeURIComponent('مرحبًا، أنا '+name+'. '+msg);window.open(url,'_blank','noopener');});}
document.addEventListener('DOMContentLoaded',()=>{navInit();catalogInit();lessonInit();contactInit();});
