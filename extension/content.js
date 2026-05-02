document.addEventListener('mouseup', () => {
  const selectedText = window.getSelection().toString().trim();
  
  if (selectedText.length > 10 && 
     (selectedText.toLowerCase().includes('error') || 
      selectedText.toLowerCase().includes('exception') || 
      selectedText.toLowerCase().includes('traceback'))) {
    
    if (chrome && chrome.storage && chrome.storage.local) {
      chrome.storage.local.set({ lastSelectedError: selectedText });
    }
  }
});
