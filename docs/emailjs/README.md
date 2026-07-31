# Configuração do EmailJS

O formulário de contato envia através do [EmailJS](https://dashboard.emailjs.com).
O código já está pronto — falta apenas criar o serviço/template no painel e
preencher as três credenciais.

## 1. Serviço de e-mail

**Email Services → Add New Service.** Escolha o provedor da caixa
`suporteti@novarutra.com.br` (Gmail/Google Workspace, Outlook, ou "Personal
SMTP" para o servidor do domínio) e autorize.

Anote o **Service ID** (algo como `service_ab12cde`).

## 2. Template

**Email Templates → Create New Template.** Abra o editor de código (`</>`) e cole
o conteúdo de [`template.html`](./template.html).

Na aba **Settings** do template:

| Campo          | Valor                                     |
| -------------- | ----------------------------------------- |
| **Subject**    | `Novo contato pelo site — {{from_name}}`   |
| **To Email**   | `suporteti@novarutra.com.br`              |
| **From Name**  | `Site NovaRutra`                          |
| **Reply To**   | `{{from_email}}`                          |

`Reply To` é o campo que faz diferença no dia a dia: com ele preenchido, basta
apertar "Responder" que a mensagem vai direto para o visitante, em vez de voltar
para você mesmo.

Anote o **Template ID** (algo como `template_xy34zab`).

## 3. Chave pública

**Account → General → Public Key.** Anote o valor.

## 4. Preencher no projeto

Em [`src/app/config/emailjs.config.ts`](../../src/app/config/emailjs.config.ts):

```ts
export const EMAILJS_CONFIG = {
    serviceId: 'service_ab12cde',
    templateId: 'template_xy34zab',
    publicKey: 'sua_public_key',
} as const;
```

## 5. Restringir a chave (importante)

**Account → Security → Allow-list.** Adicione `novarutra.com.br` e
`localhost`.

A public key é visível no código-fonte do site — isso é normal e esperado no
EmailJS. O que impede terceiros de usarem sua cota é essa allow-list de
domínios. Sem ela, qualquer pessoa pode copiar a chave e disparar e-mails pela
sua conta.

Vale ativar também o rate limiting na mesma tela.

## Variáveis usadas

Definidas em [`src/app/services/email.service.ts`](../../src/app/services/email.service.ts).
Se renomear qualquer uma, renomeie no template também:

| Variável        | Origem                                       |
| --------------- | -------------------------------------------- |
| `{{from_name}}` | campo "Seu Nome"                             |
| `{{from_email}}`| campo "E-mail"                               |
| `{{company}}`   | campo "Empresa" (`Não informado` se vazio)   |
| `{{message}}`   | campo "Como posso ajudar?"                   |

## Testando

```bash
npm start
```

Abra `http://localhost:4200/#contato` e envie uma mensagem. Se algo falhar, o
formulário mostra o erro em vermelho e mantém o texto digitado — o console do
navegador traz a resposta do EmailJS.

> A CSP em `src/index.html` já libera `https://api.emailjs.com` em
> `connect-src`. Se trocar de provedor de e-mail, atualize essa linha ou o
> navegador bloqueia a requisição.
