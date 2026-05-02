const errorInput = document.getElementById('error-input');
const langSelect = document.getElementById('lang-select');
const explainBtn = document.getElementById('explain-btn');
const resetBtn = document.getElementById('reset-btn');
const chatResetBtn = document.getElementById('chat-reset-btn');
const copyBtn = document.getElementById('copy-btn');
const inputView = document.getElementById('input-view');
const resultView = document.getElementById('result-view');
const chatView = document.getElementById('chat-view');
const loadingOverlay = document.getElementById('loading-overlay');
const errorToast = document.getElementById('error-toast');
const errorMsg = document.getElementById('error-msg');

const resSummary = document.getElementById('res-summary');
const resCauses = document.getElementById('res-causes');
const resFix = document.getElementById('res-fix');
const chatMessage = document.getElementById('chat-message');

const refineInputErr = document.getElementById('refine-input-err');
const refineInputChat = document.getElementById('refine-input-chat');
const reAnalyzeBtns = document.querySelectorAll('.re-analyze-btn');

let currentResult = null;

function showError(message) {
  errorMsg.innerText = message;
  errorToast.classList.remove('hidden');
  setTimeout(() => {
    errorToast.classList.add('hidden');
  }, 4000);
}

async function performAnalysis(text, lang) {
  loadingOverlay.classList.remove('hidden');
  
  try {
    const response = await fetch(`${CONFIG.API_BASE}/api/explain`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: text, lang })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.details || data.error || 'Connection failed');
    }

    currentResult = data;
    showResult(data, text);
  } catch (err) {
    console.error(err);
    showError(err.message);
  } finally {
    loadingOverlay.classList.add('hidden');
  }
}

explainBtn.addEventListener('click', () => {
  const text = errorInput.value.trim();
  const lang = langSelect.value;
  if (text) performAnalysis(text, lang);
});

reAnalyzeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const activeTextarea = btn.previousElementSibling;
    const text = activeTextarea.value.trim();
    const lang = langSelect.value;
    if (text) performAnalysis(text, lang);
  });
});

[resetBtn, chatResetBtn].forEach(btn => {
  btn.addEventListener('click', () => {
    inputView.classList.remove('hidden');
    resultView.classList.add('hidden');
    chatView.classList.add('hidden');
    errorInput.value = '';
  });
});

copyBtn.addEventListener('click', () => {
  if (currentResult && currentResult.fix) {
    navigator.clipboard.writeText(currentResult.fix);
    const originalText = copyBtn.innerText;
    copyBtn.innerText = 'Copied!';
    setTimeout(() => {
      copyBtn.innerText = originalText;
    }, 2000);
  }
});

function showResult(data, originalText) {
  inputView.classList.add('hidden');

  if (data.type === 'chat') {
    chatMessage.innerText = data.message;
    refineInputChat.value = originalText;
    chatView.classList.remove('hidden');
    resultView.classList.add('hidden');
  } else {
    resSummary.innerText = data.summary;
    resCauses.innerHTML = (data.causes || []).map(c => `<li>${c}</li>`).join('');
    resFix.innerText = data.fix || '';
    refineInputErr.value = originalText;
    resultView.classList.remove('hidden');
    chatView.classList.add('hidden');
  }
}
