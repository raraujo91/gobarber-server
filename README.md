# RECUPERAÇÃO DE SENHA

**RF** Requisitos funcionais

- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuãrio deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar a sua senha.

**RNF** Requisitos não-funcionais

- Utilizar **Mailtrap** para testar envios em ambiente de desenvolvimento;
- Utilizar o **Amazon SES** para envios em produção;
- O envio de e-mail deve acontecer em segundo plano (background job)

**RN** Regras de negócio

- O link enviado por e-mail para resetar a senha deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetá-la;

# ATUALIZAÇÃO DO PERFIL

**RF**

- O usuário deve poder atualizar seu nome, email e senha;

**RN**

- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar a sua senha, o usuário deve informar a senha antiga;
- Para atualizar a sua senha, o usuário precisa confirmar a nova senha.

# PAINEL DO PRESTADOR

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não-lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo=real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar;


# AGENDAMENTO DE SERVIÇOS

**RF**

- O usuário deve poder listar todos prestadores de serviço cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuãrio deve poder listar horários disponiveis de um dia especifico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar uma hora exatamente;
- Os agendamentos devem estar disponiveis entre 8h às 18h (primeiro às 8h e último às 17h);
- O usuário não pode agendar um horário já ocupado;
- O usuário não pode agendar um horário qeu já passou;
- O usuário não pode agendar serviços consigo mesmo;

