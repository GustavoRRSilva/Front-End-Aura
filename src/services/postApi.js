export const registerUser = async (dados) => {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });

    if (!response.ok) {
      // Tenta extrair o texto do erro da resposta
      const errorText = await response.text();
      throw new Error(errorText);
    }
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    } else {
      // Retorna uma mensagem caso a resposta não tenha corpo JSON
      return { message: "Lead enviado com sucesso!" };
    }
    // Tenta converter a resposta para JSON
  } catch (error) {
    throw new Error(error.message);
  }
};
