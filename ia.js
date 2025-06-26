(async () => {
  const question = prompt("Digite sua pergunta:");
  if (!question) return;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer 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"
      },
      body: JSON.stringify({
        model: "gpt-4o", // ou outro modelo suportado
        messages: [{ role: "user", content: question }]
      })
    });

    const data = await response.json();
    alert(data.choices?.[0]?.message?.content || "Sem resposta.");
  } catch (e) {
    alert("Erro: " + e.message);
  }
})();
