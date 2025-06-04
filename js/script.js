// script.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario");
    const buttons = document.querySelectorAll(".btn-form");
    const navLinks = document.querySelectorAll("nav a");
  
    // Alternar exibição do formulário
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        form.classList.toggle("ativo");
        if (form.classList.contains("ativo")) {
          form.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Scroll suave para navegação
    navLinks.forEach(link => {
      link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Enviar mensagem para WhatsApp ao enviar o formulário
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const nome = form.querySelector("input[type='text']").value.trim();
      const email = form.querySelector("input[type='email']").value.trim();
      const mensagem = form.querySelector("textarea").value.trim();
  
      const numeroWhatsApp = "5575982884396"; // <-- Substitua pelo seu número com DDD e código do país (ex: 55)
  
      const texto = `Olá, me chamo *${nome}*.\nMeu e-mail é: ${email}\n\nMensagem:\n${mensagem}`;
      const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
  
      window.open(link, "_blank");
    });
  
    // Fechar formulário ao clicar fora
    document.addEventListener("click", e => {
      if (!form.contains(e.target) && !e.target.classList.contains("btn-form")) {
        form.classList.remove("ativo");
      }
    });
  });
  