/* ===== 进度条 ===== */
const progressBar = document.getElementById('progressBar');
function updateProgress(){
  const h = document.documentElement;
  progressBar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
}
window.addEventListener('scroll', updateProgress, {passive:true});
updateProgress();

/* ===== 移动端菜单 ===== */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

/* ===== 开场：幕布拉开 ===== */
const hero = document.getElementById('hero');
function playOpening(){
  hero.classList.remove('open');
  // 强制重排后重新播放
  void hero.offsetWidth;
  requestAnimationFrame(() => requestAnimationFrame(() => hero.classList.add('open')));
}
playOpening();
document.getElementById('replayBtn').addEventListener('click', playOpening);

/* ===== 开场聚光灯跟随鼠标 ===== */
const heroSpot = document.getElementById('heroSpot');
hero.addEventListener('mousemove', e => {
  const r = hero.getBoundingClientRect();
  heroSpot.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
  heroSpot.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
});

/* ===== 翻卡 ===== */
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => card.classList.toggle('flipped'));
});

/* ===== 灯光控制台 ===== */
const consoleStage = document.getElementById('consoleStage');
const consoleWash = document.getElementById('consoleWash');
const stageImg = document.getElementById('stageImg');
consoleStage.addEventListener('mousemove', e => {
  const r = consoleStage.getBoundingClientRect();
  consoleWash.style.setProperty('--cx', ((e.clientX - r.left) / r.width * 100) + '%');
  consoleWash.style.setProperty('--cy', ((e.clientY - r.top) / r.height * 100) + '%');
});
const filters = {
  warm:'sepia(.18) saturate(1.1) brightness(1.05)',
  cool:'hue-rotate(180deg) saturate(.75) brightness(.92)',
  rock:'hue-rotate(270deg) saturate(1.7) contrast(1.12) brightness(1.02)'
};
document.querySelectorAll('.light-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.light-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    stageImg.style.filter = filters[btn.dataset.wash];
  });
});

/* ===== 歌曲时间轴 ===== */
const tlData = [
  {en:'OVERTURE', t:'序曲', p:'大幕拉开前，乐队先奏响全剧的主要旋律。几秒钟内，你就已经"走进"了这个故事的世界。'},
  {en:'SOLO', t:'独唱', p:'一个人在舞台上唱出内心最深处的话。独白说不出口的情绪，交给旋律。'},
  {en:'DUET / ENSEMBLE', t:'重唱', p:'两个或更多人同时歌唱，各自表达不同心思，几条旋律线像人物的对话一样交织碰撞。'},
  {en:'CHORUS', t:'合唱', p:'群体的声音——学生、工人、宾客、市民。它代表时代，也代表推动故事的洪流。'},
  {en:'FINALE', t:'终曲', p:'全剧所有主题再次汇聚，所有人物站到一起，在最饱满的大合唱里把情绪推到顶点。'}
];
document.querySelectorAll('.tl-item').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tl-item').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const d = tlData[+btn.dataset.tl];
    document.getElementById('tlPanel').innerHTML =
      `<p class="tl-en">${d.en}</p><h4>${d.t}</h4><p>${d.p}</p>`;
  });
});

/* ===== 版图标签 ===== */
const regionData = [
  {en:'BROADWAY — NEW YORK', t:'纽约百老汇', p:'音乐剧产业的心脏，讲究戏剧结构完整、歌舞与叙事严丝合缝。商业、华丽、造梦机器。', w:'代表作：《歌剧魅影》《汉密尔顿》《猫》《芝加哥》《魔法坏女巫》'},
  {en:'WEST END — LONDON', t:'伦敦西区', p:'音乐剧的另一座巅峰，气质更偏戏剧传统与文学改编，很多划时代作品从这里走向世界。', w:'代表作：《悲惨世界》《歌剧魅影》《西贡小姐》《玛蒂尔达》'},
  {en:'COMÉDIE MUSICALE — FRANCE', t:'法语音乐剧', p:'法语音乐剧更像"唱片音乐剧"：旋律先行、金曲频出，擅长用流行与摇滚包装史诗，舞台写意。', w:'代表作：《巴黎圣母院》《摇滚莫扎特》《罗密欧与朱丽叶》《星幻》'},
  {en:'DAS MUSICAL — DEUTSCHLAND', t:'德奥音乐剧', p:'德奥作品擅长心理刻画与哲学表达，曲风厚重、叙事严谨，有一种冷峻而深沉的力量。', w:'代表作：《莫扎特！》《伊丽莎白》《蝴蝶梦》《吸血鬼之舞》'}
];
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const d = regionData[+tab.dataset.region];
    document.getElementById('regionPanel').innerHTML =
      `<p class="tl-en">${d.en}</p><h4>${d.t}</h4><p>${d.p}</p><p class="works">${d.w}</p>`;
  });
});

/* ===== 词典 ===== */
const words = [
  {w:'卡司 Cast', d:'演员阵容。同一角色不同场次可能由不同演员扮演，于是有了"卡司"的差别。'},
  {w:'安可 Encore', d:'正剧结束后，在观众持续的掌声中演员返场加演的曲目。'},
  {w:'返场', d:'谢幕之后演员再次登场，有时会带来全剧最嗨的彩蛋表演。'},
  {w:'SD Stage Door', d:'演职人员通道。演出结束后，观众可在门口等演员出来签名、合影。'},
  {w:'替卡 Understudy', d:'替补演员，主演无法上场时顶替演出，常常带来惊喜。'},
  {w:'挂壁', d:'坐在剧场最偏的位置，紧贴侧墙，视野会被挡住一部分。'},
  {w:'彩蛋', d:'藏在演出里的惊喜细节，或返场时特别安排的表演。'},
  {w:'官摄', d:'官方录制的高清现场视频，是入坑和补课的最佳资料。'},
  {w:'巡演', d:'剧目离开常驻剧院，到不同城市巡回演出。'},
  {w:'开场钟', d:'演出开始前的提示铃声，三声之后请尽快入座。'}
];
const wordGrid = document.getElementById('wordGrid');
words.forEach(item => {
  const card = document.createElement('div');
  card.className = 'word-card';
  card.innerHTML = `<div class="word-inner">
    <div class="word-face wf-front">${item.w}</div>
    <div class="word-face wf-back">${item.d}</div>
  </div>`;
  card.addEventListener('click', () => card.classList.toggle('flipped'));
  wordGrid.appendChild(card);
});

/* ===== 礼仪测验 ===== */
const etiquette = [
  {q:'演出进行中，想拍下这一幕发朋友圈，可以吗？', opts:[
    {t:'可以，不开闪光就行', ok:false},
    {t:'不可以，演出全程禁止拍照录像', ok:true}
  ], exp:'从开场到谢幕，拍照、录像和录音都是禁止的，手机请调至静音。'},
  {q:'迟到了几分钟，正好听到熟悉的旋律，应该？', opts:[
    {t:'弯腰摸黑快速回到座位', ok:false},
    {t:'听从工作人员引导，在合适时机入场', ok:true}
  ], exp:'为不打扰演员与观众，迟到需在曲目间隙由工作人员引导入座。'},
  {q:'听到喜欢的歌，忍不住跟着小声唱，可以吗？', opts:[
    {t:'不可以，把舞台留给演员', ok:true},
    {t:'声音很小就没关系', ok:false}
  ], exp:'跟唱会干扰周围观众和台上的演员，用耳朵和掌声享受就好。'}
];
const quizBox = document.getElementById('quiz');
let qIndex = 0;
function renderQuiz(){
  if (qIndex >= etiquette.length){
    quizBox.innerHTML = `<p class="q-result">礼仪通关！你已经是一位合格的剧场观众了。</p>`;
    return;
  }
  const q = etiquette[qIndex];
  quizBox.innerHTML = `<p class="q-question">${qIndex+1}/${etiquette.length}　${q.q}</p>
    <div class="q-options">
      ${q.opts.map((o,i)=>`<button class="q-opt" data-i="${i}">${o.t}</button>`).join('')}
    </div>
    <div class="q-result" id="qResult"></div>`;
  quizBox.querySelectorAll('.q-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = +btn.dataset.i;
      quizBox.querySelectorAll('.q-opt').forEach((b,bi) => {
        if (q.opts[bi].ok) b.classList.add('correct');
        else if (bi === i) b.classList.add('wrong');
        b.disabled = true;
      });
      const res = document.getElementById('qResult');
      res.textContent = q.exp;
      qIndex++;
      const next = document.createElement('button');
      next.className = 'q-next';
      next.textContent = qIndex >= etiquette.length ? '完成' : '下一题';
      next.addEventListener('click', renderQuiz);
      res.appendChild(document.createElement('br'));
      res.appendChild(next);
    });
  });
}
renderQuiz();

/* ===== 入坑推荐测试 ===== */
const starter = [
  {q:'你更容易被什么打动？', opts:[
    {t:'华丽的视觉与浪漫', s:'phantom'},
    {t:'宏大的时代与命运', s:'lesmis'},
    {t:'抓耳的流行金曲', s:'nddp'},
    {t:'燃烧的摇滚能量', s:'rock'}
  ]},
  {q:'你更喜欢哪种故事？', opts:[
    {t:'悬疑、神秘的爱情', s:'phantom'},
    {t:'小人物与大时代', s:'lesmis'},
    {t:'经典文学悲剧', s:'nddp'},
    {t:'天才对抗世界', s:'rock'}
  ]},
  {q:'周末晚上，你更想？', opts:[
    {t:'沉浸在一场梦里', s:'phantom'},
    {t:'被史诗震撼到落泪', s:'lesmis'},
    {t:'哼着旋律回家', s:'nddp'},
    {t:'跟着节奏热血沸腾', s:'rock'}
  ]}
];
const starterResult = {
  phantom:{t:'《歌剧魅影》', p:'最华丽的入坑之选。让吊灯、地下湖和 The Music of the Night 带你入梦。', href:'https://www.bilibili.com/video/BV1ao4y1Z7tn'},
  lesmis:{t:'《悲惨世界》', p:'最震撼的入坑之选。准备好被一场关于苦难与救赎的史诗击中。', href:'https://www.bilibili.com/video/BV1xX4y1F7p6'},
  nddp:{t:'《巴黎圣母院》', p:'最好听的入坑之选。一唱到底的金曲，会让你立刻爱上法语音乐剧。', href:'https://www.bilibili.com/video/BV1Jq4y167t1'},
  rock:{t:'《摇滚莫扎特》', p:'最燃的入坑之选。摇滚与巴洛克齐飞，看完你会想立刻站起来。', href:'https://www.bilibili.com/video/av3058236'}
};
const starterBox = document.getElementById('starter');
let sIndex = 0;
const scores = {};
function renderStarter(){
  if (sIndex >= starter.length){
    let best = 'phantom', max = 0;
    Object.entries(scores).forEach(([k,v]) => { if (v > max){max = v; best = k;} });
    const r = starterResult[best];
    starterBox.innerHTML = `<div class="starter-result">
      <p class="q-result">你的第一部音乐剧是——</p>
      <h4>${r.t}</h4>
      <p>${r.p}</p>
      <a class="btn-bili" href="${r.href}" target="_blank" rel="noopener">▶ B 站看官摄</a>
      <br><br><button class="q-next" id="retry">再测一次</button>
    </div>`;
    document.getElementById('retry').addEventListener('click', () => {
      sIndex = 0; Object.keys(scores).forEach(k => delete scores[k]); renderStarter();
    });
    return;
  }
  const q = starter[sIndex];
  starterBox.innerHTML = `<p class="q-question">${sIndex+1}/${starter.length}　${q.q}</p>
    <div class="q-options">
      ${q.opts.map((o,i)=>`<button class="q-opt" data-i="${i}">${o.t}</button>`).join('')}
    </div>`;
  starterBox.querySelectorAll('.q-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const s = q.opts[+btn.dataset.i].s;
      scores[s] = (scores[s] || 0) + 1;
      sIndex++;
      renderStarter();
    });
  });
}
renderStarter();

/* ===== 年份时间轴 ===== */
document.querySelectorAll('.year-item').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    target.scrollIntoView({behavior:'smooth', block:'center'});
    target.classList.remove('flash');
    void target.offsetWidth;
    target.classList.add('flash');
    setTimeout(() => target.classList.remove('flash'), 1600);
  });
});

/* ===== 入坑清单 ===== */
const checks = document.querySelectorAll('#checklist input');
checks.forEach((c,i) => {
  c.checked = localStorage.getItem('musical-check-' + i) === '1';
  c.addEventListener('change', () => {
    localStorage.setItem('musical-check-' + i, c.checked ? '1' : '0');
  });
});

/* ===== 滚动渐入 ===== */
const revealTargets = document.querySelectorAll(
  '.sec-label,.big-title,.two-col,.flip-card,.compare-row,.light-console,.tl-item,.tl-panel,.pillar,.tab,.tab-panel,.word-card,.tip,.quiz,.starter,.year-item,.show-card,.vs-box,.checklist'
);
revealTargets.forEach(el => el.classList.add('reveal'));
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, {threshold:0.1});
revealTargets.forEach(el => io.observe(el));
