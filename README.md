# To-Do List

## Descrição do Projeto
Esta é uma aplicação de lista de tarefas (To-Do List) onde os usuários podem adicionar, editar, marcar como concluída e remover tarefas. Além disso, é possível desfazer a conclusão de uma tarefa. A aplicação é simples e responsiva, ideal para organizar tarefas diárias.

## Tecnologias Utilizadas
- **HTML5**: Estrutura da página.
- **CSS3**: Estilização, utilizando Bootstrap para facilitar a responsividade.
- **JavaScript**: Manipulação do DOM e controle das funcionalidades da lista de tarefas.
- **Bootstrap 5.3.3**: Framework CSS utilizado para estilização e componentes de layout.
- **Bootstrap Icons**: Ícones para melhorar a experiência do usuário na interface.

## Funcionalidades Implementadas
- **Adicionar tarefas**: O usuário pode digitar o nome da tarefa e adicioná-la à lista de "A fazer".
- **Marcar como concluída**: O usuário pode clicar no botão de check para mover a tarefa para a lista de tarefas feitas.
- **Desfazer conclusão**: O usuário pode clicar no botão de desfazer para retornar uma tarefa da lista de "Feitas" para "A fazer".
- **Editar tarefas**: O usuário pode editar o título de uma tarefa tanto na lista de tarefas "A fazer" quanto na lista de tarefas "Feitas".
- **Excluir tarefas**: O usuário pode excluir permanentemente uma tarefa de qualquer uma das listas.
- **Persistência temporária (em memória)**: As tarefas são mantidas em arrays temporários, atualizados dinamicamente na interface.
  
### Funcionalidades Extras
- **Responsividade**: A interface é adaptável para diferentes tamanhos de tela, incluindo mobile.
- **Interface Moderna**: Utiliza o framework Bootstrap 5.3.3 para fornecer uma interface clean e intuitiva com botões e ícones modernos.

### Execução
Por se tratar de um projeto simples, a execução não tem segredo. Para facilitar, disponibilizei o github pages. 
https://joaopedrosignor.github.io/ToDoList/

### Dificuldades
Tentei de diversas maneiras utilizar o Laravel, mas enfrentei vários problemas. Tive dificuldades com o arquivo php.ini e também com o arquivo env do próprio projeto Laravel, precisando alterá-los várias vezes. Depois de conseguir fazer o run dev funcionar sem problemas, enfrentei novos obstáculos ao tentar usar o phpMyAdmin, pois o MySQL do XAMPP não inicializava. Também tentei usar o MySQL Workbench no projeto Laravel, mas sem sucesso.
