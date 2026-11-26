# Bela Vista — pacote ampliado

## O que funciona nesta versão
- Painel, agenda mensal, cadastro/edição/exclusão de reservas e clientes.
- Valores de reservas, despesas e resumo financeiro.
- Prévia de contrato e impressão/salvar PDF pelo navegador.
- Dados do espaço, taxa de atraso configurável e PIN local demonstrativo.
- Atalhos para abrir conversas individuais no WhatsApp.
- Catálogo local de fotos/vídeos (arquivos até 2 MB nesta versão).
- Revisão de contatos com consentimento marcado antes de preparar campanha manual.
- Avisos, histórico local, exportação e restauração de backup JSON.

## Limitações que ainda exigem configuração externa
Esta versão NÃO tem autenticação real, banco sincronizado, WhatsApp API, leitura/transcrição de conversas, IA generativa, geração programada de mídia, captura automática de avaliações ou notificações automáticas. O PIN e os dados ficam no navegador do aparelho. Não armazene dados sensíveis nem use como sistema multiusuário até conectar Supabase Auth/DB/Storage e validar segurança.

## Publicar no GitHub Pages
Substitua no repositório os arquivos `index.html`, `app.js`, `styles.css`, `manifest.webmanifest` e adicione `sw.js`. O Pages deve usar branch `main` e pasta `/ (root)`. Após o commit, aguarde o workflow Pages ficar verde.

## Próxima etapa: Supabase
1. Crie um projeto Supabase.
2. No SQL Editor, execute `supabase/schema.sql`.
3. Ative Auth por e-mail e configure políticas e recuperação de conta.
4. Criar bucket privado para `media`, com políticas por usuário.
5. Integrar o frontend com Supabase usando URL e anon key (nunca inserir service_role no navegador).

## WhatsApp e IA
WhatsApp Cloud API, webhooks, modelos aprovados e provedores de IA devem rodar em funções/server-side com segredos guardados no ambiente do servidor. Nunca coloque tokens no `app.js`. Exija consentimento demonstrável e opção de descadastro; revise destinatários antes de cada campanha.

## Segurança e contrato
O contrato é apenas uma minuta técnica inicial e deve ser revisado por advogado. Conferir endereço, dados das partes, regras locais, valores, caução, cancelamento, tolerância e incidência de multa antes de usar.
