# Bela Vista — primeira versão funcional (PWA)

## O que funciona nesta versão
- Acesso local com senha provisória `1234` (alterável em Configurações).
- Cadastro, edição e consulta de reservas.
- Calendário mensal com indicação de datas ocupadas.
- Lista de clientes pesquisável.
- Painel de valores contratados, recebidos e em aberto.
- Geração de minuta de contrato e impressão/Salvar como PDF pelo navegador.
- Catálogo local para imagens e vídeos pequenos.

## Limitações importantes
Esta é uma primeira versão local: os dados ficam no armazenamento do navegador do aparelho. Não há ainda sincronização entre celulares, autenticação segura em nuvem, cópia de segurança, integração oficial do WhatsApp, geração de mídia por IA, campanhas, nem leitura automática de avaliações. Não use dados pessoais reais de clientes até conectar e testar um backend seguro.
O contrato é uma minuta operacional, não aconselhamento jurídico. Complete as condições comerciais e peça revisão jurídica.

## Publicar usando somente iPhone
Para instalar como PWA, o site precisa estar hospedado em HTTPS. O caminho mais simples é criar um repositório no GitHub pelo Safari, enviar estes arquivos e importar o repositório na Vercel. Depois abra a URL publicada no Safari > Compartilhar > Adicionar à Tela de Início.
A publicação e a configuração de backend exigem contas do usuário. Nunca compartilhe senhas ou códigos no chat.

## Próxima etapa para uso em vários aparelhos
Conectar Supabase com tabelas de usuários, reservas, clientes, pagamentos, arquivos e log de auditoria; ativar regras de acesso por proprietário; depois configurar backup e autenticação. Só então ativar o login multiaparelho.
