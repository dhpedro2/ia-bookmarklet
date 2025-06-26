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
