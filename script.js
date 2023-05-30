function handleUserMessage() {
  var userInput = document.getElementById('user-input');
  var userMessage = userInput.value.trim();
  addUserMessage(userMessage);

  if (userMessage !== '') {
    var optionNumber = parseInt(userMessage);
    if (!isNaN(optionNumber)) {
      var menuList = document.getElementsByClassName('menu-list')[0];
      var menuOptions = menuList.getElementsByTagName('li');
      var totalOptions = menuOptions.length;
      if (optionNumber >= 1 && optionNumber <= totalOptions) {
        var selectedOption = menuOptions[optionNumber - 1].getElementsByTagName('a')[0];
        selectedOption.click();
        
        userInput.value = '';
        return;
      }
    }
    
    // Caso a mensagem não seja um número válido ou não corresponda a uma opção do menu
    addBotMessage("Opção Inválida! Digite uma opção que\nseja correspondente ao menu!")
    userInput.value = '';
  }
}

function addUserMessage(message) {
  var chatMessages = document.getElementById('chat-messages');
  var messageContainer = document.createElement('div');
  messageContainer.className = 'user-message-container';

  var messageElement = document.createElement('div');
  messageElement.className = 'message user-message';
  messageElement.innerText = message;

  messageContainer.appendChild(messageElement);
  chatMessages.appendChild(messageContainer);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  setTimeout(function() {
    messageElement.classList.add('appear');
  }, 100);
}

function addBotMessage(message) {
  var chatMessages = document.getElementById('chat-messages');
  var messageContainer = document.createElement('div');
  messageContainer.className = 'bot-message-container';

  var messageElement = document.createElement('div');
  messageElement.className = 'message bot-message';

  // Variáveis para controlar a animação da digitação
  var index = 0;
  var typingSpeed = 40; // Velocidade de digitação (em milissegundos)

  // Função para exibir a próxima letra da mensagem
  function typeNextLetter() {
    if (index < message.length) {
      var currentChar = message.charAt(index);
      if (currentChar === ' ') {
        // Se o caractere atual for um espaço, adiciona um elemento <span> vazio
        messageElement.innerHTML += '<span>&nbsp;</span>';
      } else {
        messageElement.innerText += currentChar;
      }
      index++;
      setTimeout(typeNextLetter, typingSpeed);
    }
  }

  // Inicia a animação da digitação
  typeNextLetter();

  messageContainer.appendChild(messageElement);
  chatMessages.appendChild(messageContainer);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Adiciona a classe .appear com um pequeno atraso para iniciar a transição
  setTimeout(function() {
    messageElement.classList.add('appear');
  }, 100);
}

// Atualiza a data no topo do chat
function updateChatDate() {
  var currentDate = new Date();
  var dateElement = document.getElementById('chat-date');
  dateElement.innerText = currentDate.toLocaleDateString('pt-BR', {

    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function exibirMensagemBoasVindas() {
setTimeout(function() {
  addBotMessage("Olá! Seja bem-vindo à Universidade Federal de Alagoas!");
}, 1000);
}

window.addEventListener('load', exibirMensagemBoasVindas);

updateChatDate();

// Função para exibir o menu
function showMenu() {
  var chatMessages = document.getElementById('chat-messages');
  var messageContainer = document.createElement('div');
  messageContainer.className = 'bot-message-container';

  var messageElement = document.createElement('div');
  messageElement.className = 'message bot-message';

  // Crie o menu com as opções
  var menuOptions = [
    { name: '1 - Sistemas UFAL', submenu: [
      { name: '1 - Sieweb', url: 'https://sistemas.ufal.br/academico' },
      { name: '2 - AVA', url: 'https://sistemas.ufal.br/cas' },
      { name: '3 - SIGAA', url: 'https://sigaa.sig.ufal.br/sigaa/public/home.jsf' }
    ]},
    { name: '2 - Calendário acadêmico', url: 'https://ufal.br/estudante/graduacao/calendario-academico' },
    { name: '3 - Cursos de Graduação', url: 'https://arapiraca.ufal.br/graduacao' },
    { name: '4 - Assistência Estudantil', submenu: [
      { name: '1 - Editais', url: 'https://editais.ufal.br/assistencia-estudantil' },
      { name: '2 - Auxílios Financeiros', url: 'https://arapiraca.ufal.br/institucional/setores-e-orgaos-de-apoio/nae' },
      { name: '3 - Acessibilidade', url: 'https://arapiraca.ufal.br/institucional/setores-e-orgaos-de-apoio/nucleo-de-acessibilidade-da-ufal-nac' },
      { name: '4 - Restaurante Universitário', url: 'https://arapiraca.ufal.br/institucional/setores-e-orgaos-de-apoio/restaurante-universitario' }
    ]},
    { name: '5 - Programas com Bolsas', url: 'https://ufal.br/estudante/graduacao/programas' },
    { name: '6 - Consulta sobre o Pagamentos de Bolsas', url: 'https://ufal.br/transparencia/gastos/bolsa' },
    { name: '7 - Biblioteca', url: 'https://arapiraca.ufal.br/institucional/setores-e-orgaos-de-apoio/biblioteca' },
    { name: '8 - Outras Informações úteis', submenu: [
      { name: '1 - Normas Acadêmicas', url: 'https://ufal.br/estudante/graduacao/normas' },
      { name: '2 - Formulários', url: 'https://ufal.br/estudante/documentos/formularios' },
      { name: '3 - Dispensa de Disciplinas Cursadas', url: 'https://servicos.ufal.br/orgaos/departamento-de-registro-e-controle-academico-drca/dispensa-de-disciplinas-cursadas' },
      { name: '4 - Trancamento de Curso', url: 'https://servicos.ufal.br/orgaos/departamento-de-registro-e-controle-academico-drca/trancamento-de-curso-ou-matricula-total' },
      { name: '5 - Reopção', url: 'https://servicos.ufal.br/orgaos/departamento-de-registro-e-controle-academico-drca/reopcao-de-curso' },
      { name: '6 - Transferência Externa', url: 'https://servicos.ufal.br/orgaos/departamento-de-registro-e-controle-academico-drca/ingressar-na-ufal-por-meio-de-transferencia' },
      { name: '7 - Desistência ou Cancelamento de Matrícula', url: 'https://servicos.ufal.br/orgaos/departamento-de-registro-e-controle-academico-drca/desistencia-ou-cancelamento-total-da-matricula' }
    ]}
  ];

  var menuList = document.createElement('ul');
  menuList.className = 'menu-list';
  menuOptions.forEach(function(option) {
    var listItem = document.createElement('li');
    var link = document.createElement('a');
    link.innerText = option.name;
    link.addEventListener('click', function() {
      if (option.submenu) {
        showSubmenu(option.submenu, option.name); // Passa o nome da opção do menu principal como parâmetro
      } else {
        openExternalLink(option.url);
      }
    });
    listItem.appendChild(link);
    menuList.appendChild(listItem);
  });

  // Adicione o menu à mensagem do chatbot
  messageElement.appendChild(menuList);
  messageContainer.appendChild(messageElement);
  chatMessages.appendChild(messageContainer);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Adicione a classe .appear com um pequeno atraso para iniciar a transição
  setTimeout(function() {
    messageElement.classList.add('appear');
  }, 100);
}

function showSubmenu(submenuOptions, menuOptionName) {
  var chatMessages = document.getElementById('chat-messages');
  var messageContainer = document.createElement('div');
  messageContainer.className = 'bot-message-container';

  var messageElement = document.createElement('div');
  messageElement.className = 'message bot-message';

  // Crie o título do submenu
  var submenuTitle = document.createElement('div');
  submenuTitle.className = 'submenu-title';
  submenuTitle.innerText = menuOptionName; // Utiliza o nome da opção do menu principal como título

  if (menuOptionName === '1 - Sistemas UFAL') {
    submenuTitle.innerText = 'Sistemas UFAL';
  } else if (menuOptionName === '8 - Outras Informações úteis') {
    submenuTitle.innerText = 'Outras Informações úteis';
  } else if (menuOptionName === '4 - Assistência Estudantil') {
    submenuTitle.innerText = 'Assistência Estudantil';
  }

  messageElement.appendChild(submenuTitle);

  // Crie o submenu com as opções
  var submenuList = document.createElement('ul');
  submenuList.className = 'menu-list';
  submenuOptions.forEach(function(option) {
    var listItem = document.createElement('li');
    var link = document.createElement('a');
    link.innerText = option.name;
    link.addEventListener('click', function() {
      openExternalLink(option.url);
    });
    listItem.appendChild(link);
    submenuList.appendChild(listItem);
  });

  // Adicione o submenu à mensagem do chatbot
  messageElement.appendChild(submenuList);
  messageContainer.appendChild(messageElement);
  chatMessages.appendChild(messageContainer);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Adicione a classe .appear com um pequeno atraso para iniciar a transição
  setTimeout(function() {
    messageElement.classList.add('appear');
  }, 100);
}

// Função para abrir um link externo em uma nova aba
function openExternalLink(url) {
window.open(url, '_blank');
}

// Adicione a função showMenu ao seu código existente onde desejar
setTimeout(function() {
showMenu();
}, 4000);