# 🧾 Planilha de Trabalhadores Espíritas - GCE Casa do Caminho

Este software foi desenvolvido com o objetivo de facilitar a organização e gestão da escala de trabalhadores do GCE Casa do Caminho, priorizando a simplicidade visual e a funcionalidade prática.

---

## 📌 Descrição do Projeto

A **Planilha de Trabalhadores Espíritas** é uma aplicação desktop construída com **Electron, HTML, CSS e JavaScript**. Ela oferece uma interface intuitiva para agendamento de atividades dos trabalhadores da casa espírita, permitindo a visualização clara dos dias e aplicação de regras específicas para evitar conflitos e erros manuais.

---

## ⚙️ Funcionalidades

- **🗓️ Gestão de Escalas Mensais**: Criação e carregamento de planilhas para diferentes meses e anos.
- **🖱️ Seleção Interativa de Datas**: Clicável no campo "DIA", com uso de calendário popup.
- **📍 Sinalização Visual de Domingos**: Linhas de domingo são automaticamente destacadas em amarelo.
- **🖨️ Exportação em PDF**: Geração de arquivos PDF da planilha atual para impressão ou arquivamento.
- **💾 Armazenamento Local**: Dados são salvos automaticamente via `localStorage` (ou `sessionStorage` como fallback).

---

## 🧮 Seções da Planilha

A planilha é dividida nas seguintes seções principais:

- **Planilha do Trabalhador**: Escala principal (Recepção, Atendimento Fraterno, Passe, Direção, Expositor, Livro, Tema).
- **Atividades**: Registro adicional por data.
- **Fluidoterapia**: Controle de escala para aplicação de fluidos.
- **Harmonização do Salão**: Agendamento da harmonização do ambiente.
- **Passes**: Escala de trabalhadores para os passes espirituais.

---

## 🧠 Regras e Validações (com sinalização visual em vermelho)

O sistema aplica automaticamente regras importantes de escala, com **destaque em vermelho** para conflitos:

1. **Lídia, Fátima e Márcia** não podem trabalhar aos domingos.
2. **Eduardo** não pode ser escalado **no segundo domingo do mês**.
3. O **primeiro nome escalado no "Passe"** será automaticamente replicado no campo **"Direção"** do mesmo dia (campo editável).
4. **Dilma, Jany e Rogério** só podem trabalhar **aos domingos**.
5. **Jany** só pode participar do **"Passe"** se ela for a **Expositora** ou se **Rogério** for o Expositor.
6. Quem estiver escalado para a **"Recepção"** não pode ser escalado para nenhuma outra atividade no mesmo dia.

---

## 🧰 Tecnologias Utilizadas

- **[Electron](https://www.electronjs.org/)**: Framework para aplicações desktop multiplataforma.
- **HTML5**: Estrutura da interface gráfica.
- **CSS3**: Estilização da interface, incluindo suporte para impressão.
- **JavaScript**: Lógica do sistema e regras de validação.
- **localStorage / sessionStorage**: Persistência de dados local no navegador.

---

## 📎 Licença

Este projeto é livre para uso dentro do contexto do GCE Casa do Caminho e pode ser adaptado para fins não-comerciais.

---

## 🤝 Colaboração

Feedbacks e melhorias são bem-vindos para tornar o sistema ainda mais acessível e eficiente, especialmente para o público idoso e voluntário.

---

## 🙏 Gratidão

A todos os trabalhadores da Casa que dedicam seu tempo com amor e comprometimento.

---

