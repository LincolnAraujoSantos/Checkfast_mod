const modelMap = {
  model1: "Standard",
  model2: "FOOTER",
  model3: "GNB",
  model4: "HOME",
  model5: "OFFER",
  model6: "PCD",
  model7: "PDP",
  model8: "PF",
  model9: "PFShomeapliences",
  model10: "PFSmobile",
  model11: "Redirect"
};

let fileUrl = null;
let fileName = null;

// Carregar username salvo
document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["username"], (result) => {
    if (result.username) document.getElementById("username").value = result.username;
  });
});

// Salvar username
document.getElementById("saveBtn").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  if (!username) return alert("Enter a username");
  chrome.storage.local.set({ username });
  // mostrar feedback visual
  document.getElementById("username").style.border = "2px solid #6a7f4d";
  setTimeout(() => document.getElementById("username").style.border = "1px solid #555", 1000);
});

// Replace username
document.getElementById("replaceBtn").addEventListener("click", () => {
  document.getElementById("username").value = "";
  chrome.storage.local.remove("username");
});

// Permitir apenas 1 checkbox
document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
  cb.addEventListener("change", () => {
    document.querySelectorAll('input[type="checkbox"]').forEach(o => {
      if (o !== cb) o.checked = false;
    });
  });
});

// Função para extrair ticket da URL
function extractTicket(url) {
  const match = url.match(/WSC\d{8}-\d{5}/);
  return match ? match[0] : null;
}

// Formatar data YYMMDD
function getDateYYMMDD() {
  const d = new Date();
  return String(d.getFullYear()).slice(2) +
         String(d.getMonth() + 1).padStart(2,"0") +
         String(d.getDate()).padStart(2,"0");
}

// Criar checklist
document.getElementById("generateBtn").addEventListener("click", async () => {
  const username = document.getElementById("username").value.trim();
  if (!username) return alert("Enter a username");

  // pegar URL da aba ativa
  chrome.tabs.query({ active: true, currentWindow: true }, async (tabs) => {
    const jiraUrl = tabs[0].url;
    const ticket = extractTicket(jiraUrl);
    if (!ticket) return alert("Não foi possível extrair o ticket da URL");

    const selected = [...document.querySelectorAll('input[type="checkbox"]')].find(cb => cb.checked);
    if (!selected) return alert("Selecione um template");

    const modelName = modelMap[selected.id];
    const modelPath = `models/QA_Prod_${modelName}_userName_DATE.xlsx`;
    fileName = `QA_Prod_${ticket}_${username}_${getDateYYMMDD()}.xlsx`;

    try {
      const response = await fetch(chrome.runtime.getURL(modelPath));
      if (!response.ok) throw new Error("Modelo não encontrado");
      const blob = await response.blob();
      fileUrl = URL.createObjectURL(blob);
      document.getElementById("downloadBtn").style.display = "block";
    } catch (err) {
      alert("Erro ao carregar o modelo");
      console.error(err);
    }
  });
});

// Download
document.getElementById("downloadBtn").addEventListener("click", () => {
  const a = document.createElement("a");
  a.href = fileUrl;
  a.download = fileName;
  a.click();

  // resetar checkboxes
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
  document.getElementById("downloadBtn").style.display = "none";

  // fechar automaticamente o popup da extensão após 1,5 segundos (1500 ms)
  setTimeout(() => {
    window.close();
  }, 1000);
});
