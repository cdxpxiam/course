(() => {
  const pages = [...document.querySelectorAll('.page')];
  const config = window.COURSE_CONFIG || {};
  let cloud;
  try { const url = new URL(config.interactiveUrl); if (url.protocol === 'https:' && !url.username && !url.password) cloud = url.href; } catch {}
  for (const slot of document.querySelectorAll('.cloud-slot')) {
    if (cloud) { const a = document.createElement('a'); a.href = cloud; a.className = 'button'; a.textContent = '进入互动课堂 ↗'; a.target = '_blank'; a.rel = 'noopener noreferrer'; slot.append(a); }
    else { slot.className += ' cloud-pending'; slot.textContent = '互动课堂正在部署，账号、作品提交与云端纠错接通后开放。'; }
  }
  function showPage() {
    const requested = location.hash.slice(1) || 'library';
    const id = pages.some(page => page.id === requested) ? requested : 'library';
    pages.forEach(page => { page.hidden = page.id !== id; });
    const active = id.startsWith('unit-') ? 'microcourse' : id === 'photo-gallery' ? 'library' : id;
    document.querySelectorAll('[data-nav]').forEach(a => { if (a.dataset.nav === active) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); });
    const heading = document.getElementById(id).querySelector('h2');
    document.title = heading.textContent + ' · 智测知行';
  }
  window.addEventListener('hashchange', () => { showPage(); document.getElementById('main').focus({preventScroll:true}); document.getElementById('main').scrollIntoView({block:'start'}); });
  showPage();
  document.querySelectorAll('form.quiz').forEach(form => form.addEventListener('submit', event => {
    event.preventDefault(); let score = 0;
    const fields = [...form.querySelectorAll('fieldset')];
    fields.forEach(field => { const explanation = field.querySelector('.answer'); const correct = explanation.dataset.correct; const chosen = field.querySelector('input:checked')?.value; if (correct === chosen) score++; let result = explanation.querySelector('strong'); if (!result) { result = document.createElement('strong'); explanation.prepend(result); } result.textContent = (correct === chosen ? '回答正确。' : '再核对一下。') + '参考答案：' + correct; explanation.hidden = false; });
    form.querySelector('.quiz-result').textContent = '本次答对 ' + score + ' / ' + fields.length + ' 题。请结合解释，再检查自己的理解。';
  }));
})();
