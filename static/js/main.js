const SITE_CONFIG = {
  githubUser: 'PaxShade',
  repoName: 'testirovanie',
  branch: 'main',
  student: 'Антипов Андрей Олегович',
  group: 'ИВТ-231',
  supervisor: 'Лавлинская О.Ю.',

  checkpoints: [
    {
      id: 'kt1',
      title: 'Контрольная точка 1',
      subtitle: 'Интуитивное и модульное тестирование (Python)',
      status: 'checked',
      folder: 'kt1',
      labs: [
        {
          id: 'lab1',
          number: 'Лабораторная работа №1',
          title: 'Применение методов интуитивного тестирования и отладки',
          variant: 'Задача A. ИИ',
          status: 'checked',
          folder: 'kt1/lab1',
          report: { name: 'Отчет лаб1.docx', path: 'kt1/Отчет лаб1.docx' },
          description:
            'Анализ исходного кода методом предугадывания ошибок (Error Guessing), составление журнала дефектов, добавление валидации ввода и обработки исключения ValueError.',
          tags: ['Python', 'Error Guessing', 'Отладка'],
          files: [
            { name: 'main.py', path: 'kt1/lab1/main.py', desc: 'Исправленный исходный код программы' },
          ],
        },
        {
          id: 'lab2',
          number: 'Лабораторная работа №2',
          title: 'Модульное тестирование в программной среде',
          variant: 'Вариант 1 (ComplexNumber) · Вариант 5 (ShoppingCart)',
          status: 'checked',
          folder: 'kt1/lab2',
          report: { name: 'Отчет лаб2.docx', path: 'kt1/Отчет лаб2.docx' },
          description:
            'Реализация классов ComplexNumber и ShoppingCart и автоматизация модульного тестирования на базе unittest. Все 9 тестов успешно пройдены (OK).',
          tags: ['Python', 'unittest', '9 тестов OK'],
          files: [
            { name: 'complex_number.py', path: 'kt1/lab2/complex_number.py', desc: 'Класс комплексного числа' },
            { name: 'test_complex_number.py', path: 'kt1/lab2/test_complex_number.py', desc: 'Модульные тесты ComplexNumber' },
            { name: 'shopping_cart.py', path: 'kt1/lab2/shopping_cart.py', desc: 'Класс корзины покупок' },
            { name: 'test_shopping_cart.py', path: 'kt1/lab2/test_shopping_cart.py', desc: 'Модульные тесты ShoppingCart' },
          ],
        },
      ],
    },
    {
      id: 'kt2',
      title: 'Контрольная точка 2',
      subtitle: 'Тестовое покрытие на графах и нагрузочное тестирование (Python / C++)',
      status: 'pending_review',
      folder: 'kt2',
      labs: [
        {
          id: 'lab3',
          number: 'Лабораторная работа №3',
          title: 'Тестовое покрытие на графах',
          variant: 'Граф потока управления main.py (ЦС = 4)',
          status: 'pending_review',
          folder: 'kt2/lab3',
          report: { name: 'Отчет лаб3.docx', path: 'kt2/Отчет лаб3.docx' },
          description:
            'Построение SESE-графа (7 вершин, 9 рёбер), расчёт цикломатической сложности, тестовая документация по ГОСТ Р 56922—2016 и 100% покрытие основных путей (6/6 тестов OK).',
          tags: ['Python', 'unittest', 'Графы', 'ГОСТ'],
          files: [
            { name: 'main.py', path: 'kt2/lab3/main.py', desc: 'Тестируемый модуль из ЛР №1' },
            { name: 'test_main_grah.py', path: 'kt2/lab3/test_main_grah.py', desc: 'Автотесты покрытия путей графа' },
          ],
        },
        {
          id: 'lab4',
          number: 'Лабораторная работа №4',
          title: 'Регрессионное и нагрузочное тестирование',
          variant: 'Многопоточный генератор нагрузки LoadTestingLab',
          status: 'pending_review',
          folder: 'kt2/lab4',
          report: { name: 'Отчет лаб4.docx', path: 'kt2/Отчет лаб4.docx' },
          description:
            'Замер TPS, средней задержки и перцентилей P95/P99 при 50 и 500 потоках, реализация Ramp-up (100 мс) и сравнение сборок Debug и Release.',
          tags: ['C++14', 'Multithreading', 'TPS / P95 / P99'],
          files: [
            { name: 'LoadTestingLab.cpp', path: 'kt2/lab4/LoadTestingLab.cpp', desc: 'Исходный код генератора нагрузки' },
            { name: 'LoadTestingLab.sln', path: 'kt2/lab4/LoadTestingLab.sln', desc: 'Файл решения Visual Studio' },
            { name: 'LoadTestingLab.vcxproj', path: 'kt2/lab4/LoadTestingLab.vcxproj', desc: 'Конфигурация проекта VS' },
            { name: 'LoadTestingLab.vcxproj.filters', path: 'kt2/lab4/LoadTestingLab.vcxproj.filters', desc: 'Фильтры проекта VS' },
          ],
        },
      ],
    },
    {
      id: 'kt3',
      title: 'Контрольная точка 3',
      subtitle: 'UI-тестирование и автоматизация (Python, Selenium, Pytest)',
      status: 'pending_review',
      folder: 'kt3',
      labs: [
        {
          id: 'lab5',
          number: 'Лабораторная работа №5',
          title: 'UI-тестирование и автоматизация тестирования веб-интерфейса',
          variant: 'Стенд Swag Labs (saucedemo.com) · 10 сценариев',
          status: 'pending_review',
          folder: 'kt3/lab5',
          report: { name: 'Отчет лаб5.docx', path: 'kt3/Отчет лаб5.docx' },
          description:
            'Ручное UI-тестирование с картой тест-кейсов (TC-1 — TC-10) и автоматизация проверок на Python + Selenium + Pytest в Firefox. Все 10 тестов пройдены (10 passed, 0 дефектов).',
          tags: ['Python', 'Selenium', 'Pytest', '10 passed'],
          files: [
            { name: 'test_login.py', path: 'kt3/lab5/test_login.py', desc: 'Автотесты UI-сценариев TC-1 — TC-10' },
          ],
        },
      ],
    },
    {
      id: 'kt4',
      title: 'Контрольная точка 4',
      subtitle: 'Ожидается публикация заданий (количество лабораторных уточняется)',
      status: 'planned',
      folder: 'kt4',
      labs: [],
    },
  ],
};

const STATUS_META = {
  checked: {
    label: 'Проверено · Оценка',
    classes: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
  },
  pending_review: {
    label: 'На проверке',
    classes: 'bg-sky-100 text-sky-800 dark:bg-sky-950/70 dark:text-sky-300 border border-sky-200 dark:border-sky-800',
  },
  in_progress: {
    label: 'В процессе',
    classes: 'bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-200 dark:border-amber-800',
  },
  planned: {
    label: 'Запланировано',
    classes: 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700',
  },
};

const state = {
  activeTab: 'all',
  query: '',
};

function githubRepoUrl() {
  return `https://github.com/${SITE_CONFIG.githubUser}/${SITE_CONFIG.repoName}`;
}

function githubBlobUrl(path) {
  return `${githubRepoUrl()}/blob/${SITE_CONFIG.branch}/${encodeURI(path)}`;
}

function githubTreeUrl(path) {
  return `${githubRepoUrl()}/tree/${SITE_CONFIG.branch}/${encodeURI(path)}`;
}

function githubRawUrl(path) {
  return `https://raw.githubusercontent.com/${SITE_CONFIG.githubUser}/${SITE_CONFIG.repoName}/${SITE_CONFIG.branch}/${encodeURI(path)}`;
}

function officeViewerEmbedUrl(path) {
  return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(githubRawUrl(path))}`;
}

function officeViewerExternalUrl(path) {
  return `https://view.officeapps.live.com/op/view.aspx?src=${encodeURIComponent(githubRawUrl(path))}`;
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderHeaderAndStats() {
  document.getElementById('student-meta').textContent =
    `${SITE_CONFIG.student} · ${SITE_CONFIG.group} · Рук.: ${SITE_CONFIG.supervisor}`;
  document.getElementById('repo-link').href = githubRepoUrl();

  const allLabs = SITE_CONFIG.checkpoints.flatMap((kt) => kt.labs);
  const doneLabs = allLabs.filter(
    (l) => l.status === 'checked' || l.status === 'pending_review'
  ).length;
  const totalFiles = allLabs.reduce(
    (sum, lab) => sum + lab.files.length + (lab.report ? 1 : 0),
    0
  );

  document.getElementById('stat-kts').textContent = SITE_CONFIG.checkpoints.length;
  document.getElementById('stat-labs').textContent = `${doneLabs} / ${allLabs.length}`;
  document.getElementById('stat-files').textContent = totalFiles;

  const pct = allLabs.length ? Math.round((doneLabs / allLabs.length) * 100) : 0;
  document.getElementById('progress-bar').style.width = `${pct}%`;
}

function renderTabs() {
  const tabsEl = document.getElementById('kt-tabs');
  const items = [
    { id: 'all', label: 'Все КТ' },
    ...SITE_CONFIG.checkpoints.map((kt, idx) => ({ id: kt.id, label: `КТ ${idx + 1}` })),
  ];

  tabsEl.innerHTML = items
    .map((item) => {
      const active = state.activeTab === item.id;
      const cls = active
        ? 'bg-indigo-600 text-white border-indigo-600'
        : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800';
      return `<button data-tab="${item.id}" class="px-3.5 py-1.5 rounded-lg text-sm font-medium border transition ${cls}">${item.label}</button>`;
    })
    .join('');

  tabsEl.querySelectorAll('button[data-tab]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.activeTab = btn.dataset.tab;
      renderTabs();
      renderContent();
    });
  });
}

function matchesSearch(kt, lab, query) {
  if (!query) return true;
  const haystack = [
    kt.title,
    kt.subtitle,
    lab?.number || '',
    lab?.title || '',
    lab?.variant || '',
    lab?.description || '',
    lab?.report?.name || '',
    ...(lab?.tags || []),
    ...(lab?.files || []).map((f) => `${f.name} ${f.desc}`),
  ]
    .join(' ')
    .toLowerCase();
  return haystack.includes(query);
}

function renderContent() {
  const container = document.getElementById('content-container');
  const q = state.query.trim().toLowerCase();

  const visibleKts = SITE_CONFIG.checkpoints.filter(
    (kt) => state.activeTab === 'all' || kt.id === state.activeTab
  );

  const blocks = [];

  for (const kt of visibleKts) {
    const filteredLabs = kt.labs.filter((lab) => matchesSearch(kt, lab, q));
    const ktMatchesDirectly = !q || matchesSearch(kt, null, q);

    if (q && filteredLabs.length === 0 && !ktMatchesDirectly) continue;

    const status = STATUS_META[kt.status] || STATUS_META.planned;

    const labsHtml =
      filteredLabs.length > 0
        ? `
          <div class="mt-5 grid grid-cols-1 ${filteredLabs.length > 1 ? 'md:grid-cols-2' : ''} gap-4">
            ${filteredLabs.map((lab) => renderLabCard(lab)).join('')}
          </div>
        `
        : `
          <div class="mt-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 p-6 text-center text-sm text-slate-500 dark:text-slate-400">
            Материалы для этой контрольной точки появятся позже.
          </div>
        `;

    blocks.push(`
      <article class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm">
        <div class="flex flex-wrap items-start justify-between gap-3">
          <div>
            <div class="flex flex-wrap items-center gap-2.5">
              <h2 class="text-lg font-bold">${escapeHtml(kt.title)}</h2>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-medium ${status.classes}">${status.label}</span>
            </div>
            <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">${escapeHtml(kt.subtitle)}</p>
          </div>
          ${
            kt.status === 'checked' || kt.status === 'pending_review'
              ? `<a href="${githubTreeUrl(kt.folder)}" target="_blank" rel="noopener noreferrer"
                    class="text-xs font-mono text-indigo-600 dark:text-indigo-400 hover:underline">
                    /${escapeHtml(kt.folder)}/ ↗
                 </a>`
              : ''
          }
        </div>
        ${labsHtml}
      </article>
    `);
  }

  container.innerHTML =
    blocks.length > 0
      ? blocks.join('')
      : `<div class="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-10 text-center text-sm text-slate-500">По запросу «${escapeHtml(state.query)}» ничего не найдено.</div>`;

  container.querySelectorAll('button[data-preview-path]').forEach((btn) => {
    btn.addEventListener('click', () => {
      openCodeModal(btn.dataset.previewName, btn.dataset.previewPath);
    });
  });

  container.querySelectorAll('button[data-doc-path]').forEach((btn) => {
    btn.addEventListener('click', () => {
      openDocModal(btn.dataset.docName, btn.dataset.docPath);
    });
  });
}

function renderLabCard(lab) {
  const st = STATUS_META[lab.status] || STATUS_META.planned;

  const tagsHtml = lab.tags
    .map(
      (tag) =>
        `<span class="px-2 py-0.5 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">${escapeHtml(tag)}</span>`
    )
    .join('');

  const reportHtml = lab.report
    ? `
      <div class="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/70 dark:bg-indigo-950/30 px-3 py-2">
        <div class="flex items-center gap-2 min-w-0">
          <span class="px-1.5 py-0.5 rounded bg-indigo-600/15 text-indigo-700 dark:text-indigo-300 font-mono text-[10px] font-bold">DOCX</span>
          <span class="text-xs font-medium truncate" title="${escapeHtml(lab.report.name)}">${escapeHtml(lab.report.name)}</span>
        </div>
        <div class="flex items-center gap-1.5 shrink-0">
          <button type="button"
                  data-doc-name="${escapeHtml(lab.report.name)}"
                  data-doc-path="${escapeHtml(lab.report.path)}"
                  title="Открыть отчёт онлайн"
                  class="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-600 text-white hover:bg-indigo-500 transition">
            <span>👁</span><span>Просмотр</span>
          </button>
          <a href="${encodeURI(lab.report.path)}" download title="Скачать файл"
             class="px-2.5 py-1 rounded-md text-xs font-medium border border-indigo-300 dark:border-indigo-800 bg-white dark:bg-slate-900 hover:bg-indigo-50 dark:hover:bg-slate-800 transition">
            Скачать
          </a>
          <a href="${githubBlobUrl(lab.report.path)}" target="_blank" rel="noopener noreferrer" title="Открыть на GitHub"
             class="px-2 py-1 rounded-md text-xs border border-indigo-300 dark:border-indigo-800 bg-white dark:bg-slate-900 hover:bg-indigo-50 dark:hover:bg-slate-800 transition">
            ↗
          </a>
        </div>
      </div>
    `
    : '';

  const filesHtml =
    lab.files.length > 0
      ? `
        <ul class="mt-3 space-y-2 border-t border-slate-200/70 dark:border-slate-800 pt-3">
          ${lab.files
            .map(
              (file) => `
              <li class="flex items-center justify-between gap-2 text-xs">
                <div class="min-w-0">
                  <span class="font-mono font-medium text-slate-800 dark:text-slate-200 block truncate">${escapeHtml(file.name)}</span>
                  <span class="text-slate-500 dark:text-slate-400 block truncate">${escapeHtml(file.desc)}</span>
                </div>
                <div class="flex items-center gap-1.5 shrink-0">
                  <button type="button" data-preview-name="${escapeHtml(file.name)}" data-preview-path="${escapeHtml(file.path)}"
                          class="px-2.5 py-1 rounded-md font-medium bg-slate-200/70 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white transition">
                    Код
                  </button>
                  <a href="${githubBlobUrl(file.path)}" target="_blank" rel="noopener noreferrer" title="Открыть на GitHub"
                     class="px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition">
                    ↗
                  </a>
                </div>
              </li>
            `
            )
            .join('')}
        </ul>
      `
      : `<div class="mt-4 pt-3 border-t border-slate-200/70 dark:border-slate-800 text-xs text-slate-400 italic">Работа в процессе — файлы и отчёт будут добавлены позже</div>`;

  return `
    <div class="flex flex-col justify-between rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-950/40 p-4">
      <div>
        <div class="flex items-center justify-between gap-2">
          <span class="text-xs font-semibold uppercase tracking-wide text-indigo-600 dark:text-indigo-400">${escapeHtml(lab.number)}</span>
          <span class="px-2 py-0.5 rounded-full text-[11px] font-medium ${st.classes}">${st.label}</span>
        </div>
        <h3 class="mt-1.5 font-semibold text-base leading-snug">${escapeHtml(lab.title)}</h3>
        ${lab.variant ? `<p class="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">${escapeHtml(lab.variant)}</p>` : ''}
        <p class="mt-2.5 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">${escapeHtml(lab.description)}</p>
        <div class="mt-3 flex flex-wrap gap-1.5">${tagsHtml}</div>
      </div>
      <div>
        ${reportHtml}
        ${filesHtml}
      </div>
    </div>
  `;
}

// --- Модальное окно просмотра кода (UTF-8 + Windows-1251 fallback) ---
const codeModal = document.getElementById('code-modal');
const modalFilename = document.getElementById('modal-filename');
const modalFilepath = document.getElementById('modal-filepath');
const modalCode = document.getElementById('modal-code');
const modalGithub = document.getElementById('modal-github');
const modalCopy = document.getElementById('modal-copy');

let currentRawCode = '';

async function openCodeModal(name, path) {
  modalFilename.textContent = name;
  modalFilepath.textContent = path;
  modalGithub.href = githubBlobUrl(path);
  modalCode.textContent = 'Загрузка файла...';
  currentRawCode = '';

  codeModal.classList.remove('hidden');
  codeModal.classList.add('flex');

  try {
    const resp = await fetch(encodeURI(path));
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const buffer = await resp.arrayBuffer();

    // Пробуем UTF-8; если файл сохранён в Visual Studio как Windows-1251, декодируем через cp1251
    let text;
    try {
      text = new TextDecoder('utf-8', { fatal: true }).decode(buffer);
    } catch {
      text = new TextDecoder('windows-1251').decode(buffer);
    }

    currentRawCode = text;
    modalCode.textContent = text;
  } catch (err) {
    modalCode.textContent =
      `Не удалось загрузить файл локально (${err.message}).\nОткройте его через кнопку «На GitHub ↗» или запустите локальный сервер (python app.py).`;
  }
}

function closeCodeModal() {
  codeModal.classList.add('hidden');
  codeModal.classList.remove('flex');
}

document.getElementById('modal-close').addEventListener('click', closeCodeModal);
codeModal.addEventListener('click', (e) => {
  if (e.target === codeModal) closeCodeModal();
});

modalCopy.addEventListener('click', async () => {
  if (!currentRawCode) return;
  try {
    await navigator.clipboard.writeText(currentRawCode);
    const prev = modalCopy.textContent;
    modalCopy.textContent = 'Скопировано ✓';
    setTimeout(() => (modalCopy.textContent = prev), 1500);
  } catch {
    modalCopy.textContent = 'Ошибка';
  }
});

// --- Модальное окно онлайн-просмотра .docx ---
const docModal = document.getElementById('doc-modal');
const docModalTitle = document.getElementById('doc-modal-title');
const docModalPath = document.getElementById('doc-modal-path');
const docModalDownload = document.getElementById('doc-modal-download');
const docModalExternal = document.getElementById('doc-modal-external');
const docModalIframe = document.getElementById('doc-modal-iframe');

function openDocModal(name, path) {
  docModalTitle.textContent = name;
  docModalPath.textContent = path;
  docModalDownload.href = encodeURI(path);
  docModalExternal.href = officeViewerExternalUrl(path);
  docModalIframe.src = officeViewerEmbedUrl(path);

  docModal.classList.remove('hidden');
  docModal.classList.add('flex');
}

function closeDocModal() {
  docModal.classList.add('hidden');
  docModal.classList.remove('flex');
  docModalIframe.src = 'about:blank';
}

document.getElementById('doc-modal-close').addEventListener('click', closeDocModal);
docModal.addEventListener('click', (e) => {
  if (e.target === docModal) closeDocModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!codeModal.classList.contains('hidden')) closeCodeModal();
    if (!docModal.classList.contains('hidden')) closeDocModal();
  }
});

// --- Тема и поиск ---
document.getElementById('theme-toggle').addEventListener('click', () => {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

document.getElementById('search-input').addEventListener('input', (e) => {
  state.query = e.target.value;
  renderContent();
});

// --- Инициализация ---
renderHeaderAndStats();
renderTabs();
renderContent();
